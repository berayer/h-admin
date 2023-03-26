import Mock from 'mockjs'

Mock.mock('/v2/index', 'get', {
  code: 200,
  msg: '',
  data: {
    userInfo: {
      username: 'admin',
      nickName: '马飞飞',
      avatar: 'https://img2.woyaogexing.com/2023/03/25/2c702e7bd0e6015aed57d47ebc41d2d8.jpg'
    },
    userMenu: [
      {
        id: 1,
        path: '/dashBoard',
        label: 'DashBoard',
        icon: 'ri:dashboard-3-line',
        children: [
          {
            id: 1,
            path: '/dashBoard/workBench',
            label: '工作台',
            icon: 'icon-park-outline:workbench'
          },
          {
            id: 1,
            path: '/dashBoard/console',
            label: '控制台',
            icon: 'mdi:console'
          }
        ]
      },

      {
        id: 1,
        path: '/system',
        label: '系统管理',
        icon: 'ep:setting',
        children: [
          {
            id: 1,
            path: '/system/user',
            label: '用户管理',
            icon: 'ph:user-circle'
          },
          {
            id: 1,
            path: '/system/role',
            label: '角色管理',
            icon: 'ph:users'
          },
          {
            id: 1,
            path: '/system/menu',
            label: '菜单管理',
            icon: 'gridicons:menus'
          }
        ]
      },
      {
        id: 1,
        path: '/about',
        label: '关于',
        icon: 'mdi:about-circle-outline'
      }
    ]
  }
})

Mock.mock('/v2/login', 'post', {
  code: 200,
  msg: '',
  data: '@guid()'
})
