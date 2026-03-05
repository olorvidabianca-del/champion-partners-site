import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes builds work on GitHub Pages + static hosts
export default defineConfig({
  base: './',
  plugins: [react()],
})
