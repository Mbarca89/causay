import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import Sitemap from 'vite-plugin-sitemap'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Sitemap({
      hostname: 'https://causay.edu.ar',
      // exclude: ['/ruta-privada'],
      // dynamicRoutes: ['/noticias/1', '/noticias/2'], etc
    }), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react', 'react-bootstrap'],
        },
      },
    },
  },
})
