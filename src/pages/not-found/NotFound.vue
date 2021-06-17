<template>
    <main class="not-found">
        <header>
            <h3>Not found. Redirect to home page for: {{ counter }}</h3>
        </header>
    </main>
</template>

<script lang="ts" src="./NotFound.ts" />

<style scoped lang="scss">
@import "../../main";

h3 {
    color: $colorBg2;
    font-size: 46px;
    padding: 20px 0;
    font-weight: bold;
    letter-spacing: 2px;
}

.not-found {
    width: 100%;
    height: calc(100vh - 60px);
}
</style>
