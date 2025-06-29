import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/data": path.resolve(__dirname, "src/data"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/lib": path.resolve(__dirname, "src/lib"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    },
  },
})
