import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tech-landing-rtl/', // Add this line for GitHub Pages
  ssetsInclude: ['**/*.PNG'],
})