<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommondView',
    props:{
        recommends:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        text-align: center;
        font-size: 12px;
        border-bottom: 8px solid #eee;
        padding: 10px 0 20px;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>