<template>
  <section class="tictactoe-section">
    <div class="container">
      <h2 class="tictactoe-title">Tic-Tac-Toe</h2>
      <div class="board">
        <div v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)">
          {{ cell }}
        </div>
      </div>
      <div v-if="winner" class="result">
        <p>{{ winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!` }}</p>
        <button @click="resetGame">Play Again</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TicTacToe',
  setup() {
    const board = ref<string[]>(Array(9).fill(''))
    const currentPlayer = ref<'X' | 'O'>('X')
    const winner = ref<string | null>(null)

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6] // diagonals
    ]

    const makeMove = (index: number) => {
      if (!board.value[index] && !winner.value) {
        board.value[index] = currentPlayer.value
        checkWinner()
        currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
      }
    }

    const checkWinner = () => {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination
        if (
          board.value[a] &&
          board.value[a] === board.value[b] &&
          board.value[a] === board.value[c]
        ) {
          winner.value = board.value[a]
          return
        }
      }
      if (board.value.every((cell) => cell)) {
        winner.value = 'Draw'
      }
    }

    const resetGame = () => {
      board.value = Array(9).fill('')
      winner.value = null
      currentPlayer.value = 'X'
    }

    return {
      board,
      currentPlayer,
      winner,
      makeMove,
      resetGame
    }
  }
})
</script>

<style scoped>
.tictactoe-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
}

.tictactoe-title {
  font-size: 2rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  justify-content: center;
  margin-bottom: 20px;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cell:hover {
  background-color: #f0f0f0;
}

.result {
  font-size: 1.5rem;
  margin-bottom: 10px;
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
  .board {
    grid-template-columns: repeat(3, 80px);
    grid-gap: 4px;
  }

  .cell {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
}
</style>
