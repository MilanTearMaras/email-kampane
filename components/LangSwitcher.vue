<template>
  <div class="flex items-center space-x-4">
    <select
      v-model="language"
      class="font-normal text-lg text-gray-600 hover:text-brand-blue transition inline-flex items-center px-4 py-2 rounded-[0.313rem] cursor-pointer"
    >
      <option value="en">CS</option>
      <option value="es">EN</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const language = ref("en");
</script>

<style scoped>

</style>