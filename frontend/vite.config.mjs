import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 9000
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './public/index.html'
      }
    }
  }
});
