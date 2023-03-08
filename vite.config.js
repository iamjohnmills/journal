import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // root: './dist',
  // publicDir: './dist',
  server: {
    port: 3000,
    host: true,
    hmr: {
      port: 3001,
      clientPort: 5001,
    },
  },
  preview:{
    port: 3000
  },
  // base: '',
})
