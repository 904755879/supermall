<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>

    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-servive-item" v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.info-title {
  font-size: 17px;
  font-weight: bolder;
  height: 70px;
  padding-top: 15px;
}
.info-price {
  margin-bottom: 20px;
}
.n-price {
  color: var(--color-tint);
  font-size: 20px;
  margin: 0 15px;
}
.o-price {
  font-size: 12px;
  text-decoration: line-through;
  color: rgb(167, 167, 167);
}
.discount {
  border-radius: 15px;
  background-color: var(--color-tint);
  font-size: 12px;
  padding: 2px;
  color: lavender;
  margin: 0 15px;
}
.info-other {
  display: flex;
  justify-content: space-between;
}
.info-other span{
    font-size: 13px;
    text-align: center;
    color: rgb(167, 167, 167);
}
.info-service{
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    margin: 15px;
}
.info-service img{
    height: 13px;
    padding-top: 2px;
}
.info-service span{
    font-size: 13px;
}
</style>