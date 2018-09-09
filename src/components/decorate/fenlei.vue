<template>
      <div id="fenlei">
    
            <div id="fenlei_biaoti"><span>分类</span></div>
    
            <div id="fenlei_biankuang">
    
                <ul id="blogsort">
    
                    <li v-for="(item,index) in byclass" :key='index'>
    
                        <i class="fa fa-folder-o fa-fw"></i><a  :title="item._id+'共有'+item.num_s+'篇文章'">{{item._id}} ({{item.num_s}})</a>
    
                    </li>
    
    
                </ul>
    
                <div id="gaodu1"></div>
    
            </div>
    
        </div>
</template>
<script>
import {getarticleclass} from '../../api/articleapi.js'
export default {
  data(){
      return{
byclass:[]
      }
  },
  methods:{
getclass(){
    this.$http.get(getarticleclass).then(res => {
  
        //微语渲染
  
        this.byclass = res.data.data;
  
     
  
      });
}
  },
  mounted(){
this.getclass()
  }
}
</script>
<style scoped>
#blogsort a{
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
</style>

