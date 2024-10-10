<!-- src/components/BlogPost.vue -->
<template>
  <section class="blog-section">
    <div class="container">
      <h1 class="blog-title">Blog</h1>
      <div class="blog-content">
        <p>Coming soon! Stay tuned for my posts on Vue, TypeScript, and more!</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogPost'
})
</script>

<style scoped>
.blog-section {
  background-color: var(--background-color);
  color: var(--text-color);
}

.blog-title {
  font-size: 2.5rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
}

.blog-content {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;
  }

  .blog-content {
    padding: 20px;
  }

  .blog-content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .blog-section {
    padding: 40px 0;
  }

  .blog-title {
    font-size: 1.75rem;
  }

  .blog-content {
    padding: 15px;
  }

  .blog-content p {
    font-size: 0.95rem;
    line-height: 1.4;
  }
}
</style>
