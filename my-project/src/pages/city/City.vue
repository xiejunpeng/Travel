<template>
  <div>
    <!-- 使用组件 -->
    <city-header></city-header>
    <city-search :cities=cities></city-search>
    <city-List :cities="cities" :hotCities="hotCities" :letter="letter"></city-List>
    <!-- 监听这个组件1)@change="handleLetterChange"     2)定义handleLetterChange这个方法-->
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
// 引入模块
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "City",
  components: {
    //components   里面有S的
    //注册组件
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
      // console.log(letter)
    }
  },
  mounted() {
    //用created也行不过老师推荐用created
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped></style>

