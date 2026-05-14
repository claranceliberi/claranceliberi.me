import mixpanel from 'mixpanel-browser'

export default defineNuxtPlugin(() => {
  mixpanel.init('92b694410fc0c77b742d59416933ed81', {
    debug: process.env.NODE_ENV !== 'production',
    track_pageview: false,
    persistence: 'localStorage',
  })

  return {
    provide: { mixpanel },
  }
})
