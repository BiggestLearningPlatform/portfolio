import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',   // 🔥 Yeh line add karni hogi!
  plugins: [react()],
})
