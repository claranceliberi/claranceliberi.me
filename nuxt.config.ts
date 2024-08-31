import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'



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
  css:["@/assets/styles/index.scss","uno.css"],
  unocss: {

    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
      content: {
        highlight:{

          theme:'vitesse-dark'
        }
      },
      // colorMode: {
      //   preference: 'light', // default value of $colorMode.preference
      //   fallback: 'light', // fallback value if not system preference found
      //   hid: 'nuxt-color-mode-script',
      //   globalName: '__NUXT_COLOR_MODE__',
      //   componentName: 'ColorScheme',
      //   classPrefix: '',
      //   classSuffix: '',
      //   storageKey: 'nuxt-color-mode'
      // },
   vite: {
    plugins: [
      Unocss({
        presets: [
          // @ts-ignore
          presetIcons({
            extraProperties: {
              'display': 'inline-block',
              'vertical-align': 'middle',
              // ...
            },
          })
          // ...custom presets
        ],
      }),
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
  }
})
