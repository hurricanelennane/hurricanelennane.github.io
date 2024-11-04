import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

const app = createApp(App)
app.use(router)

document.addEventListener('DOMContentLoaded', () => {
  // Check if Pendo is loaded and initialize
  if (typeof window.pendo !== 'undefined') {
    window.pendo.initialize({
      visitor: {
        id: 'zach.lennane@pendo.io', // Required if user is logged in
      }
    });
  } else {
    console.warn(
      'Pendo is not defined. Make sure the Pendo script is correctly included in index.html.'
    );
  }
});

app.mount('#app')
