<template>
  <Tabbar>
     <Tabbaritem path='/home' activeColor='#fff'>
       <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
       <!-- 别名路径的使用    ~ -->
       <div slot="item-text">首页</div>
     </Tabbaritem>
     <Tabbaritem  path='/catogory'>
       <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="">
       <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="">
       <div slot="item-text">分类</div>
     </Tabbaritem>
      <Tabbaritem path='/cart'>
       <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="">
       <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
       <div slot="item-text">购物车</div>
     </Tabbaritem>
      <Tabbaritem  path='/profile'>
       <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
       <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
       <div slot="item-text">我的</div>
     </Tabbaritem>
   </Tabbar>
</template>

<script>
import Tabbaritem from '../common/tabbar/Tabbaritem'
import Tabbar from '../common/tabbar/tabbar'


export default {
    name:'maintabbar',
    components:{
    Tabbaritem,
    Tabbar
    }
}
</script>

<style>

</style>