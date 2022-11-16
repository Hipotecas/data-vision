<script setup lang="ts">
const props = defineProps<{ num: string; max: number }>()
const list = ref<string[]>([])
watch(() => props.num, (val) => {
  if (val)
    list.value = val.padStart(props.max || props.num.length, '?').split('')
}, { immediate: true })
</script>

<template>
  <ul class="flex bg-hex-0d1d3d p-4 w-full">
    <li v-for="(_, index) in max" :key="_" class="mr-3 w-10 h-14 relative">
      <Transition :name="index % 2 ? 'slide-fade' : 'slide-fade1'">
        <span :key="list[index]" class="absolute block text-center w-10 h-14 leading-14 " :class="list[index] !== '?' ? 'bg-hex-61adee' : 'bg-hex-6378a3'">
          {{ list[index] !== '?' ? list[index] : '' }}
        </span>
      </Transition>
    </li>
  </ul>
</template>

<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade1-enter-active {
  transition: all 1s ease;
}

.slide-fade1-leave-active {
  transition: all 1s ease;
}

.slide-fade-enter-active {
  transition: all 1s ease;
  transition-delay: 0.3s;
}

.slide-fade-leave-active {
  transition: all 1s ease;
  transition-delay: 0.3s;
}

.slide-fade-leave-to,
.slide-fade1-enter-from {
  transform: translateY(3.75rem);
  opacity: 0;
}

.slide-fade-enter-from,
.slide-fade1-leave-to {
  transform: translateY(-3.75rem);
  opacity: 0;
}
</style>
