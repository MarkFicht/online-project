<template>
    <main class="wrapper">
        <div class="window-wrapper">
            <div class="game-container">
                <section class="current-player">Current player</section>
                <section class="second-player">Second player</section>
                <section class="pawns">Pawns</section>

                <section class="board-wrapper">
                    <div class="board first-perspective">
                        <div
                            v-for="n in 16"
                            :key="n"
                            class="board-field"
                            :data-board-field="n"
                        >
                            <div class="board-cube board-cube-front">front</div>
                            <div class="board-cube board-cube-back"></div>
                            <div class="board-cube board-cube-right"></div>
                            <div class="board-cube board-cube-left"></div>
                            <div class="board-cube board-cube-top"></div>
                            <div class="board-cube board-cube-bottom"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!-- <header class="header-wrapper">
            <h3>Dashboard</h3>
        </header> -->
    </main>
</template>

<script lang="ts" src="./Quatro.ts" />
<style scoped lang="scss" src="./Quatro.module.scss" />
