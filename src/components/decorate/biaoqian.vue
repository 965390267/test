<template>
  
        <div id="biaoqian">
    
            <div id="biaoqian_biaoti"><span>标签</span></div>
    
            <div id="biaoqian_biankuang">
    
                <ul id="blogtags">
    
                    <li >
                        <a   :title="item.num_s+'篇文章'"  v-for="(item,index) in tags" :key='index' v-if='index<8' >{{item._id}}	</a>
        
                    </li>
    
                </ul>
    
            </div>
    
        </div>
</template>
<script>
import {getarticletag} from '../../api/articleapi.js'
export default {
  data(){
      return{
tags:[]
      }
  },
  methods:{
gettag(){
    this.$http.get(getarticletag).then(res => {
  
        //微语渲染
  
        this.tags = res.data.data;
  
     
  
      });
}
  },
  mounted(){
this.gettag()
  }
}
</script>
