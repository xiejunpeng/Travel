// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'   //1)轮播图的js
import store from "./store"
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'    //轮播图的js

Vue.config.productionTip = false

fastClick.attach(document.body)  // 解决移动端有个300毫秒点击延迟的问题  
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)    //2)使用轮播图js
new Vue({
  el: '#app',//挂载点指的是index.html
  router,  //路由根据网址的不同,返回不同的内容给用户
  store,
  components: { App },//es6的写法 { App:App}  键跟值一样的所以可以省略
  template: '<App/>'  //这个模板在 el: '#app'这个节点上渲染
})
