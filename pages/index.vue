<template>
    <NuxtLayout>
        <article class="relative">
            <!-- <div class="absolute">
                <svg class="min-h-[100vh] w-56 h-full" viewBox="0 100 100 1">
                    <rect
                        class="stroke-grey-grey90 absolute"
                        x="0"
                        y="0"
                        width="100"
                        height="1000"
                        fill="none"
                        stroke-width="0.8"
                        stroke-dasharray="4,4"
                        rx="8"
                        ry="8"
                    />
                </svg>
            </div> -->
            <div class="min-h-[100vh] w-56 rectangle absolute left"></div>
            <div class="min-h-[100vh] w-56 rectangle absolute right"></div>

            <div>
                <div>
                    <div class="flex items-center space-x-4">
                        <AtomsIconButton />
                        <span class="kode-mono-font text-lg">About me</span>
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
        left: 15%;
    }

    &.right {
        right: 15%;
    }
}
</style>
