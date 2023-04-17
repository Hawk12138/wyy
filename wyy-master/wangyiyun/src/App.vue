<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item replace to="/" icon="icon-liebiao">发现</van-tabbar-item>
    <van-tabbar-item replace to="/boke" icon="icon-liebiao">播客</van-tabbar-item>
    <van-tabbar-item replace to="/wode" icon="icon-liebiao">我的</van-tabbar-item>
    <van-tabbar-item replace to="/guanzhu" icon="icon-liebiao">关注</van-tabbar-item>
    <van-tabbar-item replace to="/shequ" icon="icon-liebiao">社区</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: 30px;
  height: 40px;
}
.appone{
  width: 100px;
  float:left
}
</style>
