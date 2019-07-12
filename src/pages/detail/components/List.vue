<template>
  <div>
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件 -->
      <div class="item-childer" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.item-title
  position relative
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
  ellipsis()
  .item-title-icon
    display inline-block
    position relative
    top: .06rem
    left .06rem
    width .36rem
    height .36rem
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
.item-childer
  padding 0 .2rem
  ellipsis()
</style>
