<template>
  <section class="counter-section">
    <div class="container">
      <h2 class="counter-title">Counter</h2>
      <div class="counter-display">{{ count }}</div>
      <div class="counter-buttons">
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
        <button @click="increment">+</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value += 1
    }

    const decrement = () => {
      count.value -= 1
    }

    const reset = () => {
      count.value = 0
    }

    return {
      count,
      increment,
      decrement,
      reset
    }
  }
})
</script>

<style scoped>
.counter-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
}

.counter-title {
  font-size: 2rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.counter-display {
  font-size: 3rem;
  margin-bottom: 20px;
}

.counter-buttons button {
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--carolina-blue);
  color: #fff;
}

.counter-buttons button:hover {
  background-color: #6c8ebf;
}

/* Responsive Design */
@media (max-width: 480px) {
  .counter-buttons button {
    margin: 5px;
    padding: 8px 16px;
    font-size: 1rem;
  }
}
</style>
