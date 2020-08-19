<template>
  <div id="detail">
    <DetailNavBar @titleClick="titleClick" ref="nav"></DetailNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInof :shop="shop"></DetailShopInof>
    <DetailGoodsInfo :detailinfo="detailInfo"></DetailGoodsInfo>
    <DetailParamInfo :paramInfo="goodsParam" ref="param"></DetailParamInfo>
    <DeatilCommentInof :commentInfo="commentInfo" ref="comment"></DeatilCommentInof>
    <GoodsList :goods="recommends" ref="recommend" ></GoodsList>
    <DetailBottomBar @addCart='addCart'></DetailBottomBar>
    <!-- <Toast :message="message" :isShow="show"></Toast> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/detailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInof from "./childComps/DetaliShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInof";
import DeatilCommentInof from "./childComps/DetailCommemtInfo";
import DetailBottomBar from './childComps/DetailBottomBar'

import GoodsList from "../../components/content/goods/GoodsList";
import Toast from '../../components/common/toast/Toast'

import { mapActions  } from 'vuex'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInof,
    DetailGoodsInfo,
    DetailParamInfo,
    DeatilCommentInof,
    GoodsList,
    DetailBottomBar,
    // Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommends: [],
      scrolls: [],
      // message:'',
      // show:false,
    };
  },
  methods: {
    ...mapActions({addToCart:'addCart'}),

    titleClick(index) {
      // console.log(index);
      this.scrolls = [0];
      this.scrolls.push(this.$refs.param.$el.offsetTop - 44);
      // console.log(this.$refs.param.$el);
      this.scrolls.push(this.$refs.comment.$el.offsetTop - 44);
      this.scrolls.push(this.$refs.recommend.$el.offsetTop - 44);
      window.scrollTo(0, this.scrolls[index]);
    },
    scroll() {
      for (let i in this.scrolls) {
        let length = this.scrolls.length;
        i = Number(i);
        //  if ( window.scrollY >this.scrolls[i] && window.scrollY　< this.scrolls[i+1]) {
        //     console.log(i);
        //   }
        if (
          this.$refs.nav.currentIndex !== i &&
          ((i < length - 1 &&
            window.scrollY > this.scrolls[i] &&
            window.scrollY < this.scrolls[i + 1]) ||
            (i === length - 1 && window.scrollY > this.scrolls[i]))
        ) {
          this.$refs.nav.currentIndex = i;
          // console.log(i);
        }
      }
    },
    addCart(){

      //获取购物车所需数据
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 将商品添加到购物车里
      
      // this.$store.commit('addCart',product)
      //mutation触发

      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })
      //action 触发

      this.addToCart(product).then(res =>{
        // console.log(res)
        // this.show = true
        // this.message = res

        // setTimeout(() =>{
        //   this.show = false
        // },1500)

        this.$toast.show(res, 1500)
      } )
      // 映射


    }
  },
  created() {
    
    // 1.保存传入的id
    this.iid = this.$route.params.id;

    // 2.请求数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // console.log(res);
      // 2.1.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods);

      // 2.2获取商家数据
      this.shop = new Shop(data.shopInfo);
      // console.log(this.shop);

      // 2.3.保存商品详情数据
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo);

      // 2.4.获取参数信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // console.log(this.goodsParam);

      // 2.5.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  updated() {
    //
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>
<style>
#detail {
  background-color: #fff;
  z-index: 9;
  position: relative;
}


</style>