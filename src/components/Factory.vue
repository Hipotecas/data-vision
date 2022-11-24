<script setup lang="ts">
import type { FactoryReport } from '~/api/types';

defineProps<{ factoryData: FactoryReport[] }>()
</script>

<template>
  <div class="h-10 leading-10 flex items-center">
    <span class="text-base mr-4">厂商数据统计</span>
  </div>
  <div class="flex flex-1">
    <el-table :data="factoryData" style="width: 100%; max-width: 700px;" max-height="400">
      <el-table-column label="厂商" prop="factoryName" fixed width="150" />
      <el-table-column label="总激活" prop="totalActivate" width="120" />
      <el-table-column label="今日激活" prop="todayActivate" />
      <el-table-column label="当前在线" prop="online" />
      <el-table-column label="工厂累计生产" prop="todayProduct" width="120" />
      <el-table-column label="工厂今日生产" prop="todayProduct" width="120" />
      <el-table-column label="工厂7日生产" prop="lastSevenDayProduct" width="120" />
      <el-table-column label="工厂7日激活" prop="lastSevenDayActivate" width="120" />
      <el-table-column label="工厂30天生产" prop="lastThirtyProduct" width="120" />
      <el-table-column label="工厂30天激活" prop="lastThirtyDayActivate" width="120" />
    </el-table>
  </div>
  <div v-if="false" class="flex-1 overflow-hidden flex flex-col">
    <div class="font-semibold text-white py-2 flex justify-around text-sm overflow-x-auto">
      <div class="flex-1">
        <span class="w-full">厂商</span>
        <span class="w-full">总激活</span>
        <span class="w-full">今日激活</span>
        <span class="w-full">当前在线</span>
        <span class="w-full">工厂累计生产</span>
        <span class="w-full">工厂今日生产</span>
        <span class="w-full">工厂7日生产</span>
        <span class="w-full">工厂7日激活</span>
        <span class="w-full">工厂30天生产</span>
        <span class="w-full">工厂30天激活</span>
      </div>
    </div>
    <div class="flex-1 overflow-scroll">
      <div v-for="(item, index) in factoryData" :key="index" class="py-2 justify-around text-night text-base flex items-center">
        <span class="w-full"> {{ item.factoryName }} </span>
        <span class="w-full">{{ item.totalActivate }} </span>
        <span class="w-full">{{ item.todayActivate }} </span>
        <span class="w-full"> {{ item.online }}</span>
        <span class="w-full"> {{ item.totalProduct }}</span>
        <span class="w-full"> {{ item.todayProduct }}</span>
        <span class="w-full"> {{ item.lastSevenDayProduct }}</span>
        <span class="w-full"> {{ item.lastSevenDayActivate }}</span>
        <span class="w-full"> {{ item.lastThirtyProduct }}</span>
        <span class="w-full"> {{ item.lastThirtyDayActivate }}</span>
      </div>
    </div>
  </div>
</template>
