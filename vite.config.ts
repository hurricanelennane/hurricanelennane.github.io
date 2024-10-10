// vite.config.ts
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// Remove vueDevTools if not needed in production

export default defineConfig(({ command, mode }) => ({
  base: '/',
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(), // Typically used only in development
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
