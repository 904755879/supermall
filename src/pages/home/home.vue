<template>
    <div id="home">
        <NavBar class="home-nav"><div slot="center"> 购物街 </div></NavBar>
        <HomeSwiper :banners="banners"></HomeSwiper>
        <RecommendView :recommends="recommends"></RecommendView>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper  from './HomeSwiper'
import RecommendView from './RecommendView'
import { getHomeMultidata } from "network/home";
// import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
    name:'home',
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
    },
    data() {
        return {
            banners:[],
            recommends:[]
        }
    },
    created() {
        //请求多个数据
        getHomeMultidata().then(res =>{
            console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        })
    },
}
</script>

<style>
.home-nav{
    background-color: rgba(245, 147, 163, 0.884);
    color: white;
}
</style>