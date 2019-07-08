<template>
    <ul class="list">
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  justify-content center
  flex-direction column
  position absolute
  top 1.58rem
  right 0
  bottom 0
  background rgba(0,0,0,.1)
  width .4rem
  z-index 2
  .item
    text-align center
    line-height .4rem
    color $bgcolor
</style>
