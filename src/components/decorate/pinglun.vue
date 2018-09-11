<template>
  
        <div id="pinglun">
    
            <div id="pinglun_biaoti"><span>最新评论</span></div>
    
            <div id="pinglun_wenzi">
    
                <ul id="newcomment">
    
                    <li id="comment" v-for='(item,index) in comments' :key='index' v-if='index<3'>  
                        <span id="mzi" >{{item.passport.nickname}}</span> 说：
    
                        <br /><a title="@寒光博客：谢谢！" href="">{{item.content}}</a>
                    </li>
    
                    <!-- <li id="comment">
                        <span id="mzi">寒光博客</span> 说：
    
                        <br /><a title="你后台设置下文章摘要就可以解决首页文章问..." href="">解决首页文章问...</a>
                    </li> -->
    
                </ul>
    
            </div>
    
        </div>
</template>
<script>
import {getarticleclass} from '../../api/articleapi.js'
export default {
  data(){
      return{
comments:[]
      }
  },

  methods:{
       speak(item){
       if(item.comments.length){
           return item.comments[0].content
       }else{
           return 'nopeople'
       }
   },
getcomments(){
   

    this.$http.get('http://localhost:3000/api/getarticlenewcomments').then(res => {
  
    this.comments=res.data.comments;
  
      console.log( this.comments)
  
     
  
      });
}
  },
  mounted(){
this.getcomments();
  }
}
</script>
