import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://vercel-backend-eta-five.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})