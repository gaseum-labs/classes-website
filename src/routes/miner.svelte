<script>
  import { fade } from "svelte/transition"
</script>

<main out:fade in:fade={{ delay: 500 }}>
  <h1>Miner</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a sequi distinctio ratione cupiditate facere possimus aliquam, perspiciatis obcaecati, et ipsum libero necessitatibus reiciendis, architecto asperiores velit inventore alias adipisci.</p>
</main>

<style>
  h1 {
    color: #717171;
    border-color: #717171;
  }
</style>