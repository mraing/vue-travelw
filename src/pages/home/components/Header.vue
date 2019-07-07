<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe601;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height headerHeight
    background $bgcolor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
    .header-input
      flex 1
      height .64rem
      color #666
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background #fff
      border-radius .1rem
    .header-right
      display block
      box-sizing border-box
      padding-right .1rem
      width 1.24rem
      float right
      text-align right
      color #fff
      .arrow-icon
        margin-left  -.04rem
</style>
