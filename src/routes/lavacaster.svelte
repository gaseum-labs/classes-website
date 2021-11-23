<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit'

  export async function load({ page, fetch }: LoadInput): Promise<LoadOutput> {
    const res = await fetch("/lavacaster.json")
    const data = await res.json()
    return {
      status: 200,
      props: {
        content: data.content,
      }
    }
  }
</script>

<script>
  import { fade } from "svelte/transition"
  import { marked } from 'marked'

  export let content;
</script>

<main out:fade in:fade={{ delay: 500 }}>
  <h1>Lavacaster</h1>
  {@html marked(content)}
</main>


<style>
  h1 {
    color: #FF5252;
    border-color: #FF5252;
  }
</style>