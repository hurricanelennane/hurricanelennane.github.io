import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

const app = createApp(App)
app.use(router)

// // Safely check if Pendo exists and initialize it
// if (typeof window.pendo !== 'undefined') {
//   window.pendo.initialize({
//     visitor: {
//       id: 'zach.lennane@pendo.io' // Required if user is logged in
//       // email:        // Recommended if using Pendo Feedback, or NPS Email
//       // full_name:    // Recommended if using Pendo Feedback
//       // role:         // Optional
//     }
//   });
// } else {
//   console.warn(
//     'Pendo is not defined. Make sure the Pendo script is correctly included in index.html.'
//   );
// }

app.mount('#app')
