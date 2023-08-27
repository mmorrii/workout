<template>
   <div class="page-content">
      <div class="features">
         <div class="features__heading">
             <img src="/src/assets/img/home/smear.svg" alt="smear under text">
            <h3>Тренировки Специально Для тебя</h3>
         </div>
         <div class="features__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
            <button @click="redirectTo('/workout/store')">Начать</button>
         </div>
      </div>
      <div class="pictures">
         <div
            v-for="(trainer, index) in trainers"
            :key="index"
            :class="trainer.class"
            v-motion
            :initial="{ opacity: 0, y: 80, scale: 0.9 }"
            :visible="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 50,
                    mass: 0.1,
                }
            }"
         >
            <img :src="trainer.img" :alt="trainer.name">
            <h4>{{ trainer.name }}</h4>
            <p>Тренер</p>
         </div>
      </div>
   </div>
</template>

<script>
import router from "@/router";

export default {
   name: "Content",
   data() {
      return {
         trainers: [
            {
                class: 'item1',
                img: '/workout/images/home/trainer1.png',
                name: 'Саманта Вильям'
            },
            {
                class: 'item2',
                img: '/workout/images/home/trainer2.png',
                name: 'Алина Реймонд'
            },
            {
                class: 'item3',
                img: '/workout/images/home/trainer3.png',
                name: 'Джонатан Вайз'
            }
         ],
      }
   },
    setup() {
        const redirectTo = (value) => {
            router.push(value);
        }
        
        return {
            redirectTo,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/components/home/styles/content.scss";
</style>