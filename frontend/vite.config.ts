import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss()
  ],
  server: {
    host: true, // this is needed so we can access the site from the container
    proxy: {
      "/api": {
        // Need backend_dev because this is supposed to be running within the container
        target: "http://backend_dev:3000",
        changeOrigin: false,
        secure: false
      }
    }
  }
})
