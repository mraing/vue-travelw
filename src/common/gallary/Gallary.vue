<template>
  <div class="container" @click="handleGallaryClose">
    <div class="wrapper">
      <swiper class="wrapper-touch" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, idnex) in imgs" :key="idnex">
          <img class="gallary-img" :src="item" />>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 99
  background #000
  .wrapper
    position relative
    width 100%
    height 0
    padding-top 100%
    background #fff
    .wrapper-touch
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      .gallary-img
        width 100%
        height 100%
        object-fit cover
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
