<template>
  <!-- 修改数据。测试是否持久化 -->
  <div>
    App{{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account:'zhousg'})">设置用户信息</button>
  </div>
</template>

<script setup>
import { } from 'vue'

</script>

<style scoped></style>
