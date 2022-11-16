<script setup lang="ts">
import { getLineOption } from '~/utils/line';
defineProps<{
  title?: string
}>()
const state = reactive({
  current: new Date(),
  target: '',
})
const legend = $ref(['今日', '昨日'])
const axis = $ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const series = $ref([{ name: '今日', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] }, { name: '昨日', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }])
const line = getLineOption(legend, axis, series)
</script>

<template>
  <div>
    <span>{{ title }}</span>
  </div>
  <div>
    <el-date-picker v-model="state.current" />
    <el-date-picker v-model="state.target" />
  </div>
  <v-chart :option="line" autoresize style="height:450px" />
</template>

