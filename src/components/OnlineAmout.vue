<script setup lang="ts">
defineProps<{ title: string; list: { country: string; onlineDevice: number }[] }>()
// 23 35 52
</script>

<template>
  <p class="text-base h-10 leading-10">
    {{ title }}
  </p>
  <div class="bg overflow-auto p-4 h-max-100">
    <p v-for="(item, index) in list" :key="index" class="flex items-center px-4">
      <span class="w-1/2 text-left">{{ item.country }}:</span>
      <span class="w-1/2 text-left">{{ item.onlineDevice }}</span>
    </p>
  </div>
</template>

<style lang="css">
.bg {
  background-image: linear-gradient(rgba(0, 108, 241, 0.45) 0%, rgba(74, 130, 246, 0.1) 100%);
}
</style>
