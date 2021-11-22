<script>
  import { fade } from "svelte/transition"
</script>

<main out:fade in:fade={{ delay: 500 }}>
  <h1>Hunter</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quod ex accusamus quas animi facilis repellat perferendis voluptas veritatis commodi magni nostrum expedita, consequatur eius nulla at quam, nemo omnis!</p>
</main>

<style>
  h1 {
    color: #56F148;
    border-color: #56F148;
  }
</style>