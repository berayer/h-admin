<script setup lang="ts">
import GlobalSider from './globalSider/GlobalSider.vue'
import GlobalHeader from './globalHeader/GlobalHeader.vue'
import GlobalContent from './globalContent/GlobalContent.vue'
import { api_index } from '@/api'

api_index().then((res) => {
  console.log(res)
})
</script>

<template>
  <n-layout has-sider class="h-full">
    <GlobalSider />
    <n-layout>
      <GlobalHeader />
      <GlobalContent />
    </n-layout>
  </n-layout>
</template>
