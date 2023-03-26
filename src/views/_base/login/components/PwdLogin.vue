<script setup lang="ts">
import type { FormRules, FormItemRule, FormInst, InputInst } from 'naive-ui'
import { api_login } from '@/api'
import { useAppStore } from '@/store'
import { router } from '@/router'

const appStore = useAppStore()
const loginForm = reactive({
  username: '',
  password: '',
  rememberMe: false
})
const state = reactive({
  logining: false
})
const formRef = ref<FormInst>()
const usernameInput = ref<InputInst>()
// 表单验证规则
const rules: FormRules = {
  username: [
    { required: true, trigger: 'blur', message: '用户名不能为空' },
    {
      validator(rule: FormItemRule, value: string) {
        if (value && value != 'admin') {
          return new Error('用户名只能是admin')
        }
        return true
      },
      trigger: 'blur'
    }
  ],
  password: [{ required: true, trigger: ['input', 'blur'], message: '密码不能为空' }]
}
onMounted(() => {
  // 页面加载完成自动获取焦点
  usernameInput.value?.focus()
})
// 表单提交
function submit() {
  formRef.value?.validate((error) => {
    if (!error) {
      state.logining = true
      // 后台登陆获取token,后续表单建议加密
      api_login(loginForm)
        .then(() => {
          router.push('/index')
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          state.logining = false
        })
    }
  })
}
</script>

<template>
  <n-form ref="formRef" :rules="rules" :model="loginForm">
    <n-form-item label="用户名" path="username">
      <n-input
        ref="usernameInput"
        v-model:value="loginForm.username"
        placeholder="请输入用户名"
      ></n-input>
    </n-form-item>
    <n-form-item label="密码" path="password">
      <n-input
        v-model:value="loginForm.password"
        placeholder="请输入密码"
        type="password"
        @keyup.enter="submit()"
      ></n-input>
    </n-form-item>
    <n-form-item :show-label="false">
      <div class="flex justify-between w-full">
        <n-checkbox v-model:checked="loginForm.rememberMe">记住我?</n-checkbox>
        <n-button text> 忘记密码? </n-button>
      </div>
    </n-form-item>
    <n-form-item :show-label="false">
      <n-button :loading="state.logining" type="primary" class="w-full" @click="submit()"
        >登陆</n-button
      >
    </n-form-item>
  </n-form>
</template>
