<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/City">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe605;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader"
  // props: {
  //   city: String //String   首字母必须大写
  // }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'; // 前面要加个波浪线

.header {
  display: flex;
  background: $bgColor;
  color: #fff;
  line-height: 0.86rem;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      display: block;
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    color: #ECEAEB;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-right: 0.2rem;
    border-radius: 0.1rem;
  }

  .header-right {
    width: 0.1 0.24rem;
    float: right;
    text-align: center;
    color: #fff;

    .arrow-icon {
      display:inline-block;
      margin-right: .109375rem;
      font-size: 0.24rem;
      
    }
  }
}
</style>

