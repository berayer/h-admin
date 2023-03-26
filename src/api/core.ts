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
 * 登陆之后首页获取用户菜单和用户信息接口
 */
export function api_index() {
  return http({
    url: '/index'
  })
}
