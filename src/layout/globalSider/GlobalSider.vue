<script setup lang="ts">
import { useAppStore, useTabStore } from '@/store'
import type { MenuOption } from 'naive-ui'
import Icon from '@/components/Icon.vue'
import { useRoute } from 'vue-router'
import AppLogo from './AppLogo.vue'
import { router } from '@/router'

const appStore = useAppStore()
const tabStore = useTabStore()
const route = useRoute()

const menuOptions = (menus: GlobalMenu[]): MenuOption[] => {
  return menus.map((v) => {
    const item: MenuOption = {
      key: v.path,
      label: v.label,
      icon: () => h(Icon, { name: v.icon ? v.icon : 'material-symbols:menu' })
    }
    if (v.children) {
      item.children = menuOptions(v.children)
    }
    return item
  })
}
function handleUpdateValue(key: string) {
  router.push(key)
}
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed="appStore.siderCollapse"
    :collapsed-width="appStore.collapsedWidth"
    :width="appStore.siderWidth"
  >
    <AppLogo />
    <n-menu
      :indent="20"
      :options="menuOptions(tabStore.menus)"
      :collapsed-width="appStore.collapsedWidth"
      :collapsed="appStore.siderCollapse"
      :value="route.fullPath"
      :watch-props="['defaultExpandedKeys']"
      @update:value="handleUpdateValue"
    />
  </n-layout-sider>
</template>
