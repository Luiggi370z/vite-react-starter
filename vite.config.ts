import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src', 'components'),
      pages: resolve(__dirname, 'src', 'pages'),
      utils: resolve(__dirname, 'src', 'utils'),
      assets: resolve(__dirname, 'src', 'assets'),
      hooks: resolve(__dirname, 'src', 'hooks'),
    },
  },
  server: {
    open: true,
  },
});
