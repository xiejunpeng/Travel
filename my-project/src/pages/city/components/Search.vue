<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="tex" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content">
      <ul>
        <li class="search-item border-border" v-for="item of list" :key="item">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch",
<<<<<<< HEAD
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
=======
  methods: {
    handleCityClick(city) {
      this.$store.commit("changeCity", city); //派发一个名字叫做changeCity
      // alert(city)
>>>>>>> origin/city-vuex
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  background: green;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>


