<template>
  <div>
    <div class="shop-info">
      <div class="shop-top">
        <img :src="shop.logo" alt />
        <span class="title">{{shop.name}}</span>
      </div>

      <div class="shop-flex">
        <div class="shop-middle shop-middle-item">
          <div class=" shop-middle-left">
            <div class="info-sells">
              <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
            </div>
            <div class="sells-text">总销量</div>
          </div>
          <div class="info-goods">
            <div class="goods-count">{{shop.goodsCount}}</div>
            <div class="goods-text">全部宝贝</div>
          </div>
        </div>

        <div class="shop-middle-item shop-middle-right">
          <table>
            <tr v-for="(item, index) in shop.score" :key="index">
              <td>{{item.name}}</td>
              <td class="score" :class="{'score-better' : item.isBetter}">{{item.score}}</td>
              <td class="better" :class="{'better-more' : item.isBetter}">
                <span>{{item.isBetter ? '高' : '低'}}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop"><a :href="shop.shopUrl">进店逛逛</a></div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style>
.shop-top img {
  border-radius: 50%;
  height: 60px;
  border: 1px solid rgb(167, 167, 167);
  vertical-align: middle;
}
.shop-top {
  margin: 5px 10px;
}
.shop-top span {
  display: inline;
  margin-left: 20px;
  vertical-align: middle;
  font-size: 17px;
}
.shop-flex {
  display: flex;
  margin: 20px 0;
}
.shop-middle-item{
    flex: 1;
    display: flex;
    justify-content: space-around;
  
}
.sells-count , .goods-count{
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin: 10px 0;
}
.shop-middle{
    border-right:  1px solid rgb(218, 216, 216);
}
.score{
  color: rgb(81, 211, 81);
  padding: 3px 5px;
}
.score-better{
  color: #f40;
}
.better{
  background-color:rgb(81, 211, 81);
}
.better-more{
  background-color: #f40;
}
.shop-bottom {
   margin: auto;
   width: 20%;
}



</style>