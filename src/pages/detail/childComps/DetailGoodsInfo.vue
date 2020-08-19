<template>
    <div v-if="Object.keys(detailinfo).length !== 0" class="goods-info" id="goods-info">
        <div class="info-desc clear-fix">
            <div class="start"></div>
            <div class="dsc">{{detailinfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="info-key">{{detailinfo.detailImage[0].key}}</div>
        <div class="info-list">
            <img v-for="(item, index) in detailinfo.detailImage[0].list" 
            :key="index" :src="item"  alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailGoodsInfo',
    data() {
        return {
            
        }
    },
    props:{
        detailinfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.info-list img{
    width: 100%;
}
#goods-info{
    position: relative;
}
</style>