<template>
    <div class="container">
        <nav id="navbar">
            <header>
                <h1>Online project: Vue, Ts, Firebase</h1>
            </header>
            <ul class="links">
                <li
                    v-if="isLoggedIn"
                >{{ currentUser && currentUser?.displayName ? currentUser.displayName : currentUser.email }}</li>
                <li v-if="isLoggedIn">
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link to="/register">Register</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <button @click="onLogout">Logout</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" src="./Navbar.ts" />

<style scoped lang="scss">
@import "../../main";

.container {
    width: 100%;
    background-color: $colorBg2;
    color: $color;
    position: relative;
    z-index: 1000;
}

#navbar {
    width: $widthContainer;
    height: 60px;
    margin: 0 auto;
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

            &:hover {
                background-color: $colorHover2;
            }
        }
    }
}
</style>