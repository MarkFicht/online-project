<template>
    <main class="wrapper">
        <!-- <header class="header-wrapper">
            <h3>Dashboard</h3>
        </header> -->

        <article class="games-wrapper">
            <!-- Quatro -->
            <GameTile
                :game-title="gameName.QUATRO"
                :status="gameStatus[0]"
                @onPlay="onPlay"
                @onShowDesc="onShowDesc"
            />

            <!-- Carcassonne -->
            <GameTile
                :game-title="gameName.CARCASSONE"
                :status="gameStatus[1]"
                @onPlay="onPlay"
                @onShowDesc="onShowDesc"
            />

            <!-- Monopoly -->
            <GameTile
                :game-title="gameName.MONOPOLY"
                :status="gameStatus[2]"
                @onPlay="onPlay"
                @onShowDesc="onShowDesc"
            />

            <!-- Dummy -->
            <GameTile
                game-title="DUMMY"
                status="-"
                @onPlay="onPlay"
                @onShowDesc="onShowDesc"
            />
        </article>
    </main>
</template>

<script lang="ts" src="./Dashboard.ts" />

<style scoped lang="scss">
@import "../../main";

.wrapper {
    width: 100%;
    height: 100%;
}

// .header-wrapper {
//     z-index: 1;
//     position: relative;

//     > h3 {
//         color: $colorBg2;
//         font-size: 40px;
//         height: 60px;
//         margin: 20px 0 30px;
//         font-weight: bold;
//         letter-spacing: 2px;
//     }
// }

.games-wrapper {
    width: $widthWrapper1440;
    min-height: calc(100vh - 125px - 60px - 80px);
    margin: 50px auto 75px;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: auto;
    grid-gap: 90px;
    justify-content: center;
}

// ---
@media (max-width: $widthWrapper1440) {
    .games-wrapper {
        width: $widthWrapper1024;
        grid-template-columns: repeat(2, 400px);
    }
}

@media (max-width: $widthWrapper1024) {
    .games-wrapper {
        width: $widthWrapper768;
        grid-template-columns: repeat(1, 400px);
    }
}

@media (max-width: $widthWrapper768) {
    .games-wrapper {
        width: 100vw;
    }
}
</style>
