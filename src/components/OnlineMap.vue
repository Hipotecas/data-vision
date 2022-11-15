<script>
import {
BarChart, EffectScatterChart, LineChart, LinesChart, MapChart, PieChart, RadarChart,
ScatterChart
} from 'echarts/charts'
import { DatasetComponent, DataZoomComponent, GeoComponent, GridComponent, LegendComponent, PolarComponent, TitleComponent, ToolboxComponent, TooltipComponent, VisualMapComponent } from 'echarts/components'
import { registerMap, use } from 'echarts/core'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'
// import "echarts-liquidfill";
// import logo from "./data/logo";
import VChart from './ECharts.vue'
import map from './map'

// custom theme

// Map of China
import chinaMap from './china.json'
import worldMap from './world.json'

use([
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  ScatterChart,
  EffectScatterChart,
  LinesChart,
  GridComponent,
  PolarComponent,
  GeoComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  CanvasRenderer,
  SVGRenderer,
  ToolboxComponent,
  DataZoomComponent,
])

// registering map data
registerMap('china', chinaMap)
registerMap('world', worldMap)

// registering custom theme

export default {
  name: 'VueEchartsDemo',
  components: {
    VChart,
  },
  props: ['activeCountry', 'activeCity'],
  data() {
    const options = {}
    return {
      options,
      map,
      expand: {
        bar: true,
        pie: true,
        polar: true,
        scatter: true,
        map: true,
        radar: true,
        connect: true,
        flight: true,
      },
      initOptions: {
        renderer: options.renderer || 'canvas',
      },
    }
  },
  mounted() {
    // this.startActions()
  },
  beforeUnmount() {
    // this.stopActions()
  },
  methods: {
    handleClick(...args) {
      // console.log('click from echarts', ...args)
    },
    handleZrClick(...args) {
      // console.log('click from zrender', ...args)
    },
    refresh() {
      // simulating async data from server
      this.seconds = 3
      this.barLoading = true
      const timer = setInterval(() => {
        this.seconds--
        if (this.seconds === 0) {
          clearTimeout(timer)
          this.barLoading = false
          this.bar = getBar()
        }
      }, 1000)
    },
    toggleRenderer() {
      if (this.initOptions.renderer === 'canvas')
        this.initOptions.renderer = 'svg'
      else
        this.initOptions.renderer = 'canvas'
    },
    convert() {
      const map = this.$refs.map
      this.img = {
        src: map.getDataURL({
          pixelRatio: window.devicePixelRatio || 1,
        }),
        width: map.getWidth(),
        height: map.getHeight(),
      }
      this.open = true
    },
    loadFlights() {
      this.flightLoaded = true
      this.flightLoading = true
    },
    startActions() {
      let dataIndex = -1
      const pie = this.$refs.pie

      if (!pie)
        return

      const dataLen = pie.option.series[0].data.length

      this.actionTimer = setInterval(() => {
        pie.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex,
        })
        dataIndex = (dataIndex + 1) % dataLen
        pie.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex,
        })
        // 显示 tooltip
        pie.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex,
        })
      }, 1000)
    },
    stopActions() {
      clearInterval(this.actionTimer)
    },
  },
}
</script>

<template>
  <figure class="bg relative">
    <VChart
      ref="map"
      :chart-option="map"
      autoresize
      height="160px"
    />
    <div class="absolute left-0 bottom-0">
      <div class="text-xs">
        国家和地区：{{ activeCountry }}
      </div>
      <div class="text-xs">
        城市：{{ activeCity }}
      </div>
    </div>
  </figure>
</template>

<style>

</style>

