import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {compile} from "./src/compile/main.js";

export default defineConfig({
  plugins: [react(), compile()],
  server: {
    host: true,
    port: 8000,
  },
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: "./index.html"
      }
    }
  }
});
