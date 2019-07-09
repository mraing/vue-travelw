<template>
    <div>
      <city-header></city-header>
      <!-- 搜索框 -->
      <city-search
        :cities="cities"
      >
      </city-search>
      <!-- 城市列表 -->
      <city-list
        :cities= "cities"
        :hot= "hotCities"
        :letter= "letter"
      ></city-list>
      <!-- 字母表 -->
      <city-alphabet
        :cities= "cities"
        @change= "handleChange"
      ></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/Header'
import CitySearch from '@/pages/city/components/Search'
import CityList from '@/pages/city/components/List'
import CityAlphabet from '@/pages/city/components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo  () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    // 接收来自 Aplhabet 组件的参数
    handleChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
