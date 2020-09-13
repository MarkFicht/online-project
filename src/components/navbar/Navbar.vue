<template>
    <div class="container">
        <nav id="navbar">
            <header>
                <h1>Online project: Vue, Ts, Firebase</h1>
            </header>
            <ul class="links">
                <li>
                    <router-link v-if="isLoggedIn" to="/">Dashboard</router-link>
                </li>
                <li>
                    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
                </li>
                <li>
                    <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
                </li>
                <li>
                    <button v-if="isLoggedIn" @click="onLogout">Logout</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" src="./Navbar.ts" />

<style scoped lang="scss">
$color: #f9e0ff;
$color2: #eaffe0;

$colorBg: rgb(182, 111, 216);
$colorBg2: #83cd7a;

$colorHover: #9239ad;
$colorHover2: #56c048;
$colorActive: #6f407e;
$colorActive2: #83cd7a;

$widthContainer: 1440px;

h1 {
    margin: 0;
    padding: 0;
}

.container {
    width: 100%;
    background-color: $colorBg;
}

#navbar {
    width: $widthContainer;
    height: 60px;
    margin: 0 auto;
    background-color: $colorBg;
    color: $color;
    display: grid;
    grid-template-columns: 1fr 450px;
    grid-template-rows: 60px;
    justify-content: center;
    align-items: center;

    header {
        display: flex;
    }

    .links {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style-type: none;

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
                color: $colorActive;
            }
        }

        button {
            width: 80px;
            height: 40px;
            margin-left: 30px;
            transition: 0.2s all;
            border: none;
            outline: none;
            background-color: $colorBg2;
            color: $color2;
            font-size: 16px;
            font-weight: bold;
            border-radius: 15px;
            cursor: pointer;

            &:hover {
                background-color: $colorHover2;
            }
        }
    }
}
</style>