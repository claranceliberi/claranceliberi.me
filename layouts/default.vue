<template>
    <div class="h-full min-h-[100vh]">
        <header>
            <!-- <molecules-navbar /> -->
        </header>
        <section class="w-full">
            <slot />
        </section>
        <footer class="flex py-2 justify-center">
            <atoms-footer class="w-4/6" />
        </footer>
    </div>
</template>

<script lang="ts" setup>
useHead({
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
})
</script>
