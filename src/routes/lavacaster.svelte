<script>
  import { fade } from "svelte/transition"
</script>

<main out:fade in:fade={{ delay: 500 }}>
  <h1>Lavacaster</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe culpa quae, optio et deserunt magnam voluptatum repellat, eligendi modi distinctio reiciendis fuga nulla consequatur rem quibusdam enim laboriosam tempora maiores?</p>
</main>

<style>
  h1 {
    color: #FF5252;
    border-color: #FF5252;
  }
</style>