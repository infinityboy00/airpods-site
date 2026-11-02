import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// IMPORTANTE: Cambia 'airpods-site' con il nome ESATTO del tuo repository GitHub
export default defineConfig({
  base: '/airpods-site/',
  plugins: [react(), tailwindcss()],
})