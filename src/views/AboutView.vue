<template>
  <div>

    <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200">
      {{ HomeConfig.position }}
    </h2>
    <p class="mt-2 max-w-xs leading-normal" v-if="isCanada && Object.keys(HomeConfig.noc).length !== 0">
      (NOC <a class="text-emerald" :href="HomeConfig.noc.webDeveloper">21234</a> | <a class="text-emerald" :href="HomeConfig.noc.dataScientist">21211</a>)
    </p>
    <p class="mt-4 max-w-xs leading-normal">
      {{ HomeConfig.subDescription }}
    </p>
  </div>
</template>

<script setup>
import HomeConfig from '@/stores/home'
import Regions from "@/stores/regions-to-countries.json";

const currentRegion = Intl.DateTimeFormat().resolvedOptions().timeZone
const isCanada = Regions[currentRegion] === 'Canada'
</script>

<style scoped>

</style>
