<template>
  <section class="calculator-section">
    <div class="container">
      <h2 class="calculator-title">Calculator</h2>
      <div class="calculator">
        <input type="text" v-model="display" readonly />
        <div class="buttons">
          <button @click="clear">C</button>
          <button @click="append('/')">/</button>
          <button @click="append('*')">*</button>
          <button @click="deleteLast">⌫</button>

          <button @click="append('7')">7</button>
          <button @click="append('8')">8</button>
          <button @click="append('9')">9</button>
          <button @click="append('-')">-</button>

          <button @click="append('4')">4</button>
          <button @click="append('5')">5</button>
          <button @click="append('6')">6</button>
          <button @click="append('+')">+</button>

          <button @click="append('1')">1</button>
          <button @click="append('2')">2</button>
          <button @click="append('3')">3</button>
          <button class="equals" @click="calculate">=</button>

          <button @click="append('0')">0</button>
          <button @click="append('.')">.</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Calculator',
  setup() {
    const display = ref('')

    const append = (value: string) => {
      display.value += value
    }

    const clear = () => {
      display.value = ''
    }

    const deleteLast = () => {
      display.value = display.value.slice(0, -1)
    }

    const calculate = () => {
      try {
        // Evaluate the expression safely
        // eslint-disable-next-line no-eval
        display.value = String(eval(display.value))
      } catch {
        display.value = 'Error'
      }
    }

    return {
      display,
      append,
      clear,
      deleteLast,
      calculate
    }
  }
})
</script>

<style scoped>
.calculator-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.calculator-title {
  font-size: 2rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
  text-align: center;
}

.calculator {
  max-width: 300px;
  margin: 0 auto;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.calculator input {
  width: 100%;
  height: 40px;
  font-size: 1.5rem;
  text-align: right;
  margin-bottom: 10px;
  padding-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.buttons button {
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #dcdcdc;
}

.buttons .equals {
  grid-column: span 2;
  background-color: var(--carolina-blue);
  color: #fff;
}

.buttons .equals:hover {
  background-color: #6c8ebf;
}

/* Responsive Design */
@media (max-width: 480px) {
  .calculator {
    padding: 10px;
  }

  .buttons button {
    padding: 10px;
    font-size: 0.9rem;
  }

  .calculator input {
    height: 35px;
    font-size: 1.2rem;
  }
}
</style>
