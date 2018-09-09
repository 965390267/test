<template>
    <div id="contentleftt" style="background-color: rgba(255, 255, 255, 0.6);">   
    
        <div id="tw">
      
            <div class="tw-body">
    
                <article class="post-list" role="article" v-for='(item,index) in weiyu' :key='index'>
  
                    <div class="tw-wenzi">
    
                        <div class="main_img">

                            <img :src="item.headimg">
    
                        </div>
                  <div class="post1"><span class="hint--top  hint--rounded chaffle" >resens</span><br>{{item.weiyu}}<br><br></div>
    
                        <div class="clear"></div>
    
                        <div class="bttome">
                            <p class="post"><a >回复 (<span id="rn_1">0</span>)</a></p>
   
                            <p class="time">{{item.time}} </p>
  
                        </div>

                        <div class="clear"></div>
 
                        <ul id="r_1" class="r123"></ul>
    
                        <div class="huifu" id="rp_14">
    
                            <textarea id="rtext_14"></textarea>
    
                            <div class="tbutton">
    
                                <div class="tinfo" style="display:">
    
                                    昵称：<input type="text" id="rname_14" value="">
    
                                    <span style="display:">验证码：<input type="text" id="rcode_14" value=""></span><span class="img-yzm"><img src="http://omist.cn/t/?action=ckcode&amp;mode=t"></span>
    
                                </div>
    
                                <input class="button_p" type="button"  value="回 复">
    
                                <div class="msg"><span id="rmsg_14" style="color:#FF0000"></span></div>
    
                            </div>   
    
                        </div>
    
                    </div>
   
                </article>
  
                <li id="pagemenui"></li>
    
            </div>  
    
        </div>
        <!--end #tw-->

    </div>
</template>
<script>
import {getweiyu} from '../../api/weiyuapi.js'
export default {
  data(){
      return{
weiyu:[]
      }
  },
  methods:{
getweiyu(){
    var doc = document.documentElement || document.body;
 doc.scrollTop=0;
    this.$http.get(getweiyu).then(res => {
  
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
