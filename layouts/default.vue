<template>
    <div class="h-full min-h-[100vh] max-w-7xl m-auto">
        <section class="w-full">
            <slot />
        </section>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from '#app'
useHead({
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
})
</script>
