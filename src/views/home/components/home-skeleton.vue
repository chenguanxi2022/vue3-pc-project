<template>
  <div class='home-skeleton'>
    <div class="item" v-for="i in 4" :key="i" :style="{backgroundColor:bg}">
      <SlackSkeleton bg="#e4e4e4" width="306px" height="306px" animated/>
      <SlackSkeleton bg="#e4e4e4" width="160px" height="24px" animated/>
      <SlackSkeleton bg="#e4e4e4" width="120px" height="24px" animated/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bg: {
    type: String,
    default: '#fff'
  }
})
</script>

<style scoped lang='less'>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 360px;
    .slack-skeleton ~ .slack-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>
