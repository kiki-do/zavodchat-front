import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/app/routes',
      generatedRouteTree: './src/shared/router/route-tree.gen.ts',
    }),

    react(),

    tailwindcss(),
  ],

  clearScreen: false,

  server: {
    port: 1420,
    strictPort: false,
    host: host || false,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },

    // proxy: {
    //   // Все запросы к /api проксируем на твой бэкенд без проверки SSL
    //   '/api': {
    //     target: 'https://localhost:408', // твой бэкенд с плохим сертификатом
    //     changeOrigin: true,
    //     secure: false, // ← ЭТО КЛЮЧЕВОЕ! Отключает проверку SSL
    //   },
    // },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
}));
