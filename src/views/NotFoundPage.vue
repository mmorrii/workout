<template>
<div>
    <div class="block-404">
        <h3>404</h3>
        <p>page not found</p>
        <div class="gif">
            <img src="@/assets/img/404/runner.gif" alt="gif">
        </div>
        <div class="link-back">
            <router-link to="/home">
                Go to Home
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "NotFoundPage",
}
</script>

<style scoped>
@import "@/views/styles/404.scss";
</style>