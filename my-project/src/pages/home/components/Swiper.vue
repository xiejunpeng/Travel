<template>
  <div class="wrapper">
    <!-- v-if="list.length  1.加这一句就是因为一开始swiperOption就创建了空数组图片显示的不是第一张,而是最后一张 -->
    <!-- v-if="list.length   2.当传过来的是空数组的时候 v-if为false,swiperOption数据不会被创建.   只有等你真正的数据过来后swiperOption数据才会被创建-->
    <!-- <swiper :options="swiperOption" v-if="list.length"> -->
    <!-- <swiper :options="swiperOption" v-if="list.length"> -->
    <!--v-if="list.length"  为了好看所以改成计算属性 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- 不加key会报黄你警告 -->
      <swiper-slide v-for="item of list" :key="item.id">
        <!--  5)props通过属性传给list  -->
        <img class="swiper-img" :src="item.imgUrl" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array //4)接收父组件传过来的数据
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
        //  loop :true 让轮播图轮播
      }
    };
  },
  computed:{
    showSwiper(){
      return this.list.length
    }
  }
};
</script>
<style lang='stylus' scoped>
.swiper-img {
  width: 100%;
}

.wrapper >>> .swiper-pagination-bullet { // wrapper >>> 穿透的意思
  background: #fff;
}
</style>


