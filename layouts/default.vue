<template>
    <div class="h-full flex justify-center">
        <div class="h-full w-9/12 flex flex-col justify-between">
            <header>
                <molecules-navbar />
            </header>
            <section>
                <slot />
            </section>
            <footer class="flex py-2 justify-center">
                <atoms-footer class="w-4/6" />
            </footer>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
})
</script>