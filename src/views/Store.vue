<template>
   <div>
       <Menu/>
       <Header/>
       <Slider id="start" />
       <Content id="training" />
       <Prices id="prices" />
       <Footer/>
       <BackToTop/>
   </div>
</template>

<script>
import Menu from "@/components/store/Menu.vue";
import Header from "@/components/store/Header.vue";
import Slider from "@/components/store/Slider.vue";
import Content from "@/components/store/Content.vue";
import Prices from "@/components/store/Prices.vue";
import Footer from "@/components/common/Footer.vue";
import BackToTop from "@/components/common/BackToTop.vue";

export default {
   name: 'Store',
   components: {BackToTop, Prices, Content, Slider, Header, Footer, Menu},
    mounted() {
        document.body.style.overflow = 'auto';
    },
}
</script>