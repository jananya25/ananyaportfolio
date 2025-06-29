import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/assets": resolve(__dirname, "src/assets"),
      "@/components": resolve(__dirname, "src/components"),
      "@/data": resolve(__dirname, "src/data"),
      "@/hooks": resolve(__dirname, "src/hooks"),
      "@/lib": resolve(__dirname, "src/lib"),
      "@/pages": resolve(__dirname, "src/pages"),
      "@/types": resolve(__dirname, "src/types"),
      "@/utils": resolve(__dirname, "src/utils"),
    },
  },
})
