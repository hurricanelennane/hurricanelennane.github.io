<template>
  <div>
    <SiteHeader />
    <section class="about">
      <div class="container">
        <h2>About Me</h2>
        <p>
          Hi, I'm Zach! I love coding in Vue + TypeScript, and this is my personal site where I
          showcase my work and thoughts.
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    SiteHeader
  }
})
</script>

<style scoped>
.about {
  padding: 40px 0;
  background-color: #ffffff;
  text-align: center;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.about p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
</style>
