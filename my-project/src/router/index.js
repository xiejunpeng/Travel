import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'   //引进来的路径
import Detail from '@/pages/detail/Detail'   

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
    },
    {
      path: '/detail/:id',   
      name: 'Detail',      
      component: Detail     
    }
  ],
  scrollBehavior (to, from, savedPosition) {  //滚动行为让页面切的换的时候始终回到最顶部
    return { x: 0, y: 0 }
  }
})
