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
    <!-- 新鲜好物 -->
    <HomeNew/>
    <!-- 人气好物 -->
    <HomeHot/>
    <!-- 热门品牌 -->
    <HomeBrand/>
    <!-- 商品区域 -->
    <HomeProduct/>
    <!-- 最新专题 -->
    <HomeSpecial/>
  </div>
</template>

<script setup>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
</script>

<style scoped lang="less">

</style>
