<script setup lang="ts">
import { queryIot } from '~/api/iot';
import type { Data } from '~/api/types';
import { getLine } from '~/utils';
import { defaultLine } from '~/utils/line';

const { resume, pause } = useIntervalFn(load, 60000)
let data = $ref<Data>(defaultLine)

onMounted(() => {
  load()
  resume()
})
onUnmounted(() => {
  pause()
})
function load() {
  queryIot().then((res) => {
    data = res.data
  })
}
const line1 = computed(() => getLine('激活量', data.monthActivate.date, data.monthActivate.data, data.monthActivate.extras))
const line2 = computed(() => getLine('激活量', data.monthProduct.date, data.monthProduct.data, data.monthProduct.extras))
const line3 = computed(() => getLine('激活量', data.yearActivate.date, data.yearActivate.data, data.yearActivate.extras))
</script>

<template>
  <div class="h-full overflow-hidden bg-black flex text-light-500 flex-col">
    <div class="text-3xl text-center grid  items-center h-1/6 relative">
      <span>IOT Real-Time Dashboard</span>
      <div class="absolute right-4">
        <DropdownMenu />
      </div>
    </div>

    <section class="flex h-1/2 mr-4 mb-4s">
      <div class="flex flex-col px-4 w-80">
        <OnlineAmout title="全球设备在线数量(Top 20)" :list="data.onlineEquipment" />
        <div>
          <span class="text-base h-10 leading-10">激活量实时分布图</span>
          <OnlineMap class="flex-1" :active-city="data.activateCountry" :active-country="data.activateProvince" />
        </div>
      </div>
      <div class="flex flex-col mx-4 w-90">
        <Daily :data="data.todayReport" />
      </div>
      <div class="flex flex-col mx-4 flex-1 flex-shrink">
        <Factory :factory-data="data.factoryReports" />
      </div>
      <div class="flex-shrink flex-1">
        <div>
          <div class="h-10 leading-10">
            当日烧录量(台)
          </div>
          <Numbers :num="(data.todayProduct || 0).toString()" :max="8" />
        </div>
        <div class="my-5">
          <div class="h-10 leading-10">
            累计生产量(台)
          </div>
          <Numbers :num="(data.totalProduct || 0).toString()" :max="8" />
        </div>
        <div>
          <div class="h-10 leading-10">
            累计激活量(台)
          </div>
          <Numbers :num="(data.totalActivate || 0).toString()" :max="8" />
        </div>
      </div>
    </section>
    <div class="h-1/3 grid grid-cols-3">
      <div class="  items-center mr-4">
        <div class="p-4">
          <div>近一个月工厂生产设备数(台/号)</div>
          <e-charts :option="line1" height="200px" />
        </div>
      </div>
      <div class=" items-center mr-4">
        <div class="p-4">
          <div>近一个月激活量趋势(台/号)</div>
          <e-charts :option="line2" height="200px" />
        </div>
      </div>
      <div class=" items-center">
        <div class="p-4">
          <div>一年以上激活量趋势(台)</div>
          <e-charts :option="line3" height="200px" />
        </div>
      </div>
    </div>
  </div>
</template>
