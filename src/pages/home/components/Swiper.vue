<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="wrapper-touch">
    <!-- slides -->
    <swiper-slide v-for="items in swoperList" :key="items.id"><img class="swiper-img" :src="items.imgUrl" :alt="items.imgAlt" /></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swoperList: [ {
        id: '0001',
        imgUrl: 'https://dwz.cn/4uPKTU30',
        imgAlt: '张家界'
      }, {
        id: '0002',
        imgUrl: 'https://dwz.cn/gKlMptiH',
        imgAlt: '天门山'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  position relative
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.66%
  background #eee
  .swiper-img
    width 100%
</style>
