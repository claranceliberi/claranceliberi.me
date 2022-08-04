<template>
<NuxtLayout>
    <div class="flex justify-center">
        Articles
         <ContentRenderer :value="data"/>
    </div>
</NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute()
const { data } = await useAsyncData('home', () => queryContent(route.path).findOne())

onMounted(() => {
    console.log(data.value)
    console.log(route.path)
})

</script>

<style scoped>

</style>