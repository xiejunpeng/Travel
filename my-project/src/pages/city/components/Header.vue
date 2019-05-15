<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
.header {
  @import '~styles/varibles.styl';

  height: 0.86rem;
  line-height: 0.86rem;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  position: relative;

  .header-back {
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>

