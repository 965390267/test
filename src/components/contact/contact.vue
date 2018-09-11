<template>
  <!-- <div id="contentleftt">
  
    <h2 class="biaoti" id="masked"></h2>
  
    <div class="xiantiao2"><img src="../../assets/images/xiantiao2.png"></div>
  
  
  
    <form method="post">
  
      <div class="cline"><input maxlength="200" id="ctitle" class="username" name="title" placeholder="Name"></div>
  
      <div class="cline"><input id="ctags" name="tags" class="useremail" maxlength="200" placeholder="Email"></div>
  <div class="cline"><textarea id="ctags" class="textarea" name="tags" maxlength="200" placeholder="Message"></textarea></div>
      <div class="cline">
  
       
  
        <input type="button" value="提交" id='comment_submit'>
  
      </div>
  
    </form>
  
    <div id="pagemenui">
  
    </div>
  
  
  
    
  
  </div> -->
  <section id="contentleftt">
    <div id="aboutMenu" class="wroks-inner contact-wrap">
      <div class="about-title">
        <ul class="about-title-list clearfix">
          <li class="on" @click="isshow" >
            <a href="javascript:void(0)" :style="{ color: cactiveColor, background: cbgc }">Contact Me</a>
          </li>
          <li class="" @click="ishidden" >
            <a href="javascript:void(0)" :style="{ color: mactiveColor, background: mbgc }">Message</a>
          </li>
        </ul>
      </div>
      <div class="about-content">
        <div class="about-me about-items clearfix" v-show="show">
          <div class="me-img"><img src="http://www.jing-ui.com/Public/home/images/aboutme/about-me.jpg" alt=""></div>
          <div class="me-info">
            <p>NAME: ZZH</p>
            <p>QQ: 965390267</p>
            <p>云南昆明</p>
            <p>
              <a  @click="jiaqq($event)" >
                <img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="点击加我QQ" title="点击加我QQ"></a>
            </p>
       
          </div>
        </div>
        <div class="about-me about-msg about-items " v-show="hidden">
          <div class="blog-comment msg-comment"><div class="blog-tips-info"></div><form id="form1" name="form1"><div class="comment-info-main clearfix"><div class="comment-head"><div class="comment-headimg"><img width="50" height="50" src="/Public/uploads/visitor.png" id="gravatarView"><!--<img width="50" height="50" src="/Public/uploads/visitor.png" id="gravatarView" />--><input type="hidden" name="headimg" id="gravatarInput"></div></div><div class="comment-userinfo"><ul class="comment-wrap"><li><input class="input-text" type="text" placeholder="您的昵称" size="70" name="username" id="author"><i class="require-red">*</i></li><li><input class="input-text" type="text" placeholder="您的邮箱" size="70" name="email" id="email"><i class="require-red">*</i><i class="input-after"><a href="/blog/37" target="_blank">了解Gravatar</a></i></li><li><input class="input-text" type="text" placeholder="您的主页" size="70" name="url" id="url"></li><li><textarea class="common-text blog-text" placeholder="您的评论内容" name="content" id="content" cols="30" rows="10"></textarea><i class="require-red">*</i></li><li><input class="input-text input-code" placeholder="验 证 码" type="text" name="verify" size="4" id="verify"><img id="verifyImg" class="cp" src="/Public/verify/" alt="点击刷新验证码" title="点击刷新验证码"></li><li><input type="hidden" name="bid" value="" id="nid"><input type="hidden" name="module" value="contact"><span class="comment-btn"><input class="btn blog-btn" id="sendMsg" type="submit" value="发表"></span></li></ul></div></div></form></div>
        </div>
     
      </div>
    </div>
  </section>
</template>
<script>
  import music from "@/components/music";

  import HeadNav from "@/components/base/headernav";

  export default {
    components: {
      // HeadNav,
      // music
    },
    data(){
return{
  show:true,
  hidden:false,
  cactiveColor:'#8e6955',
  cbgc:'#fff',
  mactiveColor:'#999',
  mbgc:'#e6e6e6'
}
    },
    methods:{
      isshow(){
           this.show=true;
            this.hidden=false;
           this.mactiveColor='#999';
           this. mbgc='#e6e6e6';
            this.cactiveColor='#8e6955';
           this. cbgc='#fff';
      },
      ishidden(){
       this.show=false;
            this.hidden=true;
            this.cactiveColor='#999';
           this. cbgc='#e6e6e6';
            this.mactiveColor='#8e6955';
           this. mbgc='#fff';
      },
      jiaqq(e){
          var sUserAgent=navigator.userAgent.toLowerCase();
    var bIsIpad=sUserAgent.match(/ipad/i)=="ipad";
    var bIsIphoneOs=sUserAgent.match(/iphone os/i)=="iphone os";
    var bIsMidp=sUserAgent.match(/midp/i)=="midp";
    var bIsUc7=sUserAgent.match(/rv:1.2.3.4/i)=="rv:1.2.3.4";
    var bIsUc=sUserAgent.match(/ucweb/i)=="ucweb";
    var bIsAndroid=sUserAgent.match(/android/i)=="android";
    var bIsCE=sUserAgent.match(/windows ce/i)=="windows ce";
    var bIsWM=sUserAgent.match(/windows mobile/i)=="windows mobile";
    if(!(bIsIpad||bIsIphoneOs||bIsMidp||bIsUc7||bIsUc||bIsAndroid||bIsCE||bIsWM)){
      console.log(e.target.parentNode);
      
     e.target.parentNode.href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=965390267"
      }else{
       e.target.parentNode.href="http://qm.qq.com/cgi-bin/qm/qr?k=IxDonT3liYvfieIEFNd0-BvvN-IbR3A8"
        }
      }
    }
  };

</script>

<style scoped>


  #comment_submit {
    background: url("./../../assets/images/em_button.png") no-repeat;
    border: 0;
    font-size: 14px;
    font-family: \5fae\8f6f\96c5\9ed1;
    color: #000000;
    width: 86px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    float: inherit;
  }

  #comment_submit:hover {
    background: url("./../../assets/images/em_button2.png") no-repeat;
  }

 

  .wroks-inner {
    padding: 25px 25px;
  }

  .clearfix {}

  .about-title-list li {
    float: left;
  }

  .about-title-list li.on a {
    background: #fff;
    color: #8e6955;
  }

  .about-title-list li a {
    float: left;
    height: 60px;
    line-height: 60px;
    font-family: 微软雅黑;
    color: rgb(153, 153, 153);
    font-size: 28px;
    background: rgb(230, 230, 230);
    padding: 0px 60px;
  }

  
  .clearfix:after {
    content: ".";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
  }

  .about-me {
    padding-top: 60px;
  }

  .me-img {
    float: left;
    margin-right: 30px;
  }

  .me-img img {
    border-radius: 50%;
  }

  img {
    border: 0 none;
    vertical-align: middle;
    max-width: 100%;
  }

  .me-info {
    font-size: 18px;
    font-family: 微软雅黑;
    line-height: 30px;
  }

  .me-info p {
    margin-bottom: 30px;
    text-indent: 2em;
    color: #585858;
  }

  a {
    color: #8e6955;
    text-decoration: none;
    outline: 0;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
.about-msg {
    padding-top: 20px;
}

.about-me {
    padding-top: 60px;
}



.blog-tips-info {
    height: 30px;
    line-height: 30px;
    margin: 5px 0 10px;
}
.msg-comment .comment-info-main {
    margin-left: 140px;
}
</style>
