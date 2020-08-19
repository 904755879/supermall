<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl :titles="['流行','新款','精选']" class="tabcontrol" @tabClick="tabClick"></TabControl>
    <GoodsList :goods="showGoods" ></GoodsList>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./HomeSwiper";
import RecommendView from "./RecommendView";
import FeatureView from "./FeaturView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
      saveY: 0,
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();

    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  destroyed() {
    console.log('home destroyed');
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //事件监听
    tabClick(index){
      
      switch (index) {
        case 0:
          this.currentType = 'pop'
          // console.log(this.currentType);
          break
        case 1:
          this.currentType = 'new'
          //  console.log(this.currentType);
          break
        case 2:
          this.currentType = 'sell'
          //  console.log(this.currentType);
          break
        
      }
    },
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods("pop", page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  activated() {
    window.scrollTo(0,this.saveY) 
  },
  deactivated() {
    this.saveY = window.scrollY
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: rgba(245, 147, 163, 0.884);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.tabcontrol {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 99;
}
</style>