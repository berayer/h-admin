import Mock from 'mockjs'

Mock.mock('/v2/index', 'get', {
  code: 200,
  msg: '',
  data: 'ok'
})
