<script setup lang="ts">
defineProps<{ title: string }>()
const titles = [
  '当日累计',
  '支付宝',
  '微信',
  'Pay',
  '昨日累计',
  '支付宝',
  '微信',
  'Pay',
]
</script>

<template>
  <div class="text-center py-4">
    <span>{{ title }}</span>
  </div>

  <div class="dashboard p-5">
    <div class="flex">
      <span class="flex-1" />
      <span v-for="item in titles" :key="item" class="flex-1 items-center justify-center h-10 leading-10">
        {{ item }}
      </span>
    </div>
    <div class="flex">
      <span v-for="item in 9" :key="item" class="flex-1 items-center h-10 leading-10">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<style>
.dashboard {
  background-image: linear-gradient(180deg, rgba(0, 108, 241, 0.45) 0%, rgba(74, 130, 246, 0.1) 100%);
}
</style>
