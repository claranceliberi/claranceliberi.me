<script lang="ts" setup>
const age = computed(() => {
    const birthDate = new Date(2003, 0, 10)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
})
</script>

<template>
    <NuxtLayout>
        <article class="relative">
            <div class="min-h-[100vh] w-56 rectangle absolute left z-0"></div>
            <div class="min-h-[100vh] w-56 rectangle absolute right z-0"></div>

            <div class="flex justify-center">
                <div class="z-10 w-full max-w-[70%]">
                    <div class="flex flex-col items-center py-20">
                        <div class="flex items-center space-x-4">
                            <AtomsIconButton icon="spaces" />
                            <span class="kode-mono-font text-lg text-zinc-700">About me</span>
                        </div>
                        <p class="text-lg font-medium max-w-120 mt-10 text-center text-zinc-700">
                            I’m a curious engineer, crafting scalable solutions that elevate teams and deliver value to
                            users.
                        </p>
                    </div>

                    <div class="grid grid-cols-11 grid-rows-2 gap-5">
                        <div
                            class="col-span-5 bg-white bg-gradient-to-tr from-zinc-200/50 to-zinc-200 border-zinc-300 border-2 rounded-2xl p-6"
                        >
                            <AtomsIconButton icon="smile" />

                            <h2 class="font-semibold my-4 text-zinc-700">Clarance Liberi</h2>

                            <ul class="list-disc ml-8 text-sm space-y-2 text-zinc-500 font-light">
                                <li>{{ age }} years old</li>
                                <li>Rwanda 🇷🇼</li>
                                <li>Software Engineer</li>
                            </ul>
                        </div>
                        <div
                            class="col-span-5 row-start-2 bg-white bg-gradient-to-tr from-zinc-200/50 to-zinc-200 border-zinc-300 border-2 rounded-2xl p-6"
                        >
                            <p class="text-zinc-500 font-light xl:text-lg">
                                I love working on tough problems that bring value to teams and products. My passion
                                for scalable, performant software drives my work, and my relentless curiosity and
                                commitment set me apart. I'm always exploring new tools to enhance developer experience
                                and elevate every project.
                            </p>
                        </div>
                        <div class="col-span-6 row-span-2 bg-zinc-100 rounded-2xl p-2 border-zinc-300 border-2">
                            <img
                                src="https://res.cloudinary.com/dawr8i20o/image/upload/c_scale,e_grayscale,f_webp,w_1360/v1724051359/claranceliberi.me/Liberi_profile_pic_1_-min_w0qwko.webp"
                                alt="clarance liberi profile picture"
                                class="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </NuxtLayout>
</template>

<style lang="scss">
/* https://kovart.github.io/dashed-border-generator/ */
.rectangle {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23DBDBDBFF' stroke-width='3' stroke-dasharray='9%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 16px;

    &.left {
        left: 7%;
    }

    &.right {
        right: 7%;
    }
}
</style>
