<template>
    <form @submit.prevent="onRegister">
        <h3>Register</h3>

        <div class="email">
            <input type="text" v-model="email" placeholder="email" />
        </div>

        <div class="password">
            <input type="password" v-model="password" placeholder="password" />
        </div>

        <button type="submit">Register</button>
    </form>
</template>

<script lang="ts" src="./Register.ts" />

<style scoped lang="scss">
//
</style>
