<template>
  <div class="mx-auto xl:max-w-[80%] max-w-full
              lg:px-24 px-6 lg:py-0 py-22
              lg:min-h-screen
              flex lg:flex-row flex-col justify-center gap-[24px]">
    <div class="lg:sticky lg:top-0 lg:py-16 py-6
                   overflow-auto scrollbar-invisible
                   lg:max-h-screen xl:w-1/3 lg:w-2/5
                   flex flex-col justify-start">
      <div>
        <section>
          <h1 class="font-medium tracking-tight text-slate-200 text-4xl">
            {{ homeConfig.fullName }}
          </h1>
        </section>
        <nav class="flex flex-col lg:gap-4 gap-2 mt-10 text-emerald">
          <RouterLink v-for="(item, id) in Object.keys(homeConfig.pages)" :key="id"
                      :to="item"
                      class="uppercase"
                      :class="[$route.name === item && 'underline']">
            {{ item.split("-").join(" ") }}
          </RouterLink>
        </nav>
      </div>
      <SocialBlock :data="homeConfig.socialLinks" />
    </div>

    <div class="xl:w-3/4 lg:w-3/5 lg:py-16 py-6 flex flex-col justify-between">
      <router-view v-slot="{ Component }">
        <transition name="slide-inner" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <footer class="">
        Built with
        <Link name="Vue.js" link="https://vuejs.org/" />
        and
        <Link name="Tailwind CSS" link="https://tailwindcss.com/" />,
        deployed with
        <Link name="Netlify" link="https://www.netlify.com/" />.
        <br>
        <Link link="https://www.flaticon.com/free-icons/deep-learning"
              name="Deep learning icons created by Becris - Flaticon" title="deep learning icons"/>
        <br>
        <div>© {{ dateRange }} {{ homeConfig.fullName }}</div>
        </footer>
    </div>
  </div>
</template>

<script setup>
import Link from "@/components/Link.vue";
import {RouterLink, RouterView} from "vue-router";
import homeConfig from '@/stores/home';
import SocialBlock from "@/components/SocialBlock.vue";

const startYear = 2023
const currentYear = new Date().getFullYear()
const dateRange = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`

</script>

<style scoped>
.slide-inner-enter-active,
.slide-inner-leave-active {
  transition: opacity 0.9s, transform 0.9s;
}
.slide-inner-enter-from,
.slide-inner-leave-to {
  opacity: 0;
  transform: translateX(30%);
}
</style>
