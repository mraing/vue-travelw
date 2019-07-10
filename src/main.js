// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 vuex
import store from './store'

// 引入第三方库（解决移动端点击延迟）
import fastClick from 'fastClick'

// 引入轮播图第三方库
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 引入轮播图样式
import 'swiper/dist/css/swiper.css'

// 引入基本样式
import 'styles/reset.css'
import 'styles/border.css'

Vue.config.productionTip = false

// 使用轮播图
Vue.use(VueAwesomeSwiper)

// 引入第三方库（解决移动端300ms点击延迟）
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
