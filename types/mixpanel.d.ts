import type { OverridedMixpanel } from 'mixpanel-browser'

declare module '#app' {
  interface NuxtApp {
    $mixpanel: OverridedMixpanel
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $mixpanel: OverridedMixpanel
  }
}

export {}
