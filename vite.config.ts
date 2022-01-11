import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src', 'components'),
      pages: resolve(__dirname, 'src', 'pages'),
      utils: resolve(__dirname, 'src', 'utils'),
      assets: resolve(__dirname, 'src', 'assets'),
      hooks: resolve(__dirname, 'src', 'hooks'),
      models: resolve(__dirname, 'src', 'models'),
      services: resolve(__dirname, 'src', 'services'),
      plugins: resolve(__dirname, 'src', 'plugins'),
      constants: resolve(__dirname, 'src', 'constants'),
      routes: resolve(__dirname, 'src', 'routes'),
    },
  },
  server: {
    open: true,
  },
  // To change the build target
  // build: {
  //   outDir: './build',
  // },
});
