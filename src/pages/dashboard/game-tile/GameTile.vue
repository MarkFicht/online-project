<template>
    <section class="tile-container" ref="tileContainer">
        <header class="tile-name">
            <h5>{{ gameTitle }}</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                ad!
            </p>
        </header>
        <div class="tile-img"></div>
        <div class="tile-status">
            <p>{{ status }}</p>
        </div>
        <div class="tile-buttons">
            <button @click="(event) => onPlay(event, gameTitle)">Play</button>
            <button @click="(event) => onShowDesc(event, gameTitle)">
                Desc
            </button>
        </div>
    </section>
</template>

<script lang="ts" src="./GameTile.ts" />

<style scoped lang="scss">
@import "../../../main";

.tile-container {
    height: 400px;
    width: 400px;
    position: relative;
    transition: 0.2s all;
    // filter: drop-shadow(-4px -4px 5px rgba(123, 145, 192, 0.2))
    //     drop-shadow(-4px -4px 5px rgba(123, 145, 192, 0.2))
    //     drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
    //     drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
    transform-style: preserve-3d;
    perspective: 1000px;

    .tile-name {
        width: 285px;
        height: 352px;
        background-color: $colorBg;
        position: absolute;
        bottom: 3.5%;
        right: 8%;
        z-index: 2;
        transform: translateZ(30px);
        transform-style: preserve-3d;
        perspective: 1000px;
        -webkit-box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, 0.66);
        box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, 0.66);

        h5 {
            color: $colorBg2;
            font-size: 24px;
            text-align: right;
            padding: 20px 25px 0 0;
            margin: 0;
            font-weight: bold;
            letter-spacing: 2px;
            transform: translateZ(15px);
        }

        p {
            color: $color2;
            font-size: 16px;
            text-align: right;
            padding: 20px 25px 0 110px;
            margin: 0;
            font-weight: bold;
            letter-spacing: 2px;
            transform: translateZ(15px);
        }
    }

    .tile-img {
        width: 150px;
        height: 180px;
        // background-color: transparent;
        position: absolute;
        top: 27%;
        left: 7%;
        z-index: 3;
        transform: translateZ(60px);

        &::before {
            content: "";
            position: absolute;
            top: 3px;
            left: 2px;
            right: 2px;
            bottom: 3px;
            transform: skew(1deg, 1deg);
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
        width: 205px;
        height: 340px;
        background-color: $color;
        position: absolute;
        top: 2%;
        left: 7%;
        z-index: 1;
        user-select: none;
        transform: translateZ(15px);
        -webkit-box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, 0.66);
        box-shadow: 2px 2px 15px 3px rgba(0, 0, 0, 0.66);

        > p {
            color: $color2;
            text-align: left;
            writing-mode: vertical-rl;
            font-size: 20px;
            letter-spacing: 2px;
            // text-orientation: upright;
            font-weight: bold;
            margin: 0;
            padding: 18px 15px;
        }
    }

    .tile-buttons {
        width: 150px;
        height: 92px;
        // background-color: $colorBg2;
        position: absolute;
        bottom: 12.5%;
        right: 6.5%;
        z-index: 4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        user-select: none;
        transform: translateZ(60px);

        button {
            position: relative;
            width: 150px;
            height: 40px;
            font-size: 20px;
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
            border: 2px solid rgba($color: $color, $alpha: 0.4);
            border-right: 2px solid rgba($color: $color, $alpha: 0.2);
            border-bottom: 2px solid rgba($color: $color, $alpha: 0.2);
            transition: all 0.5s;
            overflow: hidden;

            &:hover,
            &:focus,
            &:active {
                background-color: $color2;
                transform: scale(1.05);
                // -webkit-box-shadow: 2px 2px 10px 3px rgba(#ffffff, 0.36);
                // box-shadow: 2px 2px 10px 3px rgba(#ffffff, 0.36);
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100px;
                height: 100%;
                border-radius: 0;
                background: rgba($color: $color, $alpha: 0.5);
                transform: skewX(45deg) translateX(200px);
                transition: all 0.5s;
            }

            &:hover::before {
                transform: skewX(45deg) translateX(-200px);
            }
        }
    }
}
</style>
