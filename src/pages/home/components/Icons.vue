<template>
    <div class="icons">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class="icon" v-for="items in page" :key="items.id">
                <div class="icon-img">
                  <img class="icon-img-content" :src="items.imgUrl" :alt="items.title" />
                </div>
                <div class="icon-desc">{{ items.desc }}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="icon-pagination-content">
          <div class="swiper-pagination"  slot="pagination"></div>
        </div>
       
    </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      },
      iconsList: [{
        id: '0001',
        desc: '景点门票',
        imgUrl: 'https://dwz.cn/dHCQaqIi'
      }, {
        id: '0002',
        desc: '天门山公园',
        imgUrl: 'https://dwz.cn/0S6XpALd'
      }, {
        id: '0003',
        desc: '长沙必游',
        imgUrl: 'https://dwz.cn/XNfnbImY'
      }, {
        id: '0004',
        desc: '水上乐园',
        imgUrl: 'https://dwz.cn/OtIu1ver'
      }, {
        id: '0005',
        desc: '游乐场',
        imgUrl: 'https://dwz.cn/zxHsLPSF'
      }, {
        id: '0006',
        desc: '动植物园',
        imgUrl: 'https://dwz.cn/qinzr4r1'
      }, {
        id: '0007',
        desc: '自然风光',
        imgUrl: 'https://dwz.cn/KbVtQg7S'
      }, {
        id: '0008',
        desc: '湘西凤凰',
        imgUrl: 'https://dwz.cn/EkpIP6oB'
      }, {
        id: '0009',
        desc: '自然风光',
        imgUrl: 'https://dwz.cn/KbVtQg7S'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon-pagination-content
  text-align center
 .icon-pagination-content >>> .swiper-pagination-bullet
    margin 0 .1rem
    width .12rem
    height .12rem
  .icon-pagination-content >>> .swiper-pagination-bullet-active
    background $bgcolor
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
    ellipsis()
</style>
