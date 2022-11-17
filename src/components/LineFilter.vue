<script setup lang="ts">
import dayjs from 'dayjs';
import { getLineOption } from '~/utils/line';

defineProps<{
  title?: string
  type?: string
}>()
const state = reactive({
  current: new Date(),
  target: dayjs().subtract(1, 'day').toDate(),
})
const legend = $ref(['今日', '昨日'])
const axis = $ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const series = $ref([{ name: '今日', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] }, { name: '昨日', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }])
const line = getLineOption(legend, axis, series)

onMounted(() => {})
</script>

<template>
  <div class="text-center text-base">
    <span>{{ title }}</span>
  </div>
  <div class="px-5">
    <el-date-picker v-model="state.current" style="width: 200px;" />
    <el-date-picker v-model="state.target" style="width: 200px; margin-left: 10px;" />
  </div>
  <e-charts :option="line" height="450px" />
</template>

