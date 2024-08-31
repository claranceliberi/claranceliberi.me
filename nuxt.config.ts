// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/robots',
    "@nuxtjs/google-fonts",
    "@nuxt/image"
  ],

  tailwindcss: {
    cssPath: '~/assets/styles/_tailwind.scss'
  },

  css:["@/assets/styles/index.scss"],

  content: {
    highlight:{

      theme:'vitesse-dark'
    }
  },

  vite: {
   plugins: [
   ],
 },

  googleFonts: {
      prefetch:true,
      preconnect:true,
      preload:true,
      families: {
        "Kode Mono": true,
        "Noto Sans KR": '100..900'
      }
    },

  compatibilityDate: '2024-08-31'
})