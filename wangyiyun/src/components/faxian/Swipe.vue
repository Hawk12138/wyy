<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in arr.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>

    </div>
</template>
<script>
import { getBanner } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
    setup() {
        const arr = reactive({
            images: [],
        });
        onMounted(async () => {
            let res = await getBanner();
            arr.images = res.data.banners
            // console.log(res);
        });
        return { arr };
    },
};
</script> 
<style lang="less">
.van-swipe {
    width: 100%;
    height: 200px;

    .van-swipe-item {
        padding: 10px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 0.2rem;
        }
    }
}
</style>