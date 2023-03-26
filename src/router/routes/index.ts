import type { RouteRecordRaw } from 'vue-router'

/**
 * 静态路由菜单
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/_base/login/index.vue'),
    props: (route) => ({
      module: route.query.t || 'pwd'
    })
  },
  {
    path: '/index',
    component: () => import('@/layout/MainLayout.vue')
  },
  {
    path: '/:path(.*)*',
    name: 'Other',
    redirect: (to) => {
      return { path: '/index', query: { url: to.path, query: JSON.stringify(to.query) } }
    }
  }
]
