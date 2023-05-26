<template>
  <div class="mx-auto lg:max-w-[80%] max-w-full
              lg:px-24 px-6 lg:py-0 py-12
              lg:min-h-screen
              flex lg:flex-row flex-col justify-center gap-[24px]">
    <header class="lg:sticky lg:top-0 lg:py-24 py-6
                   lg:max-h-screen lg:w-1/3
                   flex flex-col justify-between">
      <div>
        <section>
          <h1 class="text-4lg font-bold tracking-tight text-slate-200 sm:text-5xl">
            {{ homeConfig.fullName }}
          </h1>
          <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-lg">
            {{ homeConfig.position }}
          </h2>
          <p class="mt-4 max-w-xs leading-normal">
            {{ homeConfig.subDescription }}
          </p>
        </section>
        <nav class="flex flex-col lg:gap-4 gap-2 lg:mt-24 mt-2  text-emerald">
          <RouterLink v-for="(item, id) in Object.keys(homeConfig.pages)" :key="id"
                      :to="item"
                      class="uppercase"
                      :class="[$route.name === item && 'underline']">
            {{ item.split("-").join(" ") }}
          </RouterLink>
        </nav>

      </div>

      <FooterSocial :data="homeConfig.socialLinks" />
    </header>

    <div class="lg:w-2/3 lg:py-24 py-6 flex flex-col justify-between">
      <RouterView />
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
import FooterSocial from "@/components/FooterSocial.vue";
import { RouterLink } from "vue-router";
import homeConfig from '@/stores/home'

const startYear = 2023
const currentYear = new Date().getFullYear()
const dateRange = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`
</script>
