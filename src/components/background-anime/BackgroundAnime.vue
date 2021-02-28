<template>
    <div class="background-anime-wrapper">
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

    .background-anime-cube {
        position: absolute;
        width: 50px;
        height: 100px;
        // box-shadow: 1px 1px 8px rgba($color: #000000, $alpha: 0.2);
        background-color: rgba(0, 0, 0, 0.03);
    }
}
</style>