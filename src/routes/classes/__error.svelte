<script>
	import { fade } from 'svelte/transition';
</script>

<main out:fade in:fade={{ delay: 500 }}>
	<h1>404</h1>
	<p>Sorry, that page doesn't exist.</p>
</main>
