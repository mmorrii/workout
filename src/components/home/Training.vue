<template>
   <div class="training">
      <div class="heading">
         <h2>Популярные Тренировки</h2>
         <a>ПОСМОТРЕТЬ БОЛЬШЕ</a>
      </div>
      <div class="courses">
         <div class="courses__item"
              v-for="el in courses"
              :key="el.title"
         >
            <div class="image">
               <img :src="el.img" :alt="el.title">
            </div>
            <h2>{{ el.title }}</h2>
            <p>{{ el.cl }}</p>
            <div class="time">{{ el.time }}</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Training",
   props: ['data'],
   created() {
      this.courses = this.data;
   },
   data () {
      return {
         courses: []
      }
   }
}
</script>

<style lang="scss" scoped>
@import "@/components/home/styles/training.scss";
</style>