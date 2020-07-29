import axios from 'axios';

export function request(config) {

    //   1.创建axios的实例
        const instance = axios.create({
          baseURL: 'http://123.207.32.32:8000',
          timeout: 5000
        })
    
        // 2.axios的拦截器
        // 请求拦截
        instance.interceptors.request.use(config =>{
            // console.log(config);/*  请求成功拦截 */
    
            // 1.比如config中的一些信息不符合服务器要求
            // 2.比如每次发送网络请求时，都希望在界面中显示一个请求图标（show，然后到响应成功，关闭）
            // 3.某些网络请求（登录（token）），必须携带一些特殊的信息
    
            return config  //!!!一定要返回，因为已经拦截了，拿不到就会请求失败
        }, err => {
            // console.log(err);
        })
    
        instance.interceptors.response.use(res => {
            // console.log(res);
            return res.data
        },err =>{
            // console.log(err);
        })
    
        // 3.发送真正的请求
        return instance(config)
    
    
    
    }