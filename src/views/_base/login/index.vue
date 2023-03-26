<script setup lang="ts">
import PhoneLogin from './components/PhoneLogin.vue'
import PwdLogin from './components/PwdLogin.vue'
import WxLogin from './components/WxLogin.vue'

interface Props {
  module?: 'pwd' | 'phone' | 'wx'
}

const modules = {
  pwd: PwdLogin,
  phone: PhoneLogin,
  wx: WxLogin
}

const props = withDefaults(defineProps<Props>(), {
  module: 'pwd'
})

onMounted(() => {
  console.log(props)
})
</script>

<template>
  <div class="text-3xl text-red-900">
    登陆
    <div>
      <component :is="modules[module]"></component>
    </div>
  </div>
</template>
