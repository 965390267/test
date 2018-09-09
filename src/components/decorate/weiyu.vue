<template>
  
        <div id="weiyu">
    
            <div id="weiyu_biaoti"><span>最新微语</span></div>
    
            <div id="weiyu_biankuang">
    
                <ul id="twitter">
    
                    <li v-for="(item,index) in weiyu" :key='index' v-if='index<6'>{{item.weiyu}}
    
                        <p>{{item.time}}</p>
    
                    </li>
    
                    <p><router-link to='/weiyu'>更多&raquo;</router-link></p>
    
                </ul>
    
            </div>
    
        </div>
</template>
<script>
import {getthreeweiyu} from '../../api/weiyuapi.js'
export default {
  data(){
      return{
weiyu:[]
      }
  },
  methods:{
getweiyu(){
    this.$http.get(getthreeweiyu).then(res => {
  
        //微语渲染
  
        this.weiyu = res.data.data;
  
     
  
      });
}
  },
  mounted(){
this.getweiyu()
  }
}
</script>
