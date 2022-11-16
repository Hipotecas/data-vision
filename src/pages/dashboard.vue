<template>
  <div class="h-max  bg-black flex text-light-500 flex-col">
    <div class="text-3xl text-center grid  items-center h-30 relative">
      <span>IOT Real-Time Dashboard</span>
      <div class="absolute right-4">
        <DropdownMenu />
      </div>
    </div>
    <div class="flex-1">
      <div class="px-10">
        <DashboardList title="每日续费订单量及收入" />
        <DashboardList title="新建订单当天累计订单" />
        <DashboardList title="每日续费订单量及收入" />
      </div>
      <div class="px-10 flex flex-col mt-10">
        <div class="grid w-full current-grid gap-5">
          <div>
            <LineChart
              title="广告开屏请求次数"
              :legend="[]"
              :axis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
              :series="[{ name: 'Email', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] }, { name: 'Union Ads', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }]"
            />
          </div>
          <div>
            <LineChart
              title="广告开屏请求次数"
              :legend="[]"
              :axis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
              :series="[{ name: 'Email', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] }, { name: 'Union Ads', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }]"
            />
          </div>
          <div>
            <LineChart
              title="广告开屏请求次数"
              :legend="[]"
              :axis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
              :series="[{ name: 'Email', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] }, { name: 'Union Ads', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }]"
            />
          </div>
        </div>
        <div class="grid w-full gap-5 grid-cols-2">
          <div><LineFilter /></div>
          <div><LineFilter /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.current-grid {
  grid-template-columns: repeat(3, 33.33%);
}
</style>
