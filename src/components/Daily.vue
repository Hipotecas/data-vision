<script setup>
const active = ref(0)
const tabs = ['中国', '欧美', '东南亚']
const top = [{
  label: '当日设备活跃数（台）',
  value: '870009',
},
{
  label: '当日用户活跃 (DAU)',
  value: '870009',
},
{
  label: '当日激活量（台）',
  value: '870009',
}]
const bottom = [
  {
    label: '当日订单量',
    value: '870009',
  },
  {
    label: '当日总收入（元）',
    value: '870009',
  },
  {
    label: '广告收入（元）',
    value: '870009',
  },
  {
    label: '广告ECPM（元）',
    value: '870009',
  },
]
function handleClick(item, index) {
  active.value = index
}
</script>

<template>
  <div class="h-10 leading-10 flex items-center">
    <span class="text-base mr-4">当日数据</span>
    <div>
      <span v-for="(item, index) in tabs" :key="item" class="px-4 cursor-pointer py-1 bg-black text-xs border border-light-200 border-solid" :class="[active === index && 'bg-white text-black']" @click="handleClick(item, index)">
        {{ item }}
      </span>
    </div>
  </div>
  <div class=" flex flex-col  flex-1">
    <div class="p-5 bg">
      <div v-for="item in top" :key="item" class="text-base flex justify-between h-10 leading-10">
        <span class="flex-1">{{ item.label }}</span>
        <span class="">{{ item.value }}</span>
      </div>
    </div>
    <div class="mt-5  p-5 bg">
      <div v-for="item in bottom" :key="item" class="text-base flex justify-between h-10 leading-10">
        <span class="flex-1">{{ item.label }}</span>
        <span class="">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
