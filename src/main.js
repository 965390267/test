// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/common.css'
import '../src/assets/css/icon/iconfont.css'
import '../src/assets/css/animate.css'

Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.bus = new Vue;

// Vue.bus.$emit('loading', true);

// 超时时间
axios.defaults.timeout = 5000
    // http请求拦截器
   
axios.interceptors.request.use(config => {

  
    Vue.prototype.bus.$emit('loading', true);
        return config
    }, error => {
    
        Vue.prototype.bus.$emit('loading', false);
        return Promise.reject(error)
    })
    // http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    console.log(data);
    setTimeout(()=>{
        Vue.prototype.bus.$emit('loading', false);
      
    },400)
    return data
}, error => {
  
    Vue.prototype.bus.$emit('loading', false);
    return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    data: {
        Bus: new Vue()
    }
})