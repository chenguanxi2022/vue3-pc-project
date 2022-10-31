<template>
  <div class='home-banner'>
    <SlackCarousel :sliders="sliders" />
  </div>
</template>

<script setup>
import { findBanner } from '@/api/home'

const sliders = ref([])
findBanner().then(data => {
  sliders.value = data.result
  console.log(sliders)
})
</script>

<style scoped lang='less'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  // .slack-carousel {
  //   ::v-deep .carousel-btn.prev {
  //     left: 270px;
  //   }
  //   ::v-deep .carousel-indicator {
  //     padding-left: 250px;
  //   }
  // }
}
</style>
