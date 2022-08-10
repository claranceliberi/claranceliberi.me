<template>
<NuxtLayout>
    <main class="flex justify-center">
        <section class="max-w-xl">
            <header class="my-5 py-5 border-b-2">
                <h2 class="text-4xl"> {{data.title}} </h2>
                <p class="flex items-center mt-6 ">
                    <span class="text-color-sec"> {{ new Date(data.date).toLocaleString('en-us',{dateStyle:'full'}) }} </span>
                    <span class="inline-block w-1 h-1 rounded-full bg-color mx-4 opacity-40"></span>
                    <span class="text-color-sec"> {{data.duration}} min </span>
                </p>
            </header>
            <ContentRenderer id="content" :value="data"/>
        </section>
    </main>
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

<style lang="scss" >
 #content{

    p,ol,ul{
        @apply my-6;
    }

    p,li,ol,ul{
        color:var(--color-sec);

        code {
            font-style: italic;

            &::after, &::before{
                content:'`'
            }
        }
    }

    ol{
        @apply list-decimal list-inside;
    }

    ul{
        @apply list-inside list-disc  ;
    }

    p{
        img{
            width:100%
        }
    }

    pre{
        background-color: #2e3440ff;
    }
 }

</style>