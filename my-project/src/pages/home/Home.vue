<template>
  <div>
    <home-header :city="city"></home-header>
    <!-- 3)通过属性值给子组件 -->
    <home-swiper :list="swiperList"></home-swiper>
    <!-- 3)通过属性值给子组件 -->
    <home-icons :iconList=iconList></home-icons>
    <home-recommend :recommendList=recommendList></home-recommend>
    <home-weekend :Weekend=Weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: "", //1)事先定义空字符串
      swiperList: [], //1)事先定义空数组织
      iconList: [],
      recommendList:[],
      Weekend:[]
    };
  },
  methods: {
    // 页面挂载完成就请求'/api/index/json'  .then  数据获取成功就   传到  res  然后就打印出来
    getHomeInfo() { 
      axios
        .get("/api/index.json") //用这个方法请求URL    线上是以api 格式的   改api是在config/index.js
        .then(this.getHomeInfoSucc); //等getHomeInfoSucc这个方法返回一个对象
    },
    getHomeInfoSucc(res) {  //3
      // console.log(res);
      res = res.data; //获取数据内容
      if (res.ret && res.data) {
        //如果后端正确返回结果 而且 res里面有data
        const data = res.data;
        this.city = data.city; //2)等拿到数据以后再把值返回给上面空字符中
        this.swiperList = data.swiperList; //2)等拿到数据以后再把值返回给上面空数组
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.Weekend = data.Weekend;
        // this.swiperList = data.swiperList;
      }
      // console.log(res)
    }
  },
  mounted() {
    //挂载后计算机自动执行的钩子函数
    this.getHomeInfo();
  }
};
</script>

<style>
</style>

