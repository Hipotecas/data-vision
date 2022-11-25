<script setup lang="ts">
import type { FactoryReport } from '~/api/types';
import { formatNumber } from '~/utils/format';

defineProps<{ factoryData: FactoryReport[] }>()
function formatter(row: any, column: any, cell: any) {
  return formatNumber(cell)
}
</script>

<template>
  <div class="h-10 leading-10 flex items-center">
    <span class="text-base mr-4">厂商数据统计</span>
  </div>
  <div class="flex flex-shrink">
    <el-table :data="factoryData" max-height="400">
      <el-table-column label="厂商" prop="factoryName" fixed width="150" />
      <el-table-column label="总激活" prop="totalActivate" width="120" :formatter="formatter" />
      <el-table-column label="今日激活" prop="todayActivate" width="120" :formatter="formatter" />
      <el-table-column label="当前在线" prop="online" width="120" :formatter="formatter" />
      <el-table-column label="工厂累计生产" prop="todayProduct" width="120" :formatter="formatter" />
      <el-table-column label="工厂今日生产" prop="todayProduct" width="120" :formatter="formatter" />
      <el-table-column label="工厂7日生产" prop="lastSevenDayProduct" width="120" :formatter="formatter" />
      <el-table-column label="工厂7日激活" prop="lastSevenDayActivate" width="120" :formatter="formatter" />
      <el-table-column label="工厂30天生产" prop="lastThirtyProduct" width="120" :formatter="formatter" />
      <el-table-column label="工厂30天激活" prop="lastThirtyDayActivate" width="120" :formatter="formatter" />
    </el-table>
  </div>
</template>
