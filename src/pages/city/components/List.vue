<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-bottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>
        <!-- 选人热门城市 -->
        <div class="area">
          <div class="title border-bottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="hotItem in hot" :key="hotItem.id">
              <div class="button" @click="handleCity(hotItem.name)">{{hotItem.name}}</div>
            </div>
          </div>
        </div>
        <!-- 渲染城市列表 -->
        <div class="area" v-for="(alphabet, key) in cities" :key="key" :ref="key">
          <div class="title border-bottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom"
              v-for="citits in alphabet"
              :key="citits.id"
              @click="handleCity(citits.name)"
            >{{citits.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  data () {
    return {}
  },
  methods: {
    // 映射Mutations
    ...mapMutations(['changeCity']),
    handleCity (city) {
      this.changeCity(city)
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const elment = this.$refs[this.letter][0]
        this.scroll.scrollToElement(elment)
        // console.log(elment)
      }
      console.log(this.letter)
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .54rem
      background #eee
      padding 0 .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.3%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
