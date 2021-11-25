<script lang="ts">
	import { classes } from '$lib/classes';

	let open = false;
	let height = 100 / (classes.length + 1);
	$: arrowDir = open ? 0 : 1;

	function toggle() {
		open = !open;
	}
</script>

<div on:click={toggle} class="nav-toggler" style="height: {height}vh">
	<svg viewBox="-1 -1 4 3" class="arrow">
		<line x1="0" y1={1 - arrowDir} x2="1" y2={arrowDir} />
		<line x1="1" y1={arrowDir} x2="2" y2={1 - arrowDir} />
	</svg>
</div>

{#each classes as c, i}
	<a href="/{c.name}" on:click={() => (open = false)}>
		<div
			class="nav-el"
			style="background-color: {c.color}; 
           height: {height}vh;
           top: {open ? (i + 1) * height : 0}vh;
           z-index: {999 - i - 1};"
		>
			<img src="/images/{c.name}.png" alt="" style="height: 70%;" />
		</div>
	</a>
{/each}

<style lang="scss">
	.nav-toggler {
		position: relative;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}

	.nav-el {
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
		transition: top 1s;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.arrow {
		height: 100%;
		fill: none;
		stroke: #000000;
		stroke-width: 0.1;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-opacity: 1;
		stroke-miterlimit: 4;
		stroke-dasharray: none;
	}
</style>
