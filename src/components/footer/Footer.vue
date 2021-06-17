<template>
    <div class="wrapper">
        <footer id="footer-wrapper">
            <p>Created by Marek Ficht</p>
            <ul>
                <li>
                    <a href="#"><i class="fab fa-github"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-envelope-open"></i></a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script lang="ts" src="./Footer.ts" />

<style scoped lang="scss">
@import "../../main";

.wrapper {
    width: 100%;
    background-color: rgba($color: $colorBg2, $alpha: 1);
    color: $color;
    position: relative;
    z-index: 1000;
}

#footer-wrapper {
    width: $widthWrapper1440;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 20px;
        margin-right: 20px;
        font-style: italic;
        font-weight: 500;
        letter-spacing: 1px;
    }

    ul {
        position: relative;
        display: flex;
        z-index: 2;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul li {
        position: relative;
        list-style: none;
        margin: 0 10px;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 10px;
    }

    ul li a {
        width: 46px;
        height: 40px;
        display: inline-block;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        font-size: 1.4em;
        border: 2px solid rgba($color: $color, $alpha: 0.4);
        border-right: 2px solid rgba($color: $color, $alpha: 0.2);
        border-bottom: 2px solid rgba($color: $color, $alpha: 0.2);
    }

    ul li a::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 46px;
        height: 100%;
        border-radius: 10px;
        background: rgba($color: $color, $alpha: 0.5);
        transform: skewX(45deg) translateX(90px);
        transition: all 0.5s;
    }

    ul li a:hover::before {
        transform: skewX(45deg) translateX(-90px);
    }
}

// ---
@media (max-width: $widthWrapper1440) {
    #footer-wrapper {
        width: $widthWrapper1024;
    }
}

@media (max-width: $widthWrapper1024) {
    #footer-wrapper {
        width: $widthWrapper768;
    }
}

@media (max-width: $widthWrapper768) {
    #footer-wrapper {
        width: 100vw;
    }
}
</style>