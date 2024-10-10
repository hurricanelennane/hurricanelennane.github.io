<template>
  <section class="games-section">
    <div class="container">
      <h1 class="games-title">Games</h1>
      <div class="games-content">
        <p>Coming soon! Stay tuned for my gaming projects and interactive experiences!</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamesPage'
})
</script>

<style scoped>
.games-section {
  background-color: var(--background-color);
  color: var(--text-color);
}

.games-title {
  font-size: 2.5rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.games-content {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.games-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .games-title {
    font-size: 2rem;
  }

  .games-content {
    padding: 20px;
  }

  .games-content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .games-section {
    padding: 40px 0;
  }

  .games-title {
    font-size: 1.75rem;
  }

  .games-content {
    padding: 15px;
  }

  .games-content p {
    font-size: 0.95rem;
    line-height: 1.4;
  }
}
</style>
