<template>
  <div>
    <CardExperience v-for="(item, id) in homeConfig.pages.experience" :key="id"
                        :start-date="item.startDate"
                        :end-date="item.endDate"
                        :position="item.position"
                        :company="item.company"
                        :company-link="item.companyLink"
                        :description="item.description"
                        :tags="item.tags"/>
  </div>
</template>

<script setup>
import homeConfig from "@/stores/home";
import CardExperience from "@/components/CardExperience.vue";
</script>

<style scoped>

</style>
