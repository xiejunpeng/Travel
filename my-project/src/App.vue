<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <keep-alive>  这个意思就是我的路由的内容被加载过一次之后,我就把路由中的内容放在内存之中,下一次再执行这个路由的时候不需要重新渲染这个组件去重新执行钩子函数只需要你从内存里把以前的内容拿 出来显示在页面上 -->
    <keep-alive>
      <router-view/>
      <!-- 显示的是当前路由地址所对应的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
