import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// eslint-disable-next-line no-undef
const devPort = typeof process !== 'undefined' && process.env.PORT ? parseInt(process.env.PORT) : 5173

export default defineConfig({
  plugins: [react()],
  server: {
    port: devPort,
    strictPort: false,
  },
})
