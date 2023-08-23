import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import router from "@/router"

createApp(App).use(router).use(MotionPlugin).mount('#app')