<template>
  <div>
    <!-- 头部 -->
    <div class="banner" @click="handleShowGallary">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont bannner-icon">&#xe6bf;</span>
          {{bannerImgs.length}}
        </div>
        <div class="banner-title">{{sightName}}</div>
      </div>
    </div>
    <!-- 画廊 -->
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleHidenGallary"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleHidenGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.banner
  position relative
  padding-top 55%
  height 0
  overflow hidden
  .banner-img
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    object-fit cover
  .banner-info
    position absolute
    right .2rem
    bottom .36rem
    left .2rem
    min-height .4rem
    color #fff
    .banner-title
      margin-top .1rem
      line-height .4rem
      color #fff
      font-size .36rem
      text-shadow 0 1px 2px rgba(0,0,0,0.70)
      ellipsis()
    .banner-number
      width 1.2rem
      height .4rem
      background rgba(0,0,0,.5)
      border-radius .2rem
      font-size .24rem
      color #fff
      line-height .4rem
      text-align center
      .bannner-icon
        font-size .24rem
</style>
