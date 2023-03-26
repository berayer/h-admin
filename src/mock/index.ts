import Mock from 'mockjs'
import './core'

export function setupMockjs(timeout: string) {
  console.log('成功加载mockjs...')
  Mock.setup({
    timeout
  })
}
