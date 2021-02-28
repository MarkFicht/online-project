<template>
    <section class="tile-container">
        <header class="tile-name">
            <h5>Quatro</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                ad!
            </p>
        </header>
        <div class="tile-img"></div>
        <div class="tile-status">
            <p>Free</p>
        </div>
        <div class="tile-buttons">
            <button @click="(event) => onPlay(event, 'Quatro')">Play</button>
            <button @click="(event) => onShowDesc(event, 'Quatro')">
                Desc
            </button>
        </div>
    </section>
</template>

<script lang="ts" src="./GameTile.ts" />

<style scoped lang="scss">
@import "../../main";

.tile-container {
    height: 400px;
    width: 400px;
    position: relative;
    transition: 0.2s all;
    margin-bottom: 60px;
    // border: 1px solid red;
    filter: drop-shadow(-4px -4px 5px rgba(123, 145, 192, 0.2))
        drop-shadow(-4px -4px 5px rgba(123, 145, 192, 0.2))
        drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
        drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));

    &:hover,
    &:focus,
    &:active {
        transform: scale(1.05);
    }

    .tile-name {
        width: 78%;
        height: 94%;
        background-color: $color;
        position: absolute;
        bottom: 0;
        right: 4%;
        z-index: 2;

        > h5 {
            color: $colorBg2;
            font-size: 24px;
            text-align: right;
            padding: 15px 20px 0 0;
            margin: 0;
            font-weight: bold;
            letter-spacing: 2px;
        }

        > p {
            color: $color2;
            font-size: 16px;
            text-align: right;
            padding: 20px 20px 0 110px;
            margin: 0;
            font-weight: bold;
            letter-spacing: 2px;
        }
    }

    .tile-img {
        width: 43%;
        height: 52%;
        // background-color: $color2;
        // background-color: transparent;
        position: absolute;
        top: 23%;
        left: 0;
        z-index: 3;

        &::before {
            content: "";
            position: absolute;
            top: 3px;
            left: 2px;
            right: 2px;
            bottom: 3px;
            transform: skew(1deg, 1deg);
            // background-color: $color2;
            // background-color: transparent;
            background-image: url(http://placekitten.com/300/400);
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

    .tile-status {
        width: 55%;
        height: 88%;
        background-color: $color;
        position: absolute;
        top: 0;
        left: 5%;
        z-index: 1;
        user-select: none;

        > p {
            color: $color2;
            text-align: left;
            writing-mode: vertical-rl;
            font-size: 20px;
            letter-spacing: 2px;
            // text-orientation: upright;
            font-weight: bold;
            margin: 0;
            padding: 15px;
        }
    }

    .tile-buttons {
        width: 40%;
        height: 24%;
        // background-color: $colorBg2;
        position: absolute;
        bottom: 7%;
        right: 0;
        z-index: 4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        user-select: none;

        button {
            width: 100%;
            font-size: 20px;
            height: 40px;
            transition: 0.2s all;
            border: none;
            outline: none;
            background-color: $colorBg2;
            color: $color;
            font-size: 16px;
            font-weight: bold;
            border-radius: 15px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;

            &:hover,
            &:focus,
            &:active,
            &:focus,
            &:active {
                background-color: $color2;
            }
        }
    }
}
</style>
