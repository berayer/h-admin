<template>
  <n-button text class="w-full flex h-14 items-center justify-center whitespace-nowrap">
    <Icon name="file-icons:ansible-alt" :size="24" color="#2563eb" />
    <h2 v-if="!appStore.siderCollapse" class="pl-2 text-lg font-black text-blue-600">
      插件管理系统
    </h2>
  </n-button>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>
