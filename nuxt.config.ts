import { defineNuxtConfig } from 'nuxt'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import TypedRouter from 'nuxt-typed-router';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
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
  tailwindcss: {
    cssPath: '~/assets/styles/_tailwind.scss'
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
