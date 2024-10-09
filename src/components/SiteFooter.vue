<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="container footer-container">
      <p>&copy; 2024 Zach Lennane. All rights reserved.</p>
      <div class="social-links">
        <a href="https://github.com/hurricanelennane" target="_blank" rel="noopener noreferrer"
          >GitHub</a
        >
        <a href="https://linkedin.com/in/zlennane" target="_blank" rel="noopener noreferrer"
          >LinkedIn</a
        >
        <!-- Add more social links as needed -->
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteFooter'
})
</script>

<style scoped>
.footer {
  background-color: #333333;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  color: #ffffff;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #4a90e2;
}
</style>
