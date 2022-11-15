<script>
import * as echarts from 'echarts/core'

export default {
  name: 'VChart',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '250px',
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartOption: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'canvas',
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    chartOption: {
      deep: true,
      handler(newVal) {
        this.setOptions(newVal)
      },
    },
  },
  mounted() {
    this.initChart()
    if (this.autoResize)
      window.addEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      this.chart.resize()
    },
    initChart() {
      this.chart = echarts.init(this.$refs.chart, '', {
        renderer: this.type,
      })
      this.chart.setOption(this.chartOption)
      this.chart.on('click', this.handleClick)
    },
    handleClick(params) {
      this.$emit('click', params)
    },
    setOptions(option) {
      this.clearChart()
      this.resizeHandler()
      if (this.chart)
        this.chart.setOption(option)
    },
    refresh() {
      if (this.chartOption)
        this.setOptions(this.chartOption)
    },
    clearChart() {
      this.chart && this.chart.clear()
    },
  },
}
</script>

<template>
  <div class="w-full">
    <div ref="chart" :style="{ width, height }" class="" />
  </div>
</template>

