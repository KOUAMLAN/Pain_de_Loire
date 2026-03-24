import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: 'terser',
    cssCodeSplit: false,
    rollupOptions: { output: { manualChunks: undefined } },
    target: 'es2018',
  }
});