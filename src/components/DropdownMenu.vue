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
    <span class="el-dropdown-link bg-white h-8 leading-8 px-4 rounded-sm">
      {{ current }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in links" :key="item.text" :disabled="disabled" @click="handleClick(item)">
          {{ item.text }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
