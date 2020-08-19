<template>
  <div class="toast" v-show="isshow">
      <div >{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    methods: {
        show(message='默认文字', time=2000){ //默认参数
            this.isshow = true
            this.message = message

            setTimeout(() => {
                this.isshow = false
                this.message = ''
            },time)
        }
    },
    props:{
        // message :{
        //     type:String,
        //     default(){
        //         return''
        //     }
        // },
        // isShow: {
        //     type:Boolean,
        //     default:false
        // }
    },
    data() {
        return {
            message: '',
            isshow: false
        }
    },
}
</script>

<style>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color:rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 8px 10px;
    z-index: 9999;
}
</style>