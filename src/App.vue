<template>
  <div id="app">
    <NavBar />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    SiteFooter
  },
  mounted() {
    console.log('App component has been mounted.')
  }
})
</script>

<style>
/* You can keep global styles here or in src/assets/styles.css */
</style>
