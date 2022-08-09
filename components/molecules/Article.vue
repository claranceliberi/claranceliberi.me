<template>
    <article class="mb-4 cursor-pointer">
        <a href=""><h2 class="font-bold text-lg"> {{props.blog.title}} </h2></a>
        <p class="flex items-center">
            <span class="text-color-sec"> {{props.blog.date}} </span>
            <span class="inline-block w-1 h-1 rounded-full bg-color mx-4 opacity-40"></span>
            <span class="text-color-sec"> {{props.blog.duration}} </span>
        </p>
    </article>
</template>

<script setup lang="ts">
import { BlogInformation } from '~~/types';


type blog = {
    blog: BlogInformation
}

const props = defineProps<blog>()

</script>

<style scoped>

</style>