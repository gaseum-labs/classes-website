<script>
  import { fade } from "svelte/transition"
</script>

<main out:fade in:fade={{ delay: 500 }}>
  <h1>Engineer</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, expedita? Animi et nobis, aliquid voluptatem autem repudiandae eius at laboriosam ea sed nostrum nisi dolorum eaque itaque esse repellendus facere.</p>
</main>

<style>
  h1 {
    color: #FFB949;
    border-color: #FFB949;
  }
</style>