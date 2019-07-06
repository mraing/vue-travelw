<template>
    <div class="icons">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class="icon" v-for="items in page" :key="items.id">
                <div class="icon-img">
                  <img class="icon-img-content" :src="items.imgUrl" />
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
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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
.icons >>> .swiper-pagination
  position relative
 .icon-pagination-content >>> .swiper-pagination-bullet
    margin 0 .1rem
    width .12rem
    height .12rem
  .icon-pagination-content >>> .swiper-pagination-bullet-active
    background $bgcolor
.icons
  position relative
  margin-top .1rem
  .icon-pagination-content
    position relative
    overflow hidden
.icon
  position relative
  float left
  width 25%
  height 0
  padding-bottom 25%
  overflow hidden
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
