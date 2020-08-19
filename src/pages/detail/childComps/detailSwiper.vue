<template>
      <Swiper class="sp">
          <SwiperItem v-for="item in topImages" class="sp-item">
              <img :src="item" alt="">
          </SwiperItem>
      </Swiper>
</template>

<script>
import {Swiper ,SwiperItem} from 'components/common/swiper/index'

export default {
    name:'DetailSwiper',
    components:{
    Swiper ,
    SwiperItem,
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.sp{
    height: 300px;   
    overflow: hidden;
}
.sp-item img{
    background-size: 300px;
}

</style>