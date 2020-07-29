import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('pages/home/home.vue') 
const Cart = () => import('pages/cart/cart.vue')
const category = () => import('pages/category/category.vue')
const Porfile = () => import('pages/profile/profile.vue')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/profile',
        component:Porfile
    }
]



const router = new VueRouter({
    routes,
    mode:'history'
})

export default router