import Vue from "vue"
import Vuex from "vuex"
import state from './state';
import mutations from "./mutations"
Vue.use(Vuex)    //使用vuex插件
export default new Vuex.Store({   //通过 new Vuex.Store   来创建仓库
      //仓库一般都有一个state,存放的是全局公用的东西
    // actions: {
    //     changeCity(ctx, ciyt) {  //ctx是自带的  
    //         ctx.commit("changeCity", ciyt)
    //         // console.log(city)
    //     }
    // },
    state,
    mutations,
})
