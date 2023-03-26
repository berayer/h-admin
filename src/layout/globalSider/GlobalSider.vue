<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>

<template>
  <n-layout-sider :width="appStore.siderWidth"> 海淀桥 </n-layout-sider>
</template>
