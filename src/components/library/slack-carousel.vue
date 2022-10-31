<template>
  <div class="slack-carousel" @mouseenter="stop()" @mouseleave="start()">
    <ul class="carousel-body">
      <!-- 轮播图片 -->
      <li class="carousel-item" v-for="(item,i) in sliders" :key="item.id" :class="{fade:index===i}">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <!-- 左箭头 -->
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)"><i class="iconfont icon-angle-left"></i></a>
    <!-- 右箭头 -->
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)"><i class="iconfont icon-angle-right"></i></a>
    <!-- 小点 -->
    <div class="carousel-indicator">
      <span v-for="(item,i) in sliders" :key="item.id" :class="{active:index===i}" @mouseover="move(i)"></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sliders: {
    type: Array,
    default: () => []
  },
  autoPlay: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 2500
  }
})
// 默认显示图片的索引
const index = ref(0)
// 自动播放
// eslint-disable-next-line no-unused-vars
let timer = null
const autoPlayFn = () => {
  // 每次调用先清空 timer
  clearInterval(timer)
  timer = setInterval(() => {
    index.value++
    if (index.value >= props.sliders.length) {
      index.value = 0
    }
  }, props.duration)
}
watch(() => props.sliders, (newVal) => {
  // 有数据&&开启自动播放，才调用自动播放函数
  if (props.sliders.length && props.autoPlay) {
    index.value = 0
    autoPlayFn()
  }
})
// 鼠标进入，自动播放关闭
const stop = () => {
  clearInterval(timer)
}
// 鼠标移出，自动播放开启
const start = () => {
  if (props.sliders.length && props.autoPlay) {
    autoPlayFn()
  }
}
// 左右小箭头
const toggle = (step) => {
  const newIdx = index.value + step
  if (newIdx >= props.sliders.length) {
    index.value = 0
    return
    // 当前循环要退出
  }
  if (newIdx < 0) {
    index.value = props.sliders.length - 1
    return
    // 当前循环要退出
  }
  index.value = newIdx
}
// 小点的事件
const move = (idx) => {
  clearInterval(timer)
  index.value = idx
}
// 组件销毁，清除定时器
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped lang='less'>
.slack-carousel {
  width: 100%;
  height: 100%;
  min-height: 150px;
  min-width: 300px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity .5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all .5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
