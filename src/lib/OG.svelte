<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let alt: string;
	export let url: string;
</script>

<meta name="twitter:image:src" content={image} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta property="og:image" content={image} />
<meta property="og:image:alt" content={alt} />
<meta property="og:image:width" content="800" />
<meta property="og:image:height" content="800" />
<meta property="og:site_name" content="Classes" />
<meta property="og:type" content="object" />
<meta property="og:title" content={title} />
<meta property="og:url" content={url} />
<meta property="og:description" content={description} />
