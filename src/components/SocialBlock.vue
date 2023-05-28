<template>
  <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li class="mr-5 text-xs" v-for="(item, id) in props.data" :key="id">
      <a class="block hover:text-slate-200" :href="item.link" target="_blank" rel="noreferrer">
        <span class="sr-only">{{ item.name }}</span>
        <component v-if="item.link" :is="iconComponents(item.name)"  />
      </a>
    </li>
  </ul>
</template>

<script setup>
import IconGithub from "@/components/icons/social/IconGithub.vue";
import IconLinkedin from "@/components/icons/social/IconLinkedin.vue";
import IconKaggle from "@/components/icons/social/IconKaggle.vue";

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
const iconComponents = (name) => {
  if (name === 'github') return IconGithub
  if (name === 'linkedin') return IconLinkedin
  if (name === 'kaggle') return IconKaggle
  return ''
}
</script>

<style scoped>

</style>
