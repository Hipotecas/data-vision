<script>
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { defineComponent } from 'vue';
import VChart from 'vue-echarts';

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
]);

export default defineComponent({
  name: 'VEcharts',
  components: {
    VChart,
  },
  props: {
    option: Object,
    height: [Number, String],
  },
});
</script>

<template>
  <VChart :style="{ height: height || '160px' }" :option="option" autoresize />
</template>
