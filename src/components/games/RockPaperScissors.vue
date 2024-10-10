<template>
  <section class="rps-section">
    <div class="container">
      <h2 class="rps-title">Rock Paper Scissors</h2>
      <div class="choices">
        <button v-for="choice in choices" :key="choice" @click="play(choice)">
          {{ choice }}
        </button>
      </div>
      <div v-if="result" class="result">
        <p>You chose: {{ userChoice }}</p>
        <p>Computer chose: {{ computerChoice }}</p>
        <p>{{ result }}</p>
        <button @click="resetGame">Play Again</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RockPaperScissors',
  setup() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const userChoice = ref<string | null>(null)
    const computerChoice = ref<string | null>(null)
    const result = ref<string | null>(null)

    const play = (choice: string) => {
      userChoice.value = choice
      computerChoice.value = choices[Math.floor(Math.random() * 3)]
      determineResult()
    }

    const determineResult = () => {
      if (!userChoice.value || !computerChoice.value) return

      if (userChoice.value === computerChoice.value) {
        result.value = "It's a Draw!"
      } else if (
        (userChoice.value === 'Rock' && computerChoice.value === 'Scissors') ||
        (userChoice.value === 'Paper' && computerChoice.value === 'Rock') ||
        (userChoice.value === 'Scissors' && computerChoice.value === 'Paper')
      ) {
        result.value = 'You Win!'
      } else {
        result.value = 'You Lose!'
      }
    }

    const resetGame = () => {
      userChoice.value = null
      computerChoice.value = null
      result.value = null
    }

    return {
      choices,
      userChoice,
      computerChoice,
      result,
      play,
      resetGame
    }
  }
})
</script>

<style scoped>
.rps-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
}

.rps-title {
  font-size: 2rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.choices button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1rem;
  background-color: var(--carolina-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.choices button:hover {
  background-color: #6c8ebf;
}

.result {
  margin-top: 20px;
}

.result p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.result button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: var(--carolina-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.result button:hover {
  background-color: #6c8ebf;
}

/* Responsive Design */
@media (max-width: 480px) {
  .choices button {
    margin: 5px;
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .result p {
    font-size: 1rem;
  }

  .result button {
    padding: 8px 16px;
  }
}
</style>
