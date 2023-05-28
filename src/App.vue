<template>
  <div class="w-full h-full">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
document.body.style.overflowX = 'hidden'
</script>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.9s, transform 0.9s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
