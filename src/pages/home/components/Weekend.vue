<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <div class="item-img-warpper"><img class="item-img" :src="item.imgUrl" /></div>
                <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://dwz.cn/CFvS7jBs',
          title: '情侣约会圣地',
          desc: '你听，鸟语！你闻，花香！你听，海浪。你看，我的对面，是你……'
        },
        {
          id: '0002',
          imgUrl: 'https://dwz.cn/CFvS7jBs',
          title: '情侣约会圣地',
          desc: '你听，鸟语！你闻，花香！你听，海浪。你看，我的对面，是你……'
        },
        {
          id: '0003',
          imgUrl: 'https://dwz.cn/CFvS7jBs',
          title: '情侣约会圣地',
          desc: '你听，鸟语！你闻，花香！你听，海浪。你看，我的对面，是你……'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  // margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item-img-warpper
  position relative
  height 0
  padding-top 33.9%
  overflow hidden
  .item-img
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    object-fit cover
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #9e9e9e
    ellipsis()
</style>
