<template>
  <div id="contentleftt">
  
    <h2 class="biaoti" id="masked">相册</h2>
  
    <div class="xiantiao2">
  
      <img src="../../assets/images/xiantiao2.png">
  
    </div>
  
    <div id="kl_album_list">
  
      <ul >
  
        <li  v-for='(img,index) in imglist' :key='index'>
  
  
                
  
                   <img  :src="img.photopath"  @error="err(img)" @load="success(img)">
                   <span class="photo_td_two" @click="deleteimg(img.photoname)" >{{img.photoname}}</span>
              
  
        </li>
  
      </ul>
  
    </div>
  
    <div id="pagemenui">
  
    </div>
  
  
  
    <div style="clear:both;"></div>
  
  </div>
</template>
<script>
  import music from "@/components/music";
  
  import {photo,deletephoto} from '../../api/photoapi.js'
  
  import HeadNav from "@/components/base/headernav";
  
  export default {
  
    components: {
  
      HeadNav,
  
      music
  
    },
  
    data() {
  
      return {
  
        isshow: false,
  
        imglist: [],
       photopath:''
  
      };
  
    },

    methods: {
 success(url){
  
   
   
    
   
 },
      err(url){
  url.photopath=  require('../../assets/images/nopic.jpg')
   
      },
  deleteimg(name){
    alert(name)
    this.$http.post(deletephoto,{photoname:name}).then(res=>{
    
    })
  },
      openmodel() {
  
        this.isshow = true;
  
      },
  
      closemodel() {
  
        this.isshow = false;
  
      }
  
    },
  
    mounted() {
  
      this.$http.get(photo).then(res => {
  
        //个人图片页主图渲染
  
        this.imglist = res.data.piclist;
  
      
  
      });
  
    }
  
  };
</script>
<style scoped>
 #contentleftt {
background-color: rgba(255, 255, 255, 0.6);
 }
 #kl_album_list ul{
list-style: none; 
font-size:12px;
color: #666666;
float:left;
margin:3px;
padding:0px;
text-align:center;
 }
#kl_album_list li{
  position: relative;
 width:180px; height:130px; float:left; margin: 5px 5px 5px; border:1px solid #ccc;padding:0px;
}

table{
  border:0px solid #CCC;width:130px;
} 
.photo_td_one{
 border:0px solid #CECECE; height:125px; vertical-align:middle; text-align:center; padding:0px;
}
.photo_td_two{
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: block;
  width: 100%;
  height: 25px;
  overflow: hidden;
  background: rgba(0,0,0,.4);
  color: white;
  border:0px;padding:0px;  text-align:center;
}
img{
  border:0px; padding:0px;
  width: 100%;
  height: 100%;
}
</style>

