<template>
  <div class="header">
    <!-- 单返回头部 -->
    <router-link
      class="header-abs"
      tag="div"
      to="/"
      v-show="showAbs"
    >
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <!-- 带文字返回头部 -->
    <div class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    // 调用切换头部方法
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 当启用了 keep-alive 的时候，会多出这个的一样生命周期函数
  activated () {
    // 监听scroll是否发生了变化
    window.addEventListener('scroll', this.handleScroll)
  },
  // 当页面被隐藏或者切换时，会多出这样的一个函数，解绑绑定的监听事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    top .2rem
    left .2rem
    width .6rem
    height .6rem
    color #fff
    font-weight 700
    text-align center
    line-height .6rem
    border-radius .4rem
    background rgba(0,0,0,.6)
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background #00bcd4
    font-size .32rem
  .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
