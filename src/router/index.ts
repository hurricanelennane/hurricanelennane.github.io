// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import BlogPost from '../views/BlogPost.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPost,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
