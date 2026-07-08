import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at a domain root (Vercel) and
// under a repository sub-path (GitHub Pages: /portfolio-profile/).
export default defineConfig({
  base: './',
  plugins: [react()],
})
