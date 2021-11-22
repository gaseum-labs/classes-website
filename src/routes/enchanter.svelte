<script>
  import { fade } from "svelte/transition"
</script>

<main out:fade in:fade={{ delay: 500 }}>
  <h1>Enchanter</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur esse eos et nemo harum aperiam sapiente voluptate minima velit natus, deleniti aliquam repellat obcaecati, reiciendis possimus dicta quo eius?</p>
</main>

<style>
  h1 {
    color: #9737CA;
    border-color: #9737CA;
  }
</style>