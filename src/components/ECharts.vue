<script>
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { defineComponent } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';

use([
  SVGRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

export default defineComponent({
  name: 'VEcharts',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'dark',
  },
  props: {
    option: Object,
    height: [Number, String],
  },
});
</script>

<template>
  <VChart :style="{ height: height || '160px' }" renderer="svg" :option="option" autoresize />
</template>
