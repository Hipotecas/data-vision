<script setup lang="ts">
import { registerMap } from 'echarts';
import './china.json';
import map from './map';
import worldMap from './world.json';
defineProps<{ height?: number | string; activeCountry: number ; activeCity: number }>()

registerMap('world', worldMap as any)
</script>

<template>
  <figure class="bg relative">
    <v-chart autoresize :option="map" :style="{ height: height || '160px' }" />
    <div class="absolute left-2 bottom-2">
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

