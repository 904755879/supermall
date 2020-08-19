<template>
  <div class="cart-list">
      <cartListItem 
      v-for="(item, index) in cartList"
      :key="index" :product="item"></cartListItem>
  </div>
</template>

<script>
import { mapGetters  } from "vuex";
import cartListItem from './CartListItem'
export default {
    name:'CartList',
    components:{
        cartListItem
    },
    computed: {
        ...mapGetters(['cartList'])
    },
}
</script>

<style>
.cart-list{
   margin-bottom: 60px;
}
</style>