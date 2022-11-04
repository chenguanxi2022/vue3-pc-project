<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template #right>
      <a href="javascript:;" :class="{disabled:index === 0}" @click="toggle(-1)" class="iconfont icon-angle-left prev"></a>
      <a href="javascript:;" :class="{disabled:index === 1}" @click="toggle(1)" class="iconfont icon-angle-right next"></a>
    </template>
    <div class="box" ref="target">
      <Transition name="fade">
        <ul class="list" v-if="brands.length" :style="{transform:`translateX(${-index*1240}px)`}">
          <li v-for="item in brands" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="">
            </RouterLink>
          </li>
        </ul>
        <div v-else class="skeleton">
          <SlackSkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="240px" height="305px"/>
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<script setup>
import HomePanel from './home-panel.vue'
import { useLazyData } from '@/hooks'
import { findBrand } from '@/api/home'
// useLazyData 需要的是API函数，如果遇到要传参的情况，自己写函数在函数中调用API
const { target, result } = useLazyData(() => findBrand(10))
// 获取是数据
const brands = result
// 切换效果（前提：只有两页）
const index = ref(0)
const toggle = (step) => {
  const newIdx = index.value + step
  if (newIdx < 0 || newIdx > 1) return
  index.value = newIdx
}
</script>

<style scoped lang='less'>
.home-panel {
  background-color: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: @warnColor;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    // 禁止点击
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transform: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:ntn-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
.skeleton {
  width: 100%;
  display: flex;
  .item {
    margin-right:10px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
</style>
