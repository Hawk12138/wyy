<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in arr.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
        <div class="iconList">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
                <span>每日推荐</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
                <span>私人FM</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
                <span>歌单</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
                <span>排行榜</span>
            </div>
        </div>
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

.iconList {
    width: 100%;
    height: 80px;
    margin-top: .2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .iconItem {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 5px;
        .icon {
            width: 30px;
            height: 30px;

        }
    }
}

;</style>