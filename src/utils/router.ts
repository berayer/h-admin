import { router } from '@/router'

export function loadAsyncRoutes(menus: GlobalMenu[]) {
  const views = import.meta.glob('/src/views/**/index.vue')
  addRoutes(menus, views)
}

function addRoutes(menus: GlobalMenu[], views: Record<string, () => Promise<unknown>>) {
  console.log("123")
  for (const i in menus) {
    if (menus[i].children && menus[i].children!.length > 0) {
      addRoutes(menus[i].children!, views)
    } else {
      router.addRoute('MainLayout', {
        path: menus[i].path,
        component: views['/src/views' + menus[i].path + '/index.vue']
      })
    }
  }
}

export function getFirstPath(menus: GlobalMenu[]): string | undefined {
  console.log("123")
  for (const i in menus) {
    if (menus[i].children && menus[i].children!.length > 0) {
      return getFirstPath(menus[i].children!)
    } else {
      return menus[i].path
    }
  }
}
