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
                            <span class="kode-mono-font text-lg">About me</span>
                        </div>
                        <p class="text-lg font-medium max-w-120 mt-10 text-center">
                            I’m a curious engineer, crafting scalable solutions that elevate teams and deliver value to
                            users.
                        </p>
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
