<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo"><RouterLink to="/">#Slact</RouterLink>
      </h1>
      <!-- 抽离成组件 -->
      <appHeaderNav/>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索">
      </div>
      <div class="cart">
        <a href="#" class="curr">
          <i class="iconfont icon-cart"><em>2</em></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import appHeaderNav from '@/components/app-header-nav.vue'
</script>

<style scoped lang="less">
.app-header {
  background-color: #fff;
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        font-size: 0px;
        background: url('../assets/images/logo.jpg') no-repeat center 18px / contain;
        border-radius: 35%;
      }
    }
    .search {
      width: 170px;
      height: 32px;
      position: relative;
      line-height: 32px;
      border-bottom: 1px solid #e7e7e7;
      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }
      input {
        width: 140px;
        padding-left: 10px;
        color: #666;
      }
    }
    .cart {
      width: 50px;
      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;
      }
      .icon-cart {
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: @helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
