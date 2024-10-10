<template>
  <section class="apps-section">
    <div class="container">
      <h1 class="apps-title">Apps</h1>
      <div class="apps-content">
        <p>Coming soon! Stay tuned for my applications built with Vue, TypeScript, and more!</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppsPage'
})
</script>

<style scoped>
.apps-section {
  background-color: var(--background-color);
  color: var(--text-color);
}

.apps-title {
  font-size: 2.5rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.apps-content {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.apps-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .apps-title {
    font-size: 2rem;
  }

  .apps-content {
    padding: 20px;
  }

  .apps-content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .apps-section {
    padding: 40px 0;
  }

  .apps-title {
    font-size: 1.75rem;
  }

  .apps-content {
    padding: 15px;
  }

  .apps-content p {
    font-size: 0.95rem;
    line-height: 1.4;
  }
}
</style>
