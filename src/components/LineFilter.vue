<script setup lang="ts">
import dayjs from 'dayjs';
import { get } from 'lodash-es';
import { getDashboard } from '~/api/iot';
import { getLineOption } from '~/utils/line';

const props = defineProps<{
  title?: string
  type: string
  subscribe?: boolean
}>()
const state = reactive({
  current: new Date(),
  target: dayjs().subtract(1, 'day').toDate(),
})
let dash = $ref<{ date: string[]; data: { key: string; data: number[] }[] }>({ date: [], data: [] })

const legend = computed(() => get(dash, 'data', []).map(i => i.key))
const axis = computed(() => get(dash, 'date', []))
const series = computed(() => get(dash, 'data', []).map(item => ({ name: item.key, type: 'line', data: item.data })))
const line = computed(() => getLineOption(legend.value, axis.value, series.value))
function load(dateA: string, dateB: string, type: string, subscribe = false) {
  getDashboard({ dateA, dateB, payType: type, subscribeType: Number(subscribe) }).then((res) => {
    dash = res.data
  })
}

function formatDate(date: Date) {
  return dayjs(date).format('YYYY-MM-DD')
}

watchEffect(() => load(formatDate(state.target), formatDate(state.current), props.type, props.subscribe))
</script>

<template>
  <div class="text-center text-base flex items-center justify-center h-10 leading-10 mb-8">
    <span>{{ title }}</span>
  </div>
  <div class="px-5 mb-5">
    <el-date-picker v-model="state.current" style="width: 200px;" />
    <el-date-picker v-model="state.target" style="width: 200px; margin-left: 10px;" />
  </div>
  <e-charts :option="line" height="450px" />
</template>

