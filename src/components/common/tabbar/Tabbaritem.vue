<template>
  <div class="tab-bar-item" @click="itemclick">
      <!-- <img src="../../assets/img/logo.png" alt="">
      <p>首页</p> -->
      <div v-if="!isActive"><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-icon-active'></slot></div>
      <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
    name:'Tabbaritem',
    props:{
         path:String,
         activeColor:{
             type:String,
             default:'red',
         }

    },
    data() {
        return {
            // isActive:true,
           
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
            //当前活跃的path 和itme的path比较。动态
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemclick(){
            this.$router.push(this.path)
        }
    },
}
</script>

<style>
.tab-bar-item{
    /* border: 1px inset white; */
    flex: 1;
    height: 59px;
    line-height: 29px;
    text-align: center;
    font-size: 14px;

}
.tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;  /* 去除图片下面的空白 */
}
/* .active{
    color: brown;
} */
</style>