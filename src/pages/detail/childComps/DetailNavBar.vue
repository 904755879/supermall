<template>
    <div id="nav">
        <NavBar> 
            <div slot="left" class="left" @click="leftClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" :key="index"
                class="title-item" :class="{ active: ( index === currentIndex  ) }" @click="itemClick(index)"  >{{item}}</div>
            </div>
        </NavBar>
    </div>
  
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data() {
        return {
            titles:['商品', '参数' ,'评论', '推荐'],
            currentIndex: 0,
           
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        leftClick(){
            this.$router.back();
            // this.$router.go(-1)
        }

    },
   
}
</script>

<style>
.title{
    display: flex;
}
.title-item{
    flex: 1;
    font-size: 13px;
}
.active{
    color: var(--color-high-text);
}
.left{
    margin-top: 3px;
}
#nav{
    position: sticky;
    background-color: #fff;
    top: 0;
    z-index: 2;
}
</style>