<template>
  <nav>
    <ul>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <!-- Placeholder links for future sections -->
      <li><router-link to="/apps">Apps</router-link></li>
      <li><router-link to="/games">Games</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}
</style>
