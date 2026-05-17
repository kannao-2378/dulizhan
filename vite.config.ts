import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import traeSoloBadge from 'vite-plugin-trae-solo-badge'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: './',
  plugins: [react(), traeSoloBadge(), tsconfigPaths()],
})
