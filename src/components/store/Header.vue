<template>
    <div class="header-store">
        <div class="lead__store">
            <div>
                    <h1>Cardio<br>Exercise</h1>
                    <p>Огромный выбор материалов о здоровье и фитнесе, полезных рецептов и историй преображения, которые помогут вам привести себя в форму и оставаться в форме!</p>
                    <button @click="redirectTo('/workout/log-in')">Присоединяйтесь</button>
                    <div class="images">
                        <img src="/src/assets/img/store/logos/nike.svg" alt="Nike">
                        <img src="/src/assets/img/store/logos/buzzfeed.svg" alt="BuzzFeed">
                        <img src="/src/assets/img/store/logos/espirit.svg" alt="Esprit">
                        <img src="/src/assets/img/store/logos/national-geographic.svg" alt="National Geographic">
                        <img src="/src/assets/img/store/logos/dw.svg" alt="DW Fitness First">
                        <img src="/src/assets/img/store/logos/huffpost.svg" alt="Huff post">
                    </div>
                </div>
                <div>
                    <img src="/src/assets/img/store/lead.png" alt="Workout">
                    <div class="lead__info__store">
                        <div class="lead__info__km">
                            <i class="fa-solid fa-person-running"></i>
                            <span>4,95</span>
                            km
                        </div>
                        <div class="lead__info__training">
                            <div>
                                <i class="fa-solid fa-play"></i>
                            </div>
                            <div>
                                <span>350+</span>
                                Тренировок
                            </div>
                        </div>
                        <div class="lead__info__videos">
                            <span>500+</span>
                            Бесплатных видео
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import router from "@/router";

export default {
   name: "Header",
    setup() {
        const redirectTo = (value) => {
           router.push(value);
        }
        
        return {
            redirectTo
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/components/store/styles/header.scss";
</style>