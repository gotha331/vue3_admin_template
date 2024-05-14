<template>
  <div>
    <h1>hahaha</h1>
    <h2>test</h2>
    <Test />
    <div>
      <el-button type="success" size="large">成功
      </el-button>
      <el-icon>
        <Lock />
      </el-icon>
    </div>

  </div>
</template>

<script setup lang="ts">
import Test from '@/test.vue'
import { Lock } from '@element-plus/icons-vue'
</script>


<style lang="scss" scoped></style>
