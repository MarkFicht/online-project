<template>
    <div class="wrapper">
        <nav id="navbar-wrapper">
            <header class="header-wrapper">
                <h1>Online games</h1>
                <p v-if="isLoggedIn">
                    User:
                    {{
                        currentUser && currentUser?.displayName
                            ? currentUser.displayName
                            : currentUser.email
                    }}
                </p>
                <p v-else>{{ "User: Not logged in" }}</p>
            </header>

            <ul class="links-wrapper">
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
                    <button @click="onLogout">Log out</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" src="./Navbar.ts" />

<style scoped lang="scss">
@import "../../main";

.wrapper {
    width: 100%;
    // background-color: $colorBg2;
    background-color: transparent;
    color: $color;
    position: relative;
    z-index: 1000;
}

#navbar-wrapper {
    width: $widthWrapper1440;
    height: 80px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80px;
    justify-content: center;
    align-items: center;
}

.header-wrapper {
    display: flex;
    height: 80px;
    margin-left: 20px;

    > h1 {
        display: flex;
        justify-self: center;
        align-items: center;
        margin-right: 30px;
    }

    > p {
        display: flex;
        justify-self: center;
        align-items: center;
        font-size: 18px;
        padding-top: 6px;
    }
}

.links-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
    margin-right: 20px;
    height: 80px;

    // li {
    //     border: 1px solid red;
    // }

    a {
        font-weight: 500;
        color: $color;
        text-decoration: none;
        margin-left: 30px;
        transition: 0.2s all;
        padding: 4px 10px;
        display: block;
        height: 26px;
        line-height: 26px;
        position: relative;
        z-index: 0;
        font-size: 18px;
        letter-spacing: 1px;

        &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-bottom: 2px solid transparent;
            border-right: 3px solid transparent;
            transform: skew(-10deg, 0);
            bottom: 0;
            left: 0;
            z-index: -1;
            transition: width 0.2s ease 0.2s, height 0.2s ease,
                border 0.01s ease 0.39s;
        }

        &:hover {
            // color: $colorBg;
        }

        &:hover::after,
        &:active::after,
        &:focus::after {
            width: 100%;
            height: 22px;
            border-bottom: 2px solid $colorBg;
            border-right: 3px solid $colorBg;
            transition: width 0.2s ease, height 0.2s ease 0.2s,
                border 0.01s ease;
        }

        &.router-link-exact-active {
            color: $colorBg;

            &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 22px;
                border-bottom: 2px solid $colorBg;
                border-right: 3px solid $colorBg;
                transform: skew(-10deg, 0);
                bottom: 0;
                left: 0;
                z-index: -1;
            }

            // &:hover,
            // &:focus {
            //     color: $color;
            // }
        }
    }

    button {
        position: relative;
        overflow: hidden;
        width: 120px;
        height: 38px;
        line-height: 32px;
        margin-left: 40px;
        transition: 0.2s all;
        outline: none;
        background-color: $color;
        color: $colorBg2;
        font-size: 1.1em;
        font-weight: bold;
        border-radius: 10px;
        // text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        border: 2px solid rgba($color: $colorBg2, $alpha: 0.4);
        border-right: 2px solid rgba($color: $colorBg2, $alpha: 0.2);
        border-bottom: 2px solid rgba($color: $colorBg2, $alpha: 0.2);

        &:hover,
        &:focus,
        &:active {
            background-color: rgba($color: $colorBg, $alpha: 1);
            color: $color;
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 46px;
            height: 100%;
            border-radius: 10px;
            background: rgba($color: $color, $alpha: 0.5);
            transform: skewX(45deg) translateX(155px);
            transition: all 0.5s;
        }

        &:hover::before {
            transition: all 0.5s 0.15s;
            transform: skewX(45deg) translateX(-155px);
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

// ---
// @keyframes border-button {
//     from {
//         width: 0;
//         height: 1px;
//         border-bottom: 1px solid transparent;
//         border-right: 3px solid transparent;
//     }
//     1% {
//         width: 0;
//         height: 1px;
//         border-bottom: 1px solid red;
//         border-right: 3px solid red;
//     }
//     66% {
//         width: 100%;
//         height: 1px;
//         border-bottom: 1px solid red;
//         border-right: 3px solid red;
//     }
//     to {
//         width: 100%;
//         height: 20px;
//         border-bottom: 1px solid red;
//         border-right: 3px solid red;
//     }
// }
</style>