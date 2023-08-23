<template>
    <div class="store-content">
        <div class="block reverse">
            <div class="image"
                 v-motion
                 :initial="{ opacity: 0, x: 100 }"
                 :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 250,
                        damping: 50,
                        mass: 0.5,
                    }
                 }"
            >
                <img src="@/assets/img/store/content1.png" alt="photo">
            </div>
            <div class="info">
               <h3>Тренируйтесь дома</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <span>
                    <router-link to="/workout/training-plans">
                        Больше<i class="fa-solid fa-arrow-right"></i>
                    </router-link>
                </span>
            </div>
        </div>
        <div class="block">
            <div class="image"
                 v-motion
                 :initial="{ opacity: 0, x: -100 }"
                 :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 250,
                        damping: 50,
                        mass: 0.5,
                    }
                 }"
            >
                <img src="@/assets/img/store/content2.png" alt="photo">
            </div>
            <div class="info">
                <h3>Получите еще
                    больше полезного
                    контента</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <span>
                    <router-link to="/workout/training-plans">
                        Больше<i class="fa-solid fa-arrow-right"></i>
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Content"
}
</script>

<style lang="scss" scoped>
@import "@/components/store/styles/content.scss";
</style>