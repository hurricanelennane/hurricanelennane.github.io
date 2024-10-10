<template>
  <section class="games-section">
    <div class="container">
      <h1 class="games-title">Games</h1>
      <div class="games-content">
        <TicTacToe />
        <RockPaperScissors />
        <MemoryMatch />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TicTacToe from '../components/games/TicTacToe.vue'
import RockPaperScissors from '../components/games/RockPaperScissors.vue'
import MemoryMatch from '../components/games/MemoryMatch.vue'

export default defineComponent({
  name: 'GamesPage',
  components: {
    TicTacToe,
    RockPaperScissors,
    MemoryMatch
  }
})
</script>

<style scoped>
.games-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.games-title {
  font-size: 2.5rem;
  color: var(--carolina-blue);
  margin-bottom: 40px;
  text-align: center;
}

.games-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .games-content {
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .games-section {
    padding: 20px 10px;
  }

  .games-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .games-content {
    gap: 20px;
  }
}
</style>
