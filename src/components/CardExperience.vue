<template>
  <div class="mb-12">
    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4
                  lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none
                    lg:-inset-x-6 lg:block lg:group-hover:bg-emerald/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header class="mb-2 mt-1 text-xs font-bold tracking-wide sm:col-span-2 lg:order-2 order-1">
        {{ props.startDate }} — {{ props.endDate }}
      </header>
      <div class="z-10 sm:col-span-6 lg:order-1 order-1">
        <div class="font-medium leading-snug text-slate-200">
          <div class="flex flex-row gap-4 flex-wrap">
            <div class="text-lg inline-flex items-base">{{ props.position }}</div>
            <div class="inline-flex items-center font-medium leading-tight lg:text-slate-200 text-emerald
                          focus-visible:text-teal-300 text-lg" v-if="!props.companyLink">{{ props.company }}
            </div>
            <a v-else
               class="inline-flex items-center font-medium leading-tight lg:text-slate-200 text-emerald
                        hover:text-emerald focus-visible:text-teal-300 text-lg"
               :href="props.companyLink"
               target="_blank"
               rel="noreferrer">
              <span class="absolute hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              {{ props.company }}
            </a>
          </div>
        </div>
        <p class="mt-2 text-base leading-normal">
          {{ props.description }}
        </p>
        <Tags :data="props.tags"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tags from "@/components/Tags.vue";

const props = defineProps({
  startDate: {
    type: String,
    default: ''
  },
  endDate: {
    type: String,
    default: 'Current'
  },
  position: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  companyLink: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  }
})
</script>
