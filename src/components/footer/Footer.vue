<template>
    <div class="wrapper">
        <div class="footer-wrapper">
            <div>marek</div>
            <div>links</div>
        </div>
    </div>
</template>

<script lang="ts" src="./Footer.ts" />

<style scoped lang="scss">
@import "../../main";

.wrapper {
    width: 100%;
    background-color: $colorBg2;
    color: $color;
    position: relative;
    z-index: 1000;
}

.footer-wrapper {
    width: $widthWrapper1440;
    height: 60px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px;
    justify-content: center;
    align-items: center;
}

#navbar-wrapper {
    width: $widthWrapper1440;
    height: 60px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px;
    justify-content: center;
    align-items: center;
}

.header-wrapper {
    display: flex;
    margin-left: 20px;
}

.links-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
    margin-right: 20px;

    a {
        font-weight: bold;
        color: $color;
        text-decoration: none;
        margin-left: 30px;
        transition: 0.2s all;

        &:hover {
            color: $colorHover;
        }

        &.router-link-exact-active {
            color: $colorHover;
        }
    }

    button {
        width: 120px;
        height: 36px;
        margin-left: 30px;
        transition: 0.2s all;
        border: none;
        outline: none;
        background-color: $colorBg;
        color: $color;
        font-size: 16px;
        font-weight: bold;
        border-radius: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;

        &:hover,
        &:focus,
        &:active {
            background-color: $colorHover2;
        }
    }
}

// ---
@media (max-width: $widthWrapper1440) {
    #navbar-wrapper {
        width: $widthWrapper1024;
    }
}

@media (max-width: $widthWrapper1024) {
    #navbar-wrapper {
        width: $widthWrapper768;
    }
}
</style>