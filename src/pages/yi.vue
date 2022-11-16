<script setup>
import { fetchYi } from '~/api/iot';

import { getLine } from '~/utils';
import { defaultYiLine } from '~/utils/line';
let data = $ref(defaultYiLine)
const { resume, pause } = useIntervalFn(load, 10000)
onMounted(() => {
  fetchYi().then((res) => {
    data = res
  })
  resume()
})
onUnmounted(() => {
  pause()
})
function load() {
  fetchYi().then((res) => {
    data = res
  })
}

const line1 = computed(() => getLine('激活量', data.factoryDate, data.factoryEquipmentNum))
const line2 = computed(() => getLine('激活量', data.factoryDate_Week, data.factoryEquipmentNum_Week))
const line3 = computed(() => getLine('激活量', data.factoryDate_Month, data.factoryEquipmentNum_Month))
</script>

<template>
  <div class="h-full overflow-hidden bg-black flex text-light-500 flex-col">
    <div class="text-3xl text-center grid  items-center h-1/6">
      <span>YiHome Real-Time Dashboard</span>
      <div class="absolute right-4">
        <DropdownMenu />
      </div>
    </div>
    <section class="flex h-1/2 mr-4 mb-4s">
      <div class="flex flex-col px-4 w-80">
        <OnlineAmout title="全球设备在线数量(Top 20)" :list="data.countryTop" />
      </div>
      <div class="flex flex-col mx-4 flex-1">
        <Daily />
      </div>
      <div class="flex flex-col mx-4 flex-1">
        <div>
          <span class="text-base h-10 leading-10">激活量实时分布图</span>
          <OnlineMap class="flex-1" height="300px" :active-city="data.activeCity" :active-country="data.activeCountry" />
        </div>
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
    <div class="hidden h-1/3 grid grid-cols-[1fr,300px,1fr,1fr]">
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
          <e-charts :chart-option="line2" />
        </div>
      </div>
      <div class=" items-center">
        <div class="p-4">
          <div>一年以上激活量趋势(台)</div>
          <e-charts :chart-option="line3" />
        </div>
      </div>
    </div>
  </div>
</template>
