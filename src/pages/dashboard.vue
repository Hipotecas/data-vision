<script setup lang="ts">
import { get } from 'lodash-es';
import { queryDashboard } from '~/api/iot';
import type { Ad, DashboardData } from '~/api/monitor';
import { defaultDashboard } from '~/utils/line';
let data = $ref<DashboardData>(defaultDashboard)

onMounted(() => {
  queryDashboard().then((res) => {
    data = res.data
  });
})
const text1 = {
  chargeOrder: '发起续费订单数',
  successOrder: '成功订单数',
  successIncome: '成功扣款数（元）',
  successRate: '成功率',
}
const text2 = {
  chargeOrder: '创建订单数',
  successOrder: '成功订单数',
  successIncome: '收入（元）',
  successRate: '成功率',
}
const line1 = computed(() => get(data, 'adLoad', {}) as Ad)

const series1 = computed(() => get(data.adLoad, 'data', []).map(item => ({ name: item.key, type: 'line', data: item.data })))
const line2 = computed(() => get(data, 'adShow', {}) as Ad)
const series2 = computed(() => get(data.adShow, 'data', []).map(item => ({ name: item.key, type: 'line', data: item.data })))
const line3 = computed(() => get(data, 'adClick', {}) as Ad)
const series3 = computed(() => get(data.adClick, 'data', []).map(item => ({ name: item.key, type: 'line', data: item.data })))
</script>

<template>
  <div class="h-max  bg-black flex text-light-500 flex-col">
    <div class="text-3xl text-center grid  items-center h-50 relative">
      <span>IOT Real-Time Dashboard</span>
      <div class="absolute right-4">
        <DropdownMenu />
      </div>
    </div>
    <div class="flex-1 pb-10">
      <div class="px-10">
        <DashboardList title="每日续费订单量及收入" :list="data.renewalOrder" :texts="text1" />
        <DashboardList title="新建订单当天累计订单" :list="data.createOnetime" :texts="text2" />
        <DashboardList title="每日续费订单量及收入" :list="data.createRenewal" :texts="text2" />
      </div>
      <div class="px-10 flex flex-col mt-10">
        <div class="grid w-full current-grid gap-5">
          <div>
            <LineChart
              title="广告开屏请求次数"
              :legend="[]"
              :axis="line1.date || []"
              :series="series1"
            />
          </div>
          <div>
            <LineChart
              title="广告开屏请求次数"
              :legend="[]"
              :axis="line2.date || []"
              :series="series2"
            />
          </div>
          <div>
            <LineChart
              title="广告开屏请求次数"
              :legend="[]"
              :axis="line3.date || []"
              :series="series3"
            />
          </div>
        </div>
        <div class="grid w-full gap-5 grid-cols-2 mt-8">
          <div><LineFilter type="ali" title="支付宝一次性" /></div>
          <div> <LineFilter type="ali" subscribe title="支付宝续费" /></div>
          <div> <LineFilter type="wx" title="微信一次性" /></div>
          <div> <LineFilter type="wx" subscribe title="微信续费" /></div>
          <div> <LineFilter type="apple" title="Apple一次性" /></div>
          <div> <LineFilter type="apple" subscribe title="Apple续费" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.current-grid {
  grid-template-columns: repeat(3, 33.33%);
}
</style>
