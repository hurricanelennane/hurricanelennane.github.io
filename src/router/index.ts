import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import BlogPost from '../views/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPost
  }
  // Future routes like Apps/Games can be added here
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
