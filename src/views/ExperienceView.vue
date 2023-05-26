<template>
  <div>
    <CardProfExperience v-for="(item, id) in homeConfig.pages.experience" :key="id"
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
import CardProfExperience from "@/components/CardProfExperience.vue";
</script>

<style scoped>

</style>
