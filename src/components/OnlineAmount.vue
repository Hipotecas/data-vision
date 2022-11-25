<script setup lang="ts">
import type { OnlineEquipment } from '~/api/types';

defineProps<{ title: string; list: OnlineEquipment[] }>()
// 23 35 52
</script>

<template>
  <p class="text-base h-10 leading-10">
    {{ title }}
  </p>
  <div class="bg overflow-auto p-4 h-max-100">
    <p v-for="(item, index) in list" :key="index" class="flex items-center px-4">
      <span class="w-1/2 text-left">{{ item.country }}:</span>
      <span class="w-1/2 text-left">{{ $filters.number(item.cnt) }}</span>
    </p>
  </div>
</template>

<style lang="css">
.bg {
  background-image: linear-gradient(180deg, rgba(0, 108, 241, 0.45) 0%, rgba(74, 130, 246, 0.1) 100%);
  /* background-image: url('../assets/yuncunrec.png'); */
  background-size: 100% 100%;
}
</style>
