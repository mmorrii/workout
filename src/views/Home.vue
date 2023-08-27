<template>
   <div>
       <Menu/>
       <Header/>
       <Training :data="courses" id="training"/>
       <Content id="about"/>
       <Videos :data="courses" id="videos"/>
       <Footer/>
       <BackToTop/>
   </div>
</template>

<script>
import Menu from "@/components/home/Menu.vue";
import Header from "@/components/home/Header.vue";
import Training from "@/components/home/Training.vue";
import Content from "@/components/home/Content.vue";
import Videos from "@/components/home/Videos.vue";
import Footer from "@/components/common/Footer.vue";
import BackToTop from "@/components/common/BackToTop.vue";

export default {
   name: 'Home',
   components: {BackToTop, Footer, Videos, Content, Training, Header, Menu},
   data () {
      return {
         courses: [
            {'title': 'Кардио', 'cl': '250 калорий', 'time': '58:24', 'img': '/workout/images/home/cardio.png'},
            {'title': 'Растяжка', 'cl': '250 калорий', 'time': '58:24', 'img': '/workout/images/home/stretching.png'},
            {'title': 'Йога', 'cl': '250 калорий', 'time': '58:24', 'img': '/workout/images/home/yoga.png'},
            {'title': 'Бег', 'cl': '250 калорий', 'time': '58:24', 'img': '/workout/images/home/run.png'},
            {'title': 'Гантели', 'cl': '250 калорий', 'time': '58:24', 'img': '/workout/images/home/dumbbells.png'},
            {'title': 'На улице', 'cl': '250 калорий', 'time': '58:24', 'img': '/workout/images/home/street.png'},
         ]
      }
   },
    mounted() {
       setTimeout(() => {
           document.body.style.overflow = 'auto';
       }, 300)
    },
}
</script>