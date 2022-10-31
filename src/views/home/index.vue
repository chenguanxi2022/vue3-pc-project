<template>
  <div class="page-home">
    <!-- 首页入口 -->
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory/>
        <!-- 右侧轮播图 -->
        <HomeBanner/>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeCategory from '@/views/home/components/home-category.vue'
import HomeBanner from '@/views/home/components/home-banner.vue'
</script>

<style scoped lang="less">

</style>
