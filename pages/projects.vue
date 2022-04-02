<template>
    <div class="flex justify-center">
        <div class="w-4/6">
            <header class="pb-10">
                <h3 class="text-4xl font-bold">Projects</h3>
                <p class="text-color-sec">This is what took my time</p>
            </header>
            <section>
                <article class="my-4" v-for="category in projects">
                    <div>
                        <h4 class="text-2xl font-semibold">{{ category.category }}</h4>
                    </div>
                    <ul class="ml-2">
                        <li class="ml-2 my-2" v-for="project in category.projects">
                            <a class="font-semibold text-lg" :href="project.link">{{ project.name }}</a>
                            <p class="text-color-sec">{{ project.description }}</p>
                        </li>
                    </ul>
                </article>
            </section>
        </div>
    </div>
</template>
<script lang="ts" setup>
import projects from "@/content/projects.json"
</script>