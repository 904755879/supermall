<template>
  <div class="botton-bar">
    <div class="check-content">
      <CheckButton class="check-all" 
      :isChecked="isSelectAll" @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </div>

    <div class="price">合计：{{totalPrice}}</div>

    <div class="calculate" @click="calcClick">去计算：({{checkedLength}})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

import { mapState } from 'vuex'

export default {
  name: "cartBottomBar",
  components: {
    CheckButton,
  },
  methods: {
    checkClick () {
      if(this.isSelectAll){
        //全部选中
        this.cartList.forEach(item => item.checked = false)
      }
      else{
        this.cartList.forEach(item => item.checked = true)
      }
      
      // this.cartList.forEach( item => item.checked = !this.isSelectAll)
      // 会影响
    },
    calcClick(){
      if( !this.isSelectAll ) {
        this.$toast.show('请选择购买的商品', 1500)
      }
    }
  },
  computed: {
    ...mapState(['cartList']),

    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      // 方法1：使用filter
      // return !(this.$store.state.cartList.filter(item => item.checked).length)
      // 方法2：使用find
     else return !this.$store.state.cartList.find((item) => !item.checked);

      // 方法3：使用普通遍历
      // for(let i of this.cartList) {
      //   if(!i.checked){
      //     return false
      //   }
      //     return true
      // }
    },
  },
};
</script>

<style>
.botton-bar {
  height: 40px;
  background-color: #eee;
  position: fixed;
  bottom: 59px;
  left: 0;
  right: 0;
  line-height: 40px;
  font-size: 14px;
  display: flex;
}
.check-all {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin: 0 10px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.calculate {
  color: #fff;
  margin-left: auto;
  background-color: red;
  width: 80px;
  text-align: center;
}
</style>