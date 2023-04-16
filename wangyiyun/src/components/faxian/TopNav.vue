<template>
    <div class="topNav">
        <div class="topleft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>
        <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>
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
.topNav {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.topleft {
    width: 40px;
    height: 40px;
}

.toptopRight {
    width: 40px;
    height: 40px;
}

.van-search {
    width: 300px;
    height: 40px;
    align-items: center;
}
</style>
