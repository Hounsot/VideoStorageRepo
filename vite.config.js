import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/VideoStorageRepo/'  // Changed to match your actual repository name
})