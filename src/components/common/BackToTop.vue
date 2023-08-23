<template>
<div class="back-to-top"
     @click="onScrollTop"
     :class=" buttonVisibility ? 'show' : '' ">
    <i class="fa-solid fa-arrow-right fa-rotate-270"></i>
</div>
</template>

<script>
export default {
    name: "BackToTop",
    data() {
        return {
            heightScroll: 0,
            buttonVisibility: false,
        }
    },
    methods: {
        onScrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        scroll() {
            this.buttonVisibility = window.scrollY >= 1000;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.scroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.scroll);
    },
}
</script>

<style scoped>
@import "@/components/common/styles/back-to-top.scss";
</style>