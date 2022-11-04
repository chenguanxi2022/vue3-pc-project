<template>
  <div class='home-new'>
    <SlackPanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><SlackMore path="/" /></template>
      <div ref="target" style="position:relative;height:406px">
        <Transition name="fade">
          <!-- 面板内容 -->
          <ul v-if="goods.length" class="goods-list">
            <li v-for="item in goods" :key="item.id">
              <RouterLink :to="`/product/${item.id}`">
                <img :src="item.picture" alt="">
                <p class="name ellipsis">{{item.name}}</p>
                <p class="price">&yen;{{item.price}}</p>
              </RouterLink>
            </li>
          </ul>
          <HomeSkeleton bg="#f0f9f4" v-else />
        </Transition>
      </div>
    </SlackPanel>
  </div>
</template>

<script setup>
import { findNew } from '@/api/home'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hooks'
const { target, result } = useLazyData(findNew)
const goods = result
</script>

<style scoped lang='less'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background-color: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color:@priceColor;
    }
  }
}
</style>
