<template>
     <div id="sousuo">
    
            <!-- <h3><span>搜索</span></h3> -->
    
            <ul id="logsearch">
    
                <form name="keyform" method="get" action="">
    
                    <input name="keyword" class="search" type="text" onblur="" v-model="putvalue" placeholder="请输入搜索关键字" title="丘比龙小提示：如果你要搜索内容，请在搜索框中输入关键词，然后按“回车”即可查询到结果。">
    
                    <input type="button" name="submit" value="搜索" class="submit button"  @click="search($event)" title="猛击我搜索">
    
                </form>
    
            </ul>
    
        </div>
</template>
<script>
export default {
    data(){
        return{
putvalue:''
        }
    },
    methods:{
        search(e){
         
            
            location.href=' https://www.baidu.com/s?wd='+this.putvalue
        }
        // https://www.baidu.com/s?wd=%E9%9A%BE%E5%8F%97
    }
}
</script>

