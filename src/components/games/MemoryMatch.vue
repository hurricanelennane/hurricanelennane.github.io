<template>
  <section class="memory-section">
    <div class="container">
      <h2 class="memory-title">Memory Match Game</h2>
      <div class="game-board">
        <div
          v-for="card in shuffledCards"
          :key="card.id"
          class="card"
          :class="{ flipped: card.flipped || card.matched }"
          @click="flipCard(card)"
        >
          <div class="card-inner">
            <div class="card-front">?</div>
            <div class="card-back">{{ card.value }}</div>
          </div>
        </div>
      </div>
      <div v-if="gameOver" class="game-over">
        <p>Congratulations! You found all matches!</p>
        <button @click="resetGame">Play Again</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

interface Card {
  id: number
  value: string
  flipped: boolean
  matched: boolean
}

export default defineComponent({
  name: 'MemoryMatch',
  setup() {
    const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓']
    const cards = ref<Card[]>([])
    const firstCard = ref<Card | null>(null)
    const secondCard = ref<Card | null>(null)
    const lockBoard = ref(false)
    const gameOver = ref(false)

    const initializeCards = () => {
      cards.value = []
      symbols.forEach((symbol, index) => {
        const card1: Card = {
          id: index * 2,
          value: symbol,
          flipped: false,
          matched: false
        }
        const card2: Card = {
          id: index * 2 + 1,
          value: symbol,
          flipped: false,
          matched: false
        }
        cards.value.push(card1, card2)
      })
      shuffleCards()
    }

    const shuffleCards = () => {
      for (let i = cards.value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[cards.value[i], cards.value[j]] = [cards.value[j], cards.value[i]]
      }
    }

    const flipCard = (card: Card) => {
      if (lockBoard.value || card.flipped || card.matched) return

      card.flipped = true

      if (!firstCard.value) {
        firstCard.value = card
      } else {
        secondCard.value = card
        lockBoard.value = true
        checkForMatch()
      }
    }

    const checkForMatch = () => {
      if (firstCard.value && secondCard.value) {
        if (firstCard.value.value === secondCard.value.value) {
          firstCard.value.matched = true
          secondCard.value.matched = true
          resetTurn()
          checkGameOver()
        } else {
          setTimeout(() => {
            firstCard.value!.flipped = false
            secondCard.value!.flipped = false
            resetTurn()
          }, 1000)
        }
      }
    }

    const resetTurn = () => {
      firstCard.value = null
      secondCard.value = null
      lockBoard.value = false
    }

    const checkGameOver = () => {
      if (cards.value.every((card) => card.matched)) {
        gameOver.value = true
      }
    }

    const resetGame = () => {
      gameOver.value = false
      initializeCards()
    }

    onMounted(() => {
      initializeCards()
    })

    const shuffledCards = ref<Card[]>([])

    onMounted(() => {
      shuffledCards.value = [...cards.value]
    })

    return {
      shuffledCards: cards,
      flipCard,
      gameOver,
      resetGame
    }
  }
})
</script>

<style scoped>
.memory-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
}

.memory-title {
  font-size: 2rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.card {
  width: 80px;
  height: 80px;
  perspective: 1000px;
  cursor: pointer;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.card-front {
  background-color: #f0f0f0;
}

.card-back {
  background-color: #fff;
  transform: rotateY(180deg);
}

.game-over {
  font-size: 1.5rem;
}

.game-over button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: var(--carolina-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.game-over button:hover {
  background-color: #6c8ebf;
}

/* Responsive Design */
@media (max-width: 480px) {
  .game-board {
    grid-template-columns: repeat(3, 60px);
    grid-gap: 8px;
  }

  .card {
    width: 60px;
    height: 60px;
  }

  .card-front,
  .card-back {
    font-size: 1.5rem;
  }
}
</style>
