<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="container footer-container">
      <p>&copy; 2024 Zach Lennane. All rights reserved.</p>
      <div class="social-links">
        <a
          href="https://github.com/hurricanelennane"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="social-link"
        >
          <!-- GitHub SVG Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 
              16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 
              1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 
              0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 
              3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 
              2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
              3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
              5.92.435.375.81 1.116.81 2.245 0 1.62-.015 2.925-.015 
              3.325 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/zlennane"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="social-link"
        >
          <!-- LinkedIn SVG Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.849-3.037-1.851 
              0-2.135 1.445-2.135 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 
              1.637-1.849 3.372-1.849 3.605 0 4.27 2.372 4.27 
              5.456v6.283zM5.337 7.433a2.07 2.07 0 11.001-4.141 
              2.07 2.07 0 010 4.141zM6.996 20.452H3.678V9h3.318v11.452zM22.225 
              0H1.771C.792 0 0 .774 0 1.723v20.555C0 23.226.792 
              24 1.771 24h20.451C23.2 24 24 23.226 24 
              22.278V1.723C24 .774 23.2 0 22.225 0z"
            />
          </svg>
          LinkedIn
        </a>
        <!-- Add more social links with icons as needed -->
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
:root {
  /* Color Variables */
  --carolina-blue: #0072bc;
  --footer-background: #000000; /* Black */
  --footer-text: #ffffff; /* White */
  --social-link-color: #ffffff; /* White */
  --social-link-hover: var(--carolina-blue);
}

.footer {
  background-color: var(--footer-background);
  color: var(--footer-text);
  padding: 40px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.footer p {
  margin: 0;
  font-size: 1rem;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-link {
  color: var(--social-link-color);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition:
    color 0.3s,
    transform 0.3s;
}

.social-link:hover {
  color: var(--social-link-hover);
  transform: translateY(-3px);
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

@media (max-width: 600px) {
  .footer-container {
    padding: 0 10px;
  }

  .social-links {
    gap: 15px;
  }

  .social-link {
    font-size: 1rem;
  }

  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>
