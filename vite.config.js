import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import routes from './src/router/routes.js'
import generateRoutesList from "./src/router/generateRoutesList.js"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: "https://yaroko.com",
      readable: true,
      dynamicRoutes: generateRoutesList(routes, '')
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
