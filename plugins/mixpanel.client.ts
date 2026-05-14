import mixpanel from 'mixpanel-browser'

export default defineNuxtPlugin(() => {
  mixpanel.init('92b694410fc0c77b742d59416933ed81', {
    api_host: 'https://api-eu.mixpanel.com',
    debug: process.env.NODE_ENV !== 'production',
    track_pageview: true,
    persistence: 'localStorage',
    record_sessions_percent: 100,
    record_mask_text_selector: '',
  })

  mixpanel.identify(mixpanel.get_distinct_id())
  const now = new Date().toISOString()
  mixpanel.people.set_once({ first_seen_at: now })
  mixpanel.people.set({
    last_seen_at: now,
    referrer: document.referrer || 'direct',
  })

  return {
    provide: { mixpanel },
  }
})
