# blog

#文档的组件结构如下

main>footbar,donghua,loading;
donghua>headbar,menubar,slidebar;

slidebar>biaoqian,calendar,cundang,fenlei,pinglun,sousuo,weiyu,youqinglianjie,zuixinwenzhang

                                                 main
                                                  |
                                          |  | |  |    |   |  |
                                          |       |           |
                                          |       |           |
                                     foootbar   donghua     loading
                                                  |
                                                  |
                                         |  |  |  | | |  ||  |                                           
                                         |        |          |
                                         |        |          |
                                      headbar   menubar   slidebar//右侧边栏
                                    logo大标题    按钮           |
                                                   |             |
                                                   |        __________________________________________________________________________________________________
                                                   |       |            |          |          |          |         |          |         |                     |
                                                   |      biaoqian      calendar    cundang   fenlei    pinglun    sousuo     weiyu      youqinglianjie        zuixinwenzhnag
                                                   |
                                                   |
                         ______________________________________________________________
                         |         |         |          |          |             |
                        main     photo     weiyu      blog       personblog     contact
                       主页       相册       微语      技术文章      个人文章        联系我
> vue blog

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
