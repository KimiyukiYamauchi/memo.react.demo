import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages（https://<user>.github.io/memo.react.demo/）で配信するため
  base: '/memo.react.demo/',
})
