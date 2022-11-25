<script setup>
const route = useRoute()
const router = useRouter()
const current = ref('')
const disabled = ref(false)
const links = [
  {
    link: '/',
    text: 'IOT',
  },
  {
    link: '/yi',
    text: 'YiHOME',
  },
  {
    link: '/dashboard',
    text: 'Dashboard',
  },
]
watch(() => route.path, (val) => {
  const item = links.find(item => item.link === val)
  if (item)
    current.value = item.text
}, { immediate: true })

function handleClick(item) {
  current.value = item.text
  disabled.value = true
  router.push(item.link)
  disabled.value = false
}
</script>

<template>
  <el-dropdown>
    <el-button class="min-w-25">
      {{ current }}
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in links" :key="item.text" :disabled="disabled" @click="handleClick(item)">
          {{ item.text }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
