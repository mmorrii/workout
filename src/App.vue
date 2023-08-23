<template>
   <div class="wrapper">
      <div class="container">
          <router-view v-slot="{ Component }">
              <transition name="fade">
                  <component :is="Component" :key="$route.path"/>
              </transition>
          </router-view>
      </div>
   </div>
</template>

<style lang="scss">
@import "@/assets/styles/style.scss";

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>