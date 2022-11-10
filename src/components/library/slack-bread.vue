<template>
  <div class='slack-bread'>
    <div class="slack-bread-item">
      <RouterLink to="/">首页</RouterLink>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="slack-bread-item" v-if="parentName">
      <RouterLink v-if="parentPath" :to="parentPath">{{parentName}}</RouterLink>
      <span v-else>{{parentName}}</span>
    </div>
    <i v-if="parentName" class="iconfont icon-angle-right"></i>
    <div class="slack-bread-item">
      <span><slot/></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  parentName: {
    type: String,
    default: ''
  },
  parentPath: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang='less'>
.slack-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all .4s;
      &:hover {
        color: @warnColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
