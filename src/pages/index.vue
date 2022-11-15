<script setup lang="ts">
import * as echarts from 'echarts';
import { fetchIot } from '~/api/iot';
import type { Types } from '~/api/types';
const data = reactive<Types>({
  countryTop: [],
  activeCountry: 0,
  activeCity: 0,
  factoryData: [],
  allActiveCam: 0,
  newCam: 0,
  activeCam: 0,
  aliveVideo: [],
})
onMounted(() => {
  fetchIot().then((res) => {
    data.countryTop = res.countryTop
    data.activeCam = res.activeCam
    data.activeCamRegion = res.activeCamRegion
    data.activeCity = res.activeCity
    data.activeCountry = res.activeCountry
    data.aliveVideo = res.aliveVideo
    data.cloudCam = res.cloudCam
    data.cloudCamRegion = res.cloudCamRegion
    data.cloudSave = res.cloudSave
    data.cloudSaveToday = res.cloudSaveToday
    data.cn_newCam30Iot = res.cn_newCam30Iot
    data.factoryData = res.factoryData
    data.newCam = res.newCam
    data.allActiveCam = res.allActiveCam
    data.allActiveCamRegion = res.allActiveCamRegion
  })
})

const line1 = computed(() => ({
  title: { text: '' },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(64, 98, 235,0.7)',
      },
    },
  },
  grid: {
    top: '10%',
    left: '0',
    right: '20px',
    bottom: '0%',
    containLabel: true,
  },
  toolbox: {
    show: false,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      nameLocation: 'start',
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(59,67,115,0.5)',
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(59,67,115,0.5)',
        },
      },
      axisLabel: {
        color: '#a0a8d6',
      },
      axisPointer: {
        type: 'line',
        color: '#fff',
      },
      data: ['1', '2', '3', '4', '5', '6', '7'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#a0a8d6',
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(59,67,115,0.5)',
        },
      },
    },
  ],

  series: [
    {
      name: '激活量',
      type: 'line',
      smooth: true,
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'top',
        },
      },
      lineStyle: {
        color: 'rgba(64, 98, 235,0.8)',
        width: '0',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(64, 98, 235,0.8)',
          },
          {
            offset: 1,
            color: 'rgba(255, 255, 255,0)',
          },
        ]),
      },
      data: data.aliveVideo,
    },
  ],
}))
</script>

<template>
  <div class="h-full overflow-hidden bg-black flex text-light-500 flex-col">
    <div class="text-3xl text-center grid  items-center h-1/6">
      <span>IOT</span>
    </div>
    <section class="flex h-1/2 mr-4 mb-4s">
      <div class="flex flex-col px-4 w-80">
        <OnlineAmout title="全球设备在线数量(Top 20)" :list="data.countryTop" />
        <div>
          <span class="text-base h-10 leading-10">激活量实时分布图</span>
          <OnlineMap class="flex-1" :active-city="data.activeCity" :active-country="data.activeCountry" />
        </div>
      </div>
      <div class="flex flex-col mx-4 flex-1">
        <Daily />
      </div>
      <div class="flex flex-col mx-4 flex-1">
        <Factory :factory-data="data.factoryData" />
      </div>
      <div class="flex-grow flex-1">
        <div>
          <div class="h-10 leading-10">
            总激活量(台)
          </div>
          <el-popover placement="left" trigger="click">
            <template #reference>
              <Numbers :num="data.allActiveCam.toString()" :max="8" />
            </template>
            <div class="w-30">
              <div v-for="(item, index) in data.allActiveCamRegion" :key="index" class="flex items-center justify-between">
                <span>{{ item.totalRegion }}</span>
                <span>{{ item.totalNum }}</span>
              </div>
            </div>
          </el-popover>
        </div>
        <div class="my-5">
          <div class="h-10 leading-10">
            设备当前在线数(台)
          </div>
          <Numbers :num="data.activeCam.toString()" :max="8" />
        </div>
        <div>
          <div class="h-10 leading-10">
            今日激活量(台)
          </div>
          <Numbers :num="data.newCam.toString()" :max="8" />
        </div>
      </div>
    </section>
    <div class="h-1/3 grid grid-cols-[1fr,300px,1fr,1fr]">
      <div class="  items-center mr-4">
        <div class="p-4">
          <div>近一个月工厂生产设备数(台/号)</div>
          <e-charts :chart-option="line1" />
        </div>
      </div>
      <div class=" items-center mr-4">
        <div class="p-4">
          <div>近七天激活量趋势(台/号)</div>
          <e-charts :chart-option="line1" />
        </div>
      </div>
      <div class=" items-center mr-4">
        <div class="p-4">
          <div>近一个月激活量趋势(台/号)</div>
          <e-charts :chart-option="line1" />
        </div>
      </div>
      <div class=" items-center">
        <div class="p-4">
          <div>一年以上激活量趋势(台)</div>
          <e-charts :chart-option="line1" />
        </div>
      </div>
    </div>
  </div>
</template>
