<template>
  <div>
    <h1>hahaha</h1>
    <h2>test</h2>
    <Test />
    <div>
      <el-button type="success" size="large">成功</el-button>
      <el-icon>
        <Lock />
      </el-icon>
    </div>
    <svg-icon name="user" color="pink" width="20px" height="20px"></svg-icon>
  </div>

  <router-view></router-view>
</template>

<script setup lang="ts">
import Test from '@/test.vue'
import { Lock } from '@element-plus/icons-vue'

import { onMounted } from 'vue'
import { reqLogin } from './api/user'

onMounted(() => {
  let data = {
    username: 'admin',
    password: '111111',
  }
  reqLogin(data)
})
</script>

<style lang="scss" scoped>
div {
  h1 {
    color: $base-color;
  }
}
</style>
