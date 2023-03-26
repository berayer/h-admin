<script setup lang="ts">
import GlobalSider from './globalSider/GlobalSider.vue'
import GlobalHeader from './globalHeader/GlobalHeader.vue'
import GlobalContent from './globalContent/GlobalContent.vue'
import { api_userMenus } from '@/api'
import { useTabStore } from '@/store'
import { loadAsyncRoutes, getFirstPath } from '@/utils/router'
import { router } from '@/router'
import { useRoute } from 'vue-router'

const tabStore = useTabStore()
const route = useRoute()

api_userMenus()
  .then((res) => {
    console.log(res)
    loadAsyncRoutes(res.data)
    tabStore.menus = res.data
    removeAllPatch()
    const is = ohterSkip()
    // 访问主页跳转第一个路由
    if (!is && tabStore.menus && tabStore.menus.length > 0) {
      const path = getFirstPath(tabStore.menus) || '/404'
      router.push(path)
    }
  })
  .catch((err) => {
    console.log(err)
  })

// 移除全路径匹配导向404
function removeAllPatch() {
  router.removeRoute('Other')
  router.addRoute({
    path: '/:path(.*)*',
    name: 'Other',
    redirect: '/404'
  })
}

function ohterSkip(): boolean {
  if (route.query && route.query.url && route.query.url != '/index') {
    // 检查路径是否有权限
    const routers = router.getRoutes()
    const one = routers.find(({ path }) => {
      console.log('123')
      return route.query.url == path
    })
    if (one) {
      let query = JSON.parse(route.query.query as string)
      router.push({
        path: route.query.url as string,
        query: Object.keys(query).length ? query : {}
      })
    } else {
      router.push({ path: '/404', replace: true })
    }
    return true
  }
  return false
}
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
