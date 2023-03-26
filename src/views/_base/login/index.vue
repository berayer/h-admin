<script setup lang="ts">
import PhoneLogin from './components/PhoneLogin.vue'
import PwdLogin from './components/PwdLogin.vue'
import WxLogin from './components/WxLogin.vue'

type LoginModule = 'pwd' | 'phone' | 'wx'

interface Props {
  module?: LoginModule
}

const modules = {
  pwd: PwdLogin,
  phone: PhoneLogin,
  wx: WxLogin
}

const props = withDefaults(defineProps<Props>(), {
  module: 'pwd'
})

const activeModule = ref<LoginModule>()
const loginModule = computed(() => {
  return activeModule.value || props.module
})

function changeLoginModule(model: LoginModule) {
  activeModule.value = model
}
</script>

<template>
  <div class="h-full flex justify-center items-center bg-gray-100">
    <n-card class="w-96">
      <h2 class="text-center text-3xl text-blue-400">用户登陆</h2>
      <component :is="modules[loginModule]"></component>
      <div class="w-full flex justify-center">
        <n-space>
          <span>其他登陆方式:</span>
          <Icon
            name="ic:baseline-wechat"
            color="#16d36b"
            class="cursor-pointer"
            @click="changeLoginModule('wx')"
          />
          <Icon
            name="material-symbols:phone-android-outline"
            color="#60a5fa"
            class="cursor-pointer"
            @click="changeLoginModule('phone')"
          />
        </n-space>
      </div>
    </n-card>
  </div>
</template>
