<script lang="ts" setup>

</script>

<template>
    <div class="flex justify-between m-2 pt-2">
        <div>
            <atoms-logo />
        </div>
        <ul class="list-none links flex space-x-4 text-color-sec">
            <li>
                <router-link class="no-underline" to="/articles">Articles</router-link>
            </li>
            <li>
                <router-link class="no-underline" to="/projects">Projects</router-link>
            </li>
            <li>
                <a
                    aria-label="Light mode"
                    v-show="$colorMode.value === 'dark'"
                    class="i-carbon-sun dark:i-carbon-moon text-5 cursor-pointer"
                />
            </li>
            <li>
                <button
                    aria-label="Light mode"
                    v-show="$colorMode.value === 'dark'"
                    @click="$colorMode.preference = 'light'"
                    class="i-carbon-sun dark:i-carbon-moon text-5 cursor-pointer"
                />
                <button
                    aria-label="Dark mode"
                    v-show="$colorMode.value === 'light'"
                    @click="$colorMode.preference = 'dark'"
                    class="i-carbon-moon dark:i-carbon-moon text-5 cursor-pointer"
                />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
</style>