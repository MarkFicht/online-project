<template>
    <div class="background-anime-wrapper">
        <div class="gradiend-wrapper"></div>
        <div v-for="n in 70" :key="n" class="background-anime-cube"></div>
    </div>
</template>

<script lang="ts" src="./BackgroundAnime.ts" />

<style scoped lang="scss">
@import "../../main";

.background-anime-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: $colorBg;
    background-color: $color2;

    .background-anime-cube {
        position: absolute;
        width: 50px;
        height: 100px;
        // background-color: rgba($color2, 0.05);
        background-color: rgba($color, 0.05);
        z-index: 0;
    }

    .gradiend-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background: linear-gradient(
            to top,
            rgba(transparent, 1) 0%,
            rgba(transparent, 0) 33%,
            rgba(transparent, 0) 66%,
            rgba(transparent, 1) 100%
        );
    }
}
</style>