// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  nitro: {
    compressPublicAssets: true,
  },
  meta: {
    htmlAttrs: {
      lang: 'pt-BR',
    },
    title: 'Games',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
})
