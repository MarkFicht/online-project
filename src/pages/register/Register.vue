<template>
    <main class="wrapper">
        <form class="register-wrapper" @submit.prevent="onRegister">
            <h3 class="header">Register</h3>

            <div class="email">
                <input type="text" v-model="email" placeholder="Email" />
            </div>

            <div class="password">
                <input type="password" v-model="password" placeholder="Password" />
            </div>

            <button type="submit">Register</button>
        </form>
    </main>
</template>

<script lang="ts" src="./Register.ts" />

<style scoped lang="scss">
@import "../../main";

.wrapper {
    width: 100%;
    height: calc(100vh - 120px);
    min-height: 560px;
    display: flex;
}

.register-wrapper {
    width: 560px;
    height: 450px;
    margin: auto;
    position: relative;
    z-index: 0;
    background-color: $colorBg;
    display: grid;
    grid-template-rows: 3fr 60px 60px 4fr;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 2px;
        right: 2px;
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
}

.email,
.password {
    input {
        background-color: transparent;
        width: 300px;
        border: 0;
        border-bottom: 2px solid $colorHover2;
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

    &:hover,
    &:focus,
    &:active {
        background-color: $colorHover2;
    }
}
</style>
