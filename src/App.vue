<template>
    <Navbar :key="$route.fullPath" />
    <router-view />
    <Footer />
</template>

<script lang="ts" src="./App.ts" />

<style lang="scss">
@import "./main";

body,
html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: $colorBg;
    color: $color;
}

h1,
h3,
h5 {
    margin: 0;
    padding: 0;
    color: $color;
}

#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
