<template>
  <div class="cart">
    <navBar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </navBar>
    <CartList id="cartlist"></CartList>
    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import CartList  from './childComps/CartList'
import cartBottomBar from './childComps/cartBottomBar'

import { mapGetters } from 'vuex'
export default {
    name:'cart',
    components: {
      navBar,
      CartList,
      cartBottomBar
    },
    computed: {
    //  cartLength() {
    //    return this.$store.getters.cartLength
    //  }

  // 用法一：数组，从vuex导入
    // ...mapGetters([
    //   'cartLength',
    //   'cartList'
    // ])

    // 用法二：对象，可改名
    ...mapGetters({
      length: 'cartLength',
    
    })


    },
}
</script>

<style>
.nav-bar{
  background-color: var(--color-tint);
  opacity: 1;
  color: #fff;
  position: sticky;
  top: 0;
}
#cartlist{
  height: 100%;
  overflow: scroll;
  padding-bottom: 20px;
}

</style>