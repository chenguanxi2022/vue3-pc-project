<template>
  <!-- 查看全部 > 组件 -->
  <RouterLink :to="path" class="slack-more">
    <span>查看全部</span>
    <i class="iconfont icon-angle-right"></i>
  </RouterLink>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    default: '/'
  }
})
</script>

<style scoped lang='less'>
.slack-more {
  margin-bottom: 2px;
  span {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 4px;
    color: #999;
  }
  i {
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    top: 2px;
    color: #ccc;
  }
  &:hover {
    span,i {
      color: @warnColor;
    }
  }
}
</style>
