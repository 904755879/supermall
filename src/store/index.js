//导入
import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    //一个mutation最好只做一件事情
    addCountr(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = null
        for (let item of context.state.cartList) {
          if (item.iid === payload.iid) {
            oldProduct = item
          }
        }
  
        // 判断oldProduct
        if (oldProduct) {
          // oldProduct.count += 1  
          context.commit('addCountr', oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          // context.state.cartList.push(payload)
          context.commit('addToCart', payload)
          resolve('成功添加新的商品')
        }
      })
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})

// 挂载到实例
export default store
