<script setup lang="ts">
defineProps<{ height?: number | string; activeCountry: number ; activeCity: number }>()
</script>

<template>
  <figure class="relative">
    <div class="map-bg" :style="{ height: height || '160px' }" />
    <div class="absolute left-4 bottom-4">
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
  .map-bg {
    background-image: url('../assets/echarts.png');
    background-size: 100% 100%;
  }
</style>
