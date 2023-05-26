<template>
  <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
    <li class="mr-1.5 mt-2" v-for="(item, id) in props.data" :key="id">
      <div class="flex items-center rounded-full
                  bg-teal-200/10 px-3 py-1 text-xs font-bold leading-5 text-emerald">
        {{ item }}
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>


<style scoped>

</style>
