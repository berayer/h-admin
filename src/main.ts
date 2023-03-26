import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupMockjs } from './mock'
// 静态资源引入
import './style/tailwind.css'
import 'vfonts/Lato.css'

async function setupApp() {
  const app = createApp(App)
  setupStore(app)
  setupMockjs('100-2000')
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
