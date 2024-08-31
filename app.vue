<script lang="ts" setup>

import { useHead, useSeoMeta } from '#app'

useSeoMeta({
  ogImage: 'https://res.cloudinary.com/dawr8i20o/image/upload/c_scale,f_webp,w_910/v1725092932/claranceliberi.me/Liberi_profile_pic_2_-min_rxo6gw.webp',
  twitterTitle: 'Clarance Liberi',
  twitterDescription: 'Welcome to my personal website. I am a software engineer. ',
  twitterImage: 'https://res.cloudinary.com/dawr8i20o/image/upload/c_scale,f_webp,w_910/v1725092932/claranceliberi.me/Liberi_profile_pic_2_-min_rxo6gw.webp',
  twitterCard: ''
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>
<template>
  <div style="height:100vh">
    <NuxtPage />
  </div>
</template>
