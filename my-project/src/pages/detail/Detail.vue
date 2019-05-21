<template>
  <div>
    <detail-banner 
    :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail", //1)递归组件用到   2)<keep-alive  exclude="Detail">取消缓存  2)devTool工具能看到名字
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[],
      // list: [
      //   {
      //     title: "成人票",
      //     children: [
      //       {
      //         title: "成人三馆联票",
      //         title: "成人三馆联票-某一连锁店销售"
      //       }
      //     ],
      //     children: [
      //       {
      //         title: "成人三馆联票"
      //       },
      //       {
      //         title: "成人五馆联票"
      //       }
      //     ]
      //   },
      //   {
      //     title: "学生票"
      //   },
      //   {
      //     title: "儿童票"
      //   },
      //   {
      //     title: "特惠票"
      //   }
      // ]
    };
  },
  methods: {
    geDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.stghtName=data.sightName,
        this.bannerImg=data.bannerImg
        this.gallaryImgs=data.gallaryImgs,
        this.list=data.categoryList
      }
    }
  },
  mounted() {
    this.geDetailInfo();
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>


