<template>
    <div class="window">
        <div class="home-view"></div>
        <div class="button-bar absolute bottom-0 bg-theme-light-a border-t border-border-body">so</div>
    </div>
</template>

<style lang="scss">
.window {
    height: 100vh;
    .home-view {
        width: 100vw;
        height: 100vh;
        background-image: url("../../assets/images/home.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .button-bar {
        height: 3rem;
        width: 100vw;
        backdrop-filter: blur(8px);
    }
}
</style>