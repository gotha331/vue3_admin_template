<template>
  <svg style="width: 30px; height: 30px">
    <use
      :xlink:href="prefix + 'user'"
      :fill="color"
      :width="width"
      :height="height"
    ></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  // xlink:href属性前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  //提供使用的图标名字
  name: String,
  //接受父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  //接受父组件传递过来的图标的宽度
  width: {
    type: String,
    default: '16px',
  },
  //接受父组件传递过来的图标的高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="scss" scoped></style>
