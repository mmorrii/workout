<template>
   <div class="videos-page">
      <div class="video"
         v-for="(video, index) in videos"
         :key="index"
         :class="{ open: video.isOpen }"
         @click="toggleVideo(index)"
      >
         <p class="number">0{{ index + 1 }}</p>
         <div class="info">
            <h4>{{ video.title }}</h4>
            <p>{{ video.videoCount }} видео</p>
         </div>
         <div class="icon">
            <i class="fa-solid fa-arrow-right"></i>
         </div>
         <div class="video__open" v-if="video.isOpen">
            <div
               class="video__item"
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
   </div>
</template>

<script>
export default {
   name: "Videos",
   props: ['data'],
   created() {
      this.courses = this.data;
   },
   data() {
      return {
         videos: [
            { title: 'Упражнения дома', videoCount: 15, isOpen: false },
            { title: 'Оставайтесь в форме', videoCount: 48, isOpen: false },
            { title: 'Интенсив', videoCount: 25, isOpen: false },
            { title: 'Простые упражнения', videoCount: 35, isOpen: false },
            { title: 'Сжигание калорий', videoCount: 35, isOpen: false }
         ],
         courses: []
      }
   },
   methods: {
      toggleVideo(index) {
         this.videos.forEach((video, i) => {
            if (i !== index) {
               video.isOpen = false;
            }
         });
         
         this.videos[index].isOpen = !this.videos[index].isOpen;
      }
   }
}
</script>

<style lang="scss" scoped>
@import "@/components/home/styles/videos.scss";
</style>