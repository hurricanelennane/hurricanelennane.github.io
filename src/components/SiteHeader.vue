<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="container header-container">
      <h1>Welcome to My Personal Website</h1>
      <p>Exploring the world of Vue, TypeScript, and beyond.</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteHeader'
})
</script>

<style scoped>
.header {
  background-color: #4a90e2;
  color: #ffffff;
  padding: 60px 0;
  text-align: center;
}

.header-container h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.header-container p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .header-container h1 {
    font-size: 2rem;
  }

  .header-container p {
    font-size: 1rem;
    padding: 0 10px;
  }
}
</style>
