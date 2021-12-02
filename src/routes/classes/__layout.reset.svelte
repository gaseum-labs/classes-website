<script>
	import Nav from './_Nav.svelte';
	import MobileNav from './_MobileNav.svelte';
</script>

<div class="not-mobile">
	<Nav />
</div>
<div class="mobile">
	<MobileNav />
</div>

<div class="classes">
	<slot />
</div>

<style lang="scss">
	@media (min-width: 600px) {
		.mobile {
			display: none;
		}
		.not-mobile {
			display: block;
		}
	}

	@media (max-width: 599px) {
		.mobile {
			display: block;
		}
		.not-mobile {
			display: none;
		}
	}
</style>
