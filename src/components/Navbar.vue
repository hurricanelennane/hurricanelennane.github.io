<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <div class="logo">
        <router-link to="/">Zach Lennane</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/apps">Apps</router-link></li>
        <li><router-link to="/games">Games</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>

<style scoped>
.navbar {
  background-color: #151313;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  font-weight: 500;
  color: #555;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #000;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* For simplicity, hide links on smaller screens */
  }
}
</style>
