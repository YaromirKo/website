<script setup>
const props = defineProps({
  link: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <a :href="props.link" class="font-medium text-slate-400 hover:text-emerald focus-visible:text-emerald" :title="props.title || props.name">
    {{ props.name }}
  </a>
</template>

<style scoped>

</style>
