<template>
<!-- 顶部通栏 -->
<nav>
  <appTopnav />
</nav>
<!-- 头部组件 -->
<header>
  <appHeader />
  <appHeaderSticky/>
</header>
<!-- 内容容器 -->
<main>
  <!-- 二级路由 -->
  <router-view></router-view>
</main>
<!-- 底部组件 -->
<footer>
  <appFooter></appFooter>
</footer>
</template>

<script setup>
import { useStore } from 'vuex'
import appTopnav from '@/components/app-topnav.vue'
import appHeader from '@/components/app-header.vue'
import appFooter from '@/components/app-footer.vue'
import appHeaderSticky from '@/components/app-header-sticky.vue'
const store = useStore()
store.dispatch('category/getList')
</script>

<style scoped>

</style>
