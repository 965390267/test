import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios' //axios引入

import main from '@/components/main' //主页路由

import err from '@/components/err' //主页路由

import blog from '@/components/blog/blog' //博客文章页页


import blogarticle from '@/components/blog/blogarticle' //博客文章查看页

import contact from '@/components/contact/contact' //联系方式页

import photo from '@/components/photo/photo' //照片集页

import weiyu from '@/components/weiyu/weiyu' //微语页


Vue.prototype.$http = axios; //在vue原型上绑定axios使axios可以全局使用this.$http

Vue.use(Router, VueAxios)

export default new Router({
    routes: [
       
        {
            path: '/',
            name: 'main', //主页路由,
            component: main,
            children: [{
                path: '/weiyu',
                component: weiyu
            }, {
                path: '/photo', //照片路由
                component: photo
            }, {
                path: '/', //博客路由
                component: blog,

            }, {
                path: '/blogarticle', //博客文章查看页路由
                component: blogarticle
            }, {
                path: '/contact',
                component: contact //联系方式路由
            }, 
            {
                path: "*",
                component: err //重定向
            },]
        }
    ]
})