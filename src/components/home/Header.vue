<template>
    <div class="header-page">
            <div class="promotion">
                <span>New</span>
                Новая интенсивная тренировка
            </div>
            <div class="lead">
                <div>
                    <h1>Cardio<br>Exercise</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="lead__buttons">
                        <button @click="redirectTo('/store')">Начать</button>
                        <button @click="redirectTo('/store')">Детальнее</button>
                    </div>
                </div>
                <div>
                    <img src="/src/assets/img/home/lead.png" alt="Workout">
                    <div class="lead__info">
                        <div class="lead__info__time">
                            <span>{{ showTime }}</span>
                            ВРЕМЯ
                        </div>
                        <div class="lead__info__cl">
                            <span>165</span>
                            КАЛОРИИ
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
    data() {
      return {
         showTime: '39:00',
         timerCount: 38 * 60
      }
    },
    watch: {
      timerCount: {
         handler () {
            setTimeout(() => {
               if(this.timerCount <= 0) return;
               this.timerCount--;
               const minutes = Math.ceil(this.timerCount / 60);
               const seconds = this.timerCount - minutes * 60 + 60;
               let txtSeconds = 0;

               if(seconds === 60) {
                  txtSeconds = '00';
               }
               else if (seconds < 10 && seconds > 0) {
                  txtSeconds = '0' + seconds;
               }
               else {
                  txtSeconds = seconds;
               }
               this.showTime = (txtSeconds === '00' ? minutes + 1: minutes)  + ':' + txtSeconds;
            }, 1000)
         },
         immediate: true
      }
   },
    setup() {
        const redirectTo = (value) => {
            router.push(value);
        }
    
        return {
            redirectTo,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/components/home/styles/header.scss";
</style>