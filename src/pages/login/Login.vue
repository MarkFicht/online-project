<template>
    <main class="wrapper">
        <form
            class="login-wrapper"
            @submit.prevent="onLogin"
            ref="loginContainer"
            data-tilt-glare
            data-tilt-max-glare="0.33"
        >
            <h3 class="header">Login</h3>

            <div class="email">
                <input type="text" v-model="email" placeholder="Email" />
            </div>

            <div class="password">
                <input
                    type="password"
                    v-model="password"
                    placeholder="Password"
                />
            </div>

            <button type="submit">Login</button>
        </form>
    </main>
</template>

<script lang="ts" src="./Login.ts" />

<style scoped lang="scss">
@import "../../main";

.wrapper {
    width: 100%;
    height: calc(100vh - 140px);
    min-height: 560px;
    display: flex;
}

.login-wrapper {
    width: 560px;
    height: 450px;
    margin: auto;
    position: relative;
    z-index: 0;
    background-color: $colorBg;
    display: grid;
    grid-template-rows: 2fr 60px 60px 3fr;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 1000px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $colorBg;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: -1px;
        right: -1px;
        bottom: -0px;
        transform: skew(2deg, 2deg);
        background-color: $colorBg2;
        z-index: -2;
    }
}

.header {
    color: $colorBg2;
    font-size: 42px;
    font-weight: bold;
    letter-spacing: 2px;
    transform: translateZ(30px);
}

.email,
.password {
    transform: translateZ(20px);

    input {
        background-color: transparent;
        width: 300px;
        border: 0;
        border-bottom: 2px solid $colorBg2;
        outline: none;
        font-size: 20px;
        padding: 10px;
        color: $colorBg2;
        font-weight: bold;
        letter-spacing: 2px;
    }
}

button[type="submit"] {
    height: 50px;
    transition: 0.2s all;
    border: none;
    outline: none;
    background-color: $colorBg2;
    color: $color;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    letter-spacing: 1px;
    transform: translateZ(30px);

    &:hover,
    &:focus,
    &:active {
        background-color: $color2;
    }
}
</style>
