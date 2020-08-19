<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :goodsItem="item" class="goodsItem" ></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2px;
    
}

</style>