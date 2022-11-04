<template>
  <div class='slack-panel'>
    <div class="container">
      <div class="head">
        <h3>{{title}}<small>{{subTitle}}</small></h3>
        <!-- 右上角插槽 -->
        <slot name="right"/>
      </div>
      <!-- 默认插槽 -->
      <slot/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang='less'>
.slack-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex:1;
      font-size: 32px;
      font-weight: normal;
      height: 35px;
      line-height: 35px;
      margin-left: 6px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
