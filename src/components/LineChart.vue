<script setup lang="ts">
import { getLineOption } from '~/utils/line';

const props = defineProps<{ title: string; legend: string[]; axis: any[]; series: any[] }>()
const line = computed(() => getLineOption(props.legend, props.axis, props.series))
</script>

<template>
  <div class="text-xl">
    {{ title }}
  </div>
  <e-charts :option="line" height="450px" />
</template>
