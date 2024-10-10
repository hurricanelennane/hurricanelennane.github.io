// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import BlogPage from '../views/BlogPage.vue';
import AppsPage from '../views/AppsPage.vue';
import GamesPage from '../views/GamesPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
  },
  {
    path: '/apps',
    name: 'Apps',
    component: AppsPage,
  },
  {
    path: '/games',
    name: 'Games',
    component: GamesPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
