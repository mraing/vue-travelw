<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="search" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCity(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到更多数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCity (city) {
      this.changeCity(city)
      // this.$store.dispatch('changeCity', city)
      this.keyword = ''
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search
  box-sizing border-box
  padding 0 0.1rem
  height 0.72rem
  background $bgcolor
  .search-input
    padding 0 0.1rem
    width 100%
    height 0.62rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
.search-content
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  overflow hidden
  z-index 2
  .search-item
    line-height .82rem
    padding 0 .2rem
    color #666
    background #fff
</style>
