<template>
  <div>
    App
    <button @click="fn">测试request工具函数</button>
  </div>
</template>

<script setup>
import request from '@/utils/request'
const fn = () => {
  request('/member/profile', 'get', { a: 10 })
}
</script>

<style scoped></style>
