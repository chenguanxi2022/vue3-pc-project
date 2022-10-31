<template>
  <div class='slack-skeleton' :class="{shan:animated}" :style="{width,height}">
    <!-- 1.盒子 -->
    <div class="block" :style="{backgroundColor:bg}"></div>
    <!-- 2.闪效果 slack-skeleton 伪元素 -->
  </div>
</template>

<script setup>
defineProps({
  bg: {
    default: '#efefef',
    type: String
  },
  width: {
    default: '100px',
    type: String
  },
  height: {
    default: '100px',
    type: String
  },
  animated: {
    default: false,
    type: Boolean
  }
})
</script>

<style scoped lang='less'>
.slack-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255,255,255,0) 0,
      rgba(255,255,255,.3) 50%,
      rgba(255,255,255,0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
