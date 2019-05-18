<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>  
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-bottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import {mapState} from "vuex"
export default {
  name: "CityList",
  methods: {
    handleCityClick(city) {
      this.$store.commit("changeCity", city); //派发一个名字叫做changeCity
      // alert(city)
      this.$router.push("/")
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper); //创键一个scroll实例属性他等于new Bscroll(里面传进一个dom节点属性)
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed:{
    ...mapState({
      currentCity:"city"
    })
  },
  watch: {
    letter() {
      // console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        // console.log(element);
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .area {
    .title {
      line-height: 0.44rem;
      background: #eee;
      // padding: 0.2rem;
      color: #666;
      font-size: 0.26rem;
    }

    .border-topbottom {
      &:before {
        border-color: #ccc;
      }

      &:after {
        border-color: #777;
      }
    }

    .button-list {
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      background: #fff;

      .button-wrapper {
        width: 33.33%;
        float: left;

        .button {
          padding: 0.1rem 0;
          text-align: center;
          margin: 0.1rem;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }

      .item-list {
        .item {
          line-height: 0.54rem;
          color: #666;
          padding-left: 0.2rem;
        }
      }
    }
  }
}
</style>

