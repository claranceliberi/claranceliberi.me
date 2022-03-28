import { defineNuxtConfig } from 'nuxt3'
import Unocss from 'unocss/vite'
import { presetAttributify, presetWind } from 'unocss'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css:["@/assets/styles/index.scss"],
buildModules: [
    '@unocss/nuxt',
  ],
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
        presetAttributify({ /* preset options */}),
        presetWind(),
        // ...custom presets
      ],
    }),
  ],
    }
})
