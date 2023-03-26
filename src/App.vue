<script setup lang="ts">
import { NConfigProvider, zhCN } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

// 主题配置
const themeOverrides: GlobalThemeOverrides = {
  Layout: {
    color: '#f3f3f3'
  },
  Menu: {
    borderRadius: '16px'
  },
  Card: {
    borderRadius: '16px'
  }
}
</script>

<template>
  <n-config-provider :locale="zhCN" :theme-overrides="themeOverrides" class="h-full">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>
