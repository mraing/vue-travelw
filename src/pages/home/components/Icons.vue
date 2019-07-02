<template>
    <div class="icons">
        <div class="icon" v-for="items in iconsList" :key="items.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="items.imgUrl" :alt="items.title" />
            </div>
            <div class="icon-desc">{{ items.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      iconsList: [{
        id: '0001',
        title: '景点门票',
        imgUrl: 'https://dwz.cn/dHCQaqIi'
      }, {
        id: '0002',
        title: '天门山公园',
        imgUrl: 'https://dwz.cn/0S6XpALd'
      }, {
        id: '0003',
        title: '长沙必游',
        imgUrl: 'https://dwz.cn/XNfnbImY'
      }, {
        id: '0004',
        title: '水上乐园',
        imgUrl: 'https://dwz.cn/OtIu1ver'
      }, {
        id: '0005',
        title: '游乐场',
        imgUrl: 'https://dwz.cn/zxHsLPSF'
      }, {
        id: '0006',
        title: '动植物园',
        imgUrl: 'https://dwz.cn/qinzr4r1'
      }, {
        id: '0007',
        title: '自然风光',
        imgUrl: 'https://dwz.cn/KbVtQg7S'
      }, {
        id: '0008',
        title: '湘西凤凰',
        imgUrl: 'https://dwz.cn/EkpIP6oB'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.icons
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
      overflow hidden
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        padding .1rem
        box-sizing border-box
        .icon-img-content
          display block
          margin auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        text-align center
        padding .1rem
        line-height .44rem
        color $darkTextColor
</style>
