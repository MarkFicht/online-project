<template>
    <main class="dashboard">
        <header>
            <h3>Dashboard</h3>
        </header>
        <article class="container">
            <section class="tile-container">
                <header class="tile-name">
                    <h5>Quatro</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ad!</p>
                </header>
                <div class="tile-img">IMG HERE</div>
                <div class="tile-status">
                    <p>Free</p>
                </div>
                <div class="tile-buttons">
                    <button>Play</button>
                    <button>Desc</button>
                </div>
            </section>
            <section class="tile-container">
                <header class="tile-name">
                    <h5>Carcassonne</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ad!</p>
                </header>
                <div class="tile-img">IMG HERE</div>
                <div class="tile-status">
                    <p>Loby</p>
                </div>
                <div class="tile-buttons">
                    <button>Play</button>
                    <button>Desc</button>
                </div>
            </section>
            <section class="tile-container">
                <header class="tile-name">
                    <h5>Monopoly</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ad!</p>
                </header>
                <div class="tile-img">IMG HERE</div>
                <div class="tile-status">
                    <p>Busy</p>
                </div>
                <div class="tile-buttons">
                    <button>Play</button>
                    <button>Desc</button>
                </div>
            </section>
        </article>
    </main>
</template>

<script lang="ts" src="./Dashboard.ts" />

<style scoped lang="scss">
@import "../../main";

h3 {
    color: $colorBg2;
    font-size: 46px;
    padding: 20px 0;
    font-weight: bold;
    letter-spacing: 2px;
}

h5 {
    color: $colorBg2;
    font-size: 26px;
    text-align: right;
    padding: 20px 50px 0 0;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
}

.dashboard {
    width: 100%;
    height: calc(100vh - 60px);
}

.container {
    width: $widthContainer;
    margin: 8vh auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
}

.tile-container {
    height: 400px;
    position: relative;

    .tile-name {
        width: 76%;
        height: 94%;
        background-color: $colorHover;
        position: absolute;
        bottom: 0;
        right: 4%;
        z-index: 2;

        > p {
            color: $colorBg2;
            font-size: 16px;
            text-align: right;
            padding: 30px 20px 0 130px;
            margin: 0;
            font-weight: bold;
            letter-spacing: 2px;
        }
    }

    .tile-img {
        width: 48%;
        height: 55%;
        background-color: $colorHover2;
        position: absolute;
        top: 25%;
        left: 0;
        z-index: 3;
    }

    .tile-status {
        width: 55%;
        height: 88%;
        background-color: $color;
        position: absolute;
        top: 0;
        left: 5%;
        z-index: 1;

        > p {
            color: $colorBg2;
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
        width: 33%;
        height: 24%;
        // background-color: $colorBg2;
        position: absolute;
        bottom: 10%;
        right: 0;
        z-index: 4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

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

            &:hover {
                background-color: $colorHover2;
            }
        }
    }
}
</style>
