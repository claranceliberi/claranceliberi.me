<template>
<NuxtLayout>
    <div class="flex justify-center">
         <ContentRenderer :value="data"/>
    </div>
</NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute()
const { data } = await useAsyncData(`blog/${route.path}`, () => queryContent(route.path).findOne())

useHead({
    title: data.value.title,
    meta:[
        {
            hid: 'description',
            name: 'description',
            content: data.value.description,
          }
    ]
})

onMounted(() => {
    console.log(data.value)
    console.log(route.path)
})

</script>

<style scoped>

</style>