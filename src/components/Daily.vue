<script setup lang="ts">
import type { TodayReport } from '~/api/types';

const props = withDefaults(defineProps<{ data: TodayReport }>(), {
  data: () => ({
    cn: {},
    us: {},
    sg: {},
  } as TodayReport),
})
type K = keyof TodayReport
const active = ref<K>('cn')
const tabs = [{ label: '中国', value: 'cn' }, { label: '欧美', value: 'us' }, { label: '东南亚', value: 'sg' }] as { label: string; value: K }[]

const current = computed(() => props.data[active.value] || {})

function handleClick(item: any) {
  const key = tabs.find(i => i.value === item.value)
  if (key)
    active.value = key.value
}
</script>

<template>
  <div class="h-10 leading-10 flex items-center">
    <span class="text-base mr-4">当日数据</span>
    <div>
      <span v-for="(item) in tabs" :key="item.label" class="px-4 cursor-pointer py-1 bg-black text-xs border border-light-200 border-solid" :class="[active === item.value && 'bg-white text-black']" @click="handleClick(item)">
        {{ item.label }}
      </span>
    </div>
  </div>
  <div class=" flex flex-col  flex-1">
    <div class="p-5 bg">
      <div class="text-base text-night flex justify-between h-10 leading-10 items-center">
        <span class="flex-1">当日设备活跃数(台)</span>
        <span class="text-xl text-white">{{ current.activeEquipment }}</span>
      </div>
      <div class="text-base text-night flex justify-between h-10 leading-10 items-center">
        <span class="flex-1">当日用户活跃(DAU)</span>
        <span class="text-xl text-white">{{ current.activeUser }}</span>
      </div>
      <div class="text-base text-night flex justify-between h-10 leading-10 items-center">
        <span class="flex-1">当日激活量(台)</span>
        <span class="text-xl text-white">{{ current.activateEquipment }}</span>
      </div>
    </div>
    <div class="mt-5  p-5 bg">
      <div class="text-base text-night flex justify-between h-10 leading-10 items-center">
        <span class="flex-1">当日订单量</span>
        <span class="text-xl text-white">{{ current.orderCount }}</span>
      </div>
      <div class="text-base text-night flex justify-between h-10 leading-10 items-center">
        <span class="flex-1">当日总收入(元)</span>
        <span class="text-xl text-white">{{ current.orderIncome }}</span>
      </div>
      <div class="text-base text-night flex justify-between h-10 leading-10 items-center">
        <span class="flex-1">广告收入(元)</span>
        <span class="text-xl text-white">{{ current.adIncome }}</span>
      </div>
      <div class="text-base text-night flex justify-between h-10 leading-10 items-center">
        <span class="flex-1">广告ECPM(元)</span>
        <span class="text-xl text-white">{{ current.adECPM }}</span>
      </div>
    </div>
  </div>
</template>
