<template>
    <div class="window flex flex-col">
        <div class="home-view"></div>
        <div class="button-bar bg-theme-darker">so</div>
    </div>
</template>

<style lang="scss">
.window {
    height: 100vh;
    .home-view {
        width: 100vw;
        height: 100%;
        background-image: url("../../assets/images/home.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .button-bar {
        height: 3rem;
        width: 100vw;
    }
}
</style>