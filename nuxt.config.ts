import { defineNuxtConfig } from 'nuxt'
import viteCompression from 'vite-plugin-compression';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
      plugins: [viteCompression({ algorithm: 'brotliCompress' })]
    },
    router: {
        base: '/nuxt3-brotli/'
      }
  });