<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	import { classes } from '$lib/classes';

	export async function load({ page, fetch }: LoadInput): Promise<LoadOutput> {
		const res = await fetch(`/${page.params.className}.json`);
		const data = await res.json();
		const theClass = classes.find((c) => c.name === page.params.className);
		if (!theClass) {
			return {
				status: 404,
			};
		}
		return {
			status: 200,
			props: {
				content: data.content,
				theClass,
			},
		};
	}
</script>

<script lang="ts">
	import type { Class } from '$lib/classes';
	import { fade } from 'svelte/transition';
	import { marked } from 'marked';
	import { page } from '$app/stores';

	import Og from '$lib/OG.svelte';

	export let content: string;
	export let theClass: Class;

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<svelte:head>
	<title>{theClass.prettyName}</title>
	<Og
		title={theClass.prettyName}
		description={theClass.embedInfo.description}
		image="/images/embed/{theClass.name}.png"
		alt={theClass.embedInfo.alt}
		url="https://{$page.host}/{$page.path}"
	/>
</svelte:head>

{#key theClass}
	<main out:fade in:fade={{ delay: 500 }}>
		<h1 style="color: {theClass.color}; border-color: {theClass.color};">
			{theClass.prettyName ?? capitalize(theClass.name)}
		</h1>
		{@html marked(content).replace(
			/v\[(.*?)\]/,
			`<video src="/videos/$1.mp4" controls>`
		)}
	</main>
{/key}
