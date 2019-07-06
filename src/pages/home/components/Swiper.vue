<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="wrapper-touch" v-if="showSiper">
    <!-- slides -->
    <swiper-slide v-for="items in list" :key="items.id"><img class="swiper-img" :src="items.imgUrl" /></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper >>> .swiper-pagination-bullet
  // bottom .32rem
.wrapper
  position relative
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
</style>
