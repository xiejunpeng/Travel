<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchsmove="handleTouchMove"
        @touchsend="handleTouchEnd"
        @click="handleLetterClick"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false
    };
  },
  methods: {
    handleLetterClick(e) {
      //兄弟组件之间的通讯
      this.$emit("change", e.target.innerText); //触发事件 第一个参数事件的名字   第二个参数事件携带的内容
      // console.log(e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove() {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop;
        console.log(startY);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-height: 0.44rem;
    color: $bgColor;
  }
}
</style>

