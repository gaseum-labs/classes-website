<script>
  import { fade } from "svelte/transition"
</script>

<main out:fade in:fade={{ delay: 500 }}>
  <h1>Diver</h1>
  <p>The diver is a mobility-focused class that uses it's unique swimming abilities to its advantage.</p>
</main>

<style>
  h1 {
    color: #35A7FF;
    border-color: #35A7FF;
  }
</style>