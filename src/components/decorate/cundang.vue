<template>
    <div id="cundang">
    
            <div id="cundang_biaoti"><span>存档</span></div>
    
            <div id="cundang_biankuang">
    
                <ul id="record">
    
                    <li  v-for="(item,index) in files" :key='index'><a  >{{formdata(item._id)}}({{item.num_s}})</a></li>

    
                </ul>
    
                <div id="gaodu1"></div>
    
            </div>
    
        </div>
</template>
<script>
import {getarticlefile} from '../../api/articleapi.js'
export default {
  data(){
      return{
files:[]
      }
  },
  methods:{
      formdata(time){
          if(typeof(time)!='object'){

        
         var time=(time).toString();
          
 return time.substring(0,4)+'年'+time.substring(4,6)+'月'
          }
         
      },
getfile(){
    this.$http.get(getarticlefile).then(res => {
  
        //微语渲染
  
        this.files = res.data.data;
  
      
  
      });
}
  },
  mounted(){
this.getfile()
  }
}
</script>
