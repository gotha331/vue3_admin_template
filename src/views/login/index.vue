<template>
  <el-col :span="12" :xs="0"></el-col>
  <el-col :span="12" :xs="24">
    <el-form :model="loginForm" :rules="rules" ref="loginForms">
      <h1>欢迎来到vue3后台管理系统</h1>
      <el-form-item prop="username">
        <el-input :prefix-icon="User" v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :prefix-icon="Lock"
          type="password"
          show-password
          v-model="loginForm.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="login">
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElButton, ElNotification } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'

let loginForms = ref()
let loading = ref(false)
let useStore = useUserStore()
let $router = useRouter()

// 收集账号与密码数据
let loginForm = reactive({ username: '', password: '' })

const login = async () => {
  //保证全部表单校验通过再发送请求
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push('/')

    ElNotification({
      type: 'success',
      message: '登陆成功',
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

// 表单校验规则
const rules = {
  username: [
    {
      required: true,
      min: 5,
      max: 10,
      message: '账号长度最少5位',
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 10,
      message: '密码长度最少6位',
      trigger: 'change',
    },
  ],
}
</script>

<style lang="scss" scoped></style>
