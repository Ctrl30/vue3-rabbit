<script setup>
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home';

const banners = ref([]);

onMounted(() => {
    getBannerAPI()
    .then(res=>{
        banners.value = res.result
    })
})

const openHandle = (url)=>{
    console.log('url',url)
    // window.open(url)
}

</script>



<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in banners" :key="item.id">
                <img :src="item.imgUrl" @click="openHandle(item.hrefUrl)" alt="" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>



<style scoped lang='scss'>
.home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>