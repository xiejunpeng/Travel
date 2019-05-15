<template>
  <div>
    <!-- 使用组件 -->
    <city-header></city-header>
    <city-search></city-search>
    <city-List></city-List>
    <city-alphabet></city-alphabet>  
  </div>
</template>
<script>
// 引入模块
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    //components   里面有S的
    //注册组件
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
};
</script>
<style lang="stylus" scoped>
    
</style>

