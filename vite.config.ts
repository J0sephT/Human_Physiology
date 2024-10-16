import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Carpeta donde se construye la build
  },
  server: {
    host: true,  // Habilitar acceso desde otras máquinas si es necesario
  },
  resolve: {
    alias: {
      '@': '/src',  // Alias para simplificar imports si lo necesitas
    },
  },
});
