<script setup lang="ts">
import type { FactoryReport } from '~/api/types';

const props = defineProps<{ factoryData: FactoryReport[] }>()
const active = ref(0)
const tabs = ['日', '周', '月']
</script>

<template>
  <div class="h-10 leading-10 flex items-center">
    <span class="text-base mr-4">厂商数据统计</span>
  </div>
  <div class="flex-1 overflow-hidden flex flex-col">
    <div class="font-semibold text-white py-2 flex justify-around text-sm">
      <span class="w-full">厂商</span>
      <span class="w-full">总激活</span>
      <span class="w-full">今日激活</span>
      <span class="w-full">当前在线</span>
      <span class="w-full">工厂累计生产</span>
      <span class="w-full">工厂今日生产</span>
    </div>
    <div class="flex-1 overflow-scroll">
      <div v-for="(item, index) in factoryData" :key="index" class="py-2 justify-around text-night text-base flex items-center">
        <span class="w-full"> {{ item.factoryName }} </span>
        <span class="w-full">{{ item.totalActivate }} </span>
        <span class="w-full">{{ item.todayActivate }} </span>
        <span class="w-full"> {{ item.todayOnline }}</span>
        <span class="w-full"> {{ item.totalProduct }}</span>
        <span class="w-full"> {{ item.todayProduct }}</span>
      </div>
    </div>
  </div>
</template>
