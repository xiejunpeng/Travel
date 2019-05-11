<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
         <!-- 不加key会报黄你警告 -->
      <swiper-slide v-for="item of swiperList" :key="item.id"> 
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt
        >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop :true 
        //  loop :true 让轮播图轮播
      },
      swiperList:[{
          id:'01',
          imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/a0584c7efd7c1204ab241fd531cb2ff2.jpg_750x200_586bb5cd.jpg'
      },{
          id:'02',
          imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/dc11f0bb94057224b104a2017f313e21.jpg_750x200_feee379d.jpg'
      }]
    };
  }
};
</script>
<style lang='stylus' scoped>
.swiper-img {
  width: 100%;
}

.wrapper >>> .swiper-pagination-bullet {  //wrapper >>> 穿透的意思
  background: #fff;
}
</style>


