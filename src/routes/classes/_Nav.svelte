<script lang="ts">
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import { classes } from '$lib/classes/classes';
	import { onMount } from 'svelte';

	function updatePageIndicator() {
		if (browser) {
			const pageIndicator = document.querySelector(
				'.page-indicator'
			) as HTMLDivElement;
			if (!pageIndicator) return;
			const classIndex = classes.findIndex(
				(c) => c.name.toLowerCase() === $page.path.substring('/classes/'.length)
			);
			const theClass = classes[classIndex];
			pageIndicator.style.width = `${100 / classes.length}%`;
			pageIndicator.style.left = `${(classIndex * 100) / classes.length}%`;
			if (theClass) {
				pageIndicator.style.backgroundColor = theClass.color;
			} else {
				pageIndicator.style.backgroundColor = 'white';
			}
		}
	}

	onMount(() => {
		updatePageIndicator();
	});

	$: if ($page.path) {
		// on reroute.
		updatePageIndicator();
	}
</script>

<div class="header">
	<div class="page-indicator" />
	<nav>
		{#each classes as c}
			<a
				style="background-color: {c.color};"
				href="/classes/{c.name.toLowerCase()}"
				><img src="/images/classes/{c.name.toLowerCase()}.png" alt="" /></a
			>
		{/each}
	</nav>
</div>

<style lang="scss">
	.header {
		position: relative;
	}

	nav {
		display: flex;
	}

	.page-indicator {
		position: absolute;
		top: 103px;
		height: 3px;
		transition: left 1s, background-color 1s;
	}

	a {
		flex: 1;
		height: 100px;
	}

	a img {
		height: 70%;
		margin: 15px auto;
		display: block;
	}
</style>
