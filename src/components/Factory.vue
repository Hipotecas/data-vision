<script setup lang="ts">
import type { FactoryDataList } from '~/api/types';

const props = defineProps<{ factoryData: FactoryDataList[] }>()
const active = ref(0)
const tabs = ['日', '周', '月']
</script>

<template>
  <div class="h-10 leading-10 flex items-center">
    <span class="text-base mr-4">厂商数据统计</span>
    <div>
      <span v-for="(item, index) in tabs" :key="item" class="px-4 cursor-pointer py-1 bg-black text-xs border border-light-200 border-solid" :class="[active === index && 'bg-white text-black']" @click="handleClick(item, index)">
        {{ item }}
      </span>
    </div>
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
      <div v-for="(item, index) in factoryData" :key="index" class="py-2 justify-around text-night text-xs flex items-center">
        <span class="w-full"> {{ item.name }} </span>
        <span class="w-full">{{ item.totalActivity }} </span>
        <span class="w-full">{{ item.todayActivity }} </span>
        <span class="w-full"> {{ item.todayActive }}</span>
        <span class="w-full"> {{ item.totalFactory }}</span>
        <span class="w-full"> {{ item.todayFactory }}</span>
      </div>
    </div>
  </div>
</template>
