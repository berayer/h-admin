/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '@/utils/http'

/** 登陆接口 */
export function api_login(data: any) {
  return http({
    url: '/login',
    method: 'post',
    data: data
  })
}

/**
 * 获取用户菜单
 */
export function api_userMenus() {
  return http({
    url: '/menu'
  })
}
