<template>
    <nav class="store-menu">
        <span class="logo"><router-link to="/home">workout</router-link></span>
        <ul v-if="screenWidth > 700">
            <li><a @click="scrollToTarget('start')">С ЧЕГО НАЧАТЬ?</a></li>
            <li><a @click="scrollToTarget('training')">ТРЕНИРОВКИ</a></li>
            <li><a @click="scrollToTarget('prices')">ЦЕНЫ</a></li>
        </ul>
        <i v-else :class="menuIcon" @click="showMenu"></i>
        
        <ul class="menu__links-mobile" v-if="screenWidth <= 700 && mobileMenu">
            <li><a @click="scrollToTarget('start')">С ЧЕГО НАЧАТЬ?</a></li>
            <li><a @click="scrollToTarget('training')">ТРЕНИРОВКИ</a></li>
            <li><a @click="scrollToTarget('prices')">ЦЕНЫ</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Menu",
    data () {
        return {
            screenWidth: screen.width,
            mobileMenu: false,
            menuIcon: "fa-solid fa-bars",
        }
    },
    mounted() {
        this.onScreenResize();
    },
    methods: {
        onScreenResize() {
            window.addEventListener('resize', function () {
                this.screenWidth = screen.width;
            }.bind(this))
        },
        showMenu() {
            this.mobileMenu = !this.mobileMenu;
            this.menuIcon = this.menuIcon.includes("bars") ? "fa-solid fa-x" : "fa-solid fa-bars";
        },
        scrollToTarget(targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/components/store/styles/menu.scss";
</style>