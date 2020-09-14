<template>
    <form class="register" @submit.prevent="onRegister">
        <h3>Register</h3>

        <div class="email">
            <input type="text" v-model="email" placeholder="Email" />
        </div>

        <div class="password">
            <input type="password" v-model="password" placeholder="Password" />
        </div>

        <button type="submit">Register</button>
    </form>
</template>

<script lang="ts" src="./Register.ts" />

<style scoped lang="scss">
@import "../../main";

.register {
    width: 400px;
    margin: 20vh auto 0;
    position: relative;
    z-index: 0;
    background-color: $colorBg;
    display: block;

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

    h3 {
        color: $colorBg2;
        font-size: 46px;
        padding: 20px 0;
        font-weight: bold;
        letter-spacing: 2px;
    }

    input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid $colorHover2;
        outline: none;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 10px;
        color: $colorBg2;
        font-weight: bold;
        letter-spacing: 2px;
    }

    button {
        width: 150px;
        height: 50px;
        margin: 30px 0 40px;
        transition: 0.2s all;
        border: none;
        outline: none;
        background-color: $colorBg2;
        color: $color;
        font-size: 22px;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
        letter-spacing: 1px;

        &:hover,
        &:focus {
            background-color: $colorHover2;
        }
    }
}
</style>
