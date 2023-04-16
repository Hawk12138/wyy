<template>
  <div class="home">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-liebiao"></use>
    </svg>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
<style>
.home {
  display: flex;
  align-items: center;
}
.van-search {
  flex: 1;
  max-width: 300px;
  /* 控制搜索框宽度 */
}

</style>
