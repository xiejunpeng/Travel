import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'   //引进来的路径

Vue.use(Router)

export default new Router({   //这里是路向
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',      //路径
      name: 'City',      //名字
      component: City     //对应的大组件
    }
  ]
})
