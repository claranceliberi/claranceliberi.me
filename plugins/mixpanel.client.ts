import mixpanel from 'mixpanel-browser'

export default defineNuxtPlugin(() => {
  mixpanel.init('92b694410fc0c77b742d59416933ed81', {
    api_host: 'https://api-eu.mixpanel.com',
    debug: process.env.NODE_ENV !== 'production',
    track_pageview: true,
    persistence: 'localStorage',
  })

  return {
    provide: { mixpanel },
  }
})
