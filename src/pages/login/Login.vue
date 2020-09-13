<template>
    <form @submit.prevent="onLogin">
        <h3>Login</h3>

        <div class="email">
            <input type="text" v-model="email" placeholder="email" />
        </div>

        <div class="password">
            <input type="password" v-model="password" placeholder="password" />
        </div>

        <button type="submit">Login</button>
    </form>
</template>

<script lang="ts" src="./Login.ts" />

<style scoped lang="scss">
//
</style>
