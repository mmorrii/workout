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
            {'title': 'Кардио', 'cl': '250 калорий', 'time': '58:24', 'img': 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
            {'title': 'Растяжка', 'cl': '250 калорий', 'time': '58:24', 'img': 'https://images.pexels.com/photos/4720260/pexels-photo-4720260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
            {'title': 'Йога', 'cl': '250 калорий', 'time': '58:24', 'img': 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
            {'title': 'Бег', 'cl': '250 калорий', 'time': '58:24', 'img': 'https://images.pexels.com/photos/7523358/pexels-photo-7523358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
            {'title': 'Гантели', 'cl': '250 калорий', 'time': '58:24', 'img': 'https://images.pexels.com/photos/3836880/pexels-photo-3836880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
            {'title': 'На улице', 'cl': '250 калорий', 'time': '58:24', 'img': 'https://images.pexels.com/photos/3799275/pexels-photo-3799275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
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