<script setup lang="ts">
import type { CreateOnetime } from '~/api/monitor';

defineProps<{ title: string; list: CreateOnetime; texts: Record<string, any> }>()
const titles = [
  '当日累计',
  '支付宝',
  '微信',
  'Pay',
  '昨日累计',
  '支付宝',
  '微信',
  'Pay',
  '总计增长率',
]
</script>

<template>
  <div class="text-center py-8">
    <span>{{ title }}</span>
  </div>

  <div class="dashboard p-5">
    <div class="flex">
      <span class="flex-1" />
      <span v-for="item in titles" :key="item" class="flex-1 items-center justify-center h-10 leading-10">
        {{ item }}
      </span>
    </div>
    <div class="flex flex-col">
      <div v-for="(item, index) in list" :key="index" class="flex w-full list">
        <span>{{ texts[index] }}</span>
        <span>{{ item.todayTotal }}</span>
        <span>{{ item.todayAli }}</span>
        <span>{{ item.todayWx }}</span>
        <span>{{ item.todayApple }}</span>
        <span>{{ item.yesterdayTotal }}</span>
        <span>{{ item.yesterdayAli }}</span>
        <span>{{ item.yesterdayWx }}</span>
        <span>{{ item.yesterdayApple }}</span>
        <span>{{ item.increaseRate }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dashboard {
  background-image: linear-gradient(180deg, rgba(0, 108, 241, 0.45) 0%, rgba(74, 130, 246, 0.1) 100%);
}

.list span {
  /* width: 10%; */
  /* align-items: center;
  justify-content: center;
  height: 2.5rem;
  line-height: 2.5rem; */
  @apply items-center justify-center h-10 leading-10 flex-1
}
</style>
