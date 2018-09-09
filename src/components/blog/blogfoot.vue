<template>
<div>
  <div id="banquan">
	
			<div id="qrcode" class="tupian hint--right hint--rounded" title="这篇文章太棒了，我要分享给我的小伙伴们！
	
		1、用手机扫二维码。2、点右上角分享就可以到朋友圈啦。">
	
				<!-- <img class="tcode" src="../../assets/images/tcode.png" alt="二维码加载中..."> -->
                </div>
	
			<div class="xinxi">
	
				<span class="zuozhe">本文作者：</span><a href="" title="等待你的加入。 965390267@qq.com">{{author.author}}</a> &nbsp;&nbsp;&nbsp;&nbsp;
	
				<span class="biaoti2">文章标题：</span> <a href="">{{author.title}}</a><br>
	
				<span class="blog_url">本文地址：</span><a :href="href">{{href}}</a><br>
	
				<b>版权声明：</b>若无注明，本文皆为“<span class="blog_name">{{author.author}}</span>”原创，转载请保留文章出处。
	
			</div>
	
			<div id="gaodu1"></div>
	
		</div>
	
		<div class="cutline"><span><a href="" target="_blank">正文到此结束</a></span></div>
	
	
	
	
	
		<div id="shangxiapian_2">
	
			<div id="shangxiapian3"><a rel="prev" class="shake shake-opacity">上一篇没咯！</a></div>
	
			<div id="shangxiapian4">
	
				<a href="">
	
					<img src="../../assets/images/img.gif" ></a>
	
			</div>
	
			<div id="gaodu1"></div>
	
		</div>
	
		<div id="shangxiapian">
	
			<div id="sxpbk1" @click="lastarticle">
	
				<div id="wzlj1"><a  class="shake shake-opacity"><i class="fa fa-arrow-circle-left"></i>&ensp;{{lastarticlename}}</a></div>
	
			</div>
	
			<div id="sxpbk2" @click="nextarticle">
	
				<div id="wzlj1"><a >{{nextarticlename}}&ensp;<i class="fa fa-arrow-circle-right"></i></a></div>
	
			</div>
	
			<div id="gaodu1"></div>
	
		</div>
	
		<div class="gxq">
	
			<div class="bti"><i class="fa fa-folder-open"></i> <span class="chaffle" data-lang="zh">相关文章</span></div>
	
			<ul>
	
				<li v-for="(item,key,index) in aboutarticles" :key='index' v-if='index<8'><i class="fa fa-dot-circle-o">
	
	          <!-- <router-link :to="{path:'/blogarticle',query:{databaseid:item}}">{{key}}</router-link> -->
	<a @click="openarticle(item)">{{key}}</a>
	            </i></li>
	
			</ul>
	
	
	
			<div id="gaodu1"></div>
	
		</div>
	
		<center>
	
			<div id="qrcode"></div>
	
			<!-- <center>
                <div id="pagemenui">

<h3 class="commenttitle">评论列表</h3>
<hr>
<ul>
	<li class="commentlist" v-for="(item,index) in leavemessage" :key='index'>
		<div class="top">
		<div class="head"><img src="../../assets/articleimg/head.jpg" alt=""></div>
		<div class="topbox">
			<div class="commentleft">
		<div class="name">{{item.username}}</div>
		<div class="time">{{item.time}}</div>
		</div>
		<div class="commentright">
		<div class="lookrecive" @click="lookrecieve">{{showrecieve}}</div>
		<div class="zan" @click='givelike(item._id,index)'>👍赞({{item.likenums}})</div>
		<div class="delete"><i><img src="../../assets/images/delete.png" alt=""></i> 删除</div>
		</div>
		</div>
	    </div>
		<div class="bottom">
			<p>{{item.msg}}</p>
		</div>
		<div class="commetrecieve" v-if="isshowrecieve">
			<p v-for="(twoitem,index) in item.replay" :key='index'><span class="authornamecolor">{{twoitem.username}}</span>回复<span class="namecolor">{{item.username}}</span>:{{twoitem.msg}}<span class="recievelist"><b class="one"><i><img src="../../assets/images/delete.png" alt=""></i> 删除 </b><b ><i class="recieve">回复</i></b> </span></p>
		</div>
	</li>
	
</ul>
<div class="nocomment">没有更多评论了</div>
				</div>
	
				<div id="comment-place">
	
					<div class="comment-post" id="comment-post">
	
						 <div class="cancel-reply" id="cancel-reply" style="display:none"><a href="javascript:void(0);" onclick="cancelReply()">取消回复</a></div>
	
						<div class="comment-header">
	
							<a name="respond"></a>
	
						</div> 
	
						<form method="post" name="commentform" action="" id="commentform">
	
							<input type="hidden" name="gid" value="55">
	
							<p>
	
								<input type="text" name="comname" maxlength="49" placeholder="请输入您的昵称！" v-model="username">
	
								<label for="author"><small>昵称</small></label>
	
							</p>
	
							<p>
	
								<input type="text" name="commail" maxlength="128" placeholder="请输入您的邮箱！" value="" size="22" v-model="email">
	
								<label for="email"><small>邮件地址 (选填)</small></label>
	
							</p>
	
						
	
							<p><textarea name="comment" id="comment" rows="12"  placeholder="尽情吐槽QAQ~" v-model="comment"></textarea></p>
	
							<div class="fbpl"> <input type="button" id="comment_submit" value="发表评论" @click='submit'><span id="top2"><a   class="hint--left hint--bounce" @click="top" title="返回顶部"><img src="../../assets/images/top2.png"></a></span>
	
								<div
	
								    id="gaodu1"></div>
	
					</div>
	
					<input type="hidden" name="pid" id="comment-pid" value="0" size="22" tabindex="1">
	
					</form>
	
				</div>
	
	</div>
	
	
	
	</center> -->
	<!--PC和WAP自适应版-->
<div id="SOHUCS" :sid="author._id" ></div> 

	</center>
    </div>
</template>
<script>
import {
  createcomment,
  putlikenums,
  getaboutarticle,
  getarticle
} from "../../api/articleapi.js";
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      href: "",
      aboutarticles: {},
      isshowrecieve: false,
      showrecieve: "查看回复",
      username: "",
      email: "",
      comment: "",
      leavemessage: [],
      likenums: "",
      totalpages: "",
      pageSize: 5, //每页请求5条数据,
      currentPage: 1,
      lastarticlename: "",
      nextarticlename: ""
    };
  },
  props: ["author"],

  methods: {
    top() {
      var doc = document.documentElement || document.body;

      var top = function() {
        // value就是当前的位置值
        // 例如我们可以设置DOM.style.left = value + 'px'实现定位
        doc.scrollTop -= 10;

        if (doc.scrollTop > 0) {
          // 继续运动
          var time = requestAnimationFrame(top);
        } else {
          // 动画结束
          cancelAnimationFrame(time);
        }
      };
      top();
    },
    submit() {
      this.$http
        .post(createcomment, {
          id: this.author._id,
          username: this.username,
          msg: this.comment
        })
        .then(res => {
          this.leavemessage = res.data.data.leavemessage;
         
        });
    },
    givelike(receive_id, index) {
      this.$http
        .post(putlikenums, {
          id: this.author._id,
          recieveid: receive_id,
          dbindex: index
        })
        .then(res => {
        
          this.likenums = res.data.data[index];
          this.$set(this.leavemessage, index, { likenums: this.likenums });
        });
    },
    lookrecieve() {
      if (this.isshowrecieve) {
        this.isshowrecieve = false;
        this.showrecieve = "查看回复";
      } else {
        this.isshowrecieve = true;
        this.showrecieve = "收起回复";
      }
    },
    openarticle(item) {
      this.$router.push({ path: "/blogarticle", query: { databaseid: item } });

      this.$emit("reflush");
      var doc = document.documentElement || document.body;
      doc.scrollTop = 0;
    },
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 160,
        height: 160, // 高度
        text: this.href // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      });
    },
    getaboutarticle() {
      this.$http.get(getaboutarticle).then(res => {
        //获取相关文章根据存档
        var obj = {};
        var id = res.data.data[0].aboutsid;
        var article = res.data.data[0].abouts;
        for (var i = 0, len = article.length; i < len; i++) {
          obj[article[i]] = id[i];
        }

        this.aboutarticles = obj;
      });
    },
    nextarticle() {
     console.log(this.author);
     var submittime=Number(window.localStorage.getItem('submittime')) 
this.$http.post('http://localhost:3000/api/getarticlenext',{submittime:submittime}).then(response => {
 if(response.data.data.length){
 this.nextarticlename= response.data.data[0].title;
}else{
   this.nextarticlename= '木有啦o(╥﹏╥)o';
}
 
  var obj=response.data.data
  this.$emit('reloadnext',response.data.data[0])
				});
            
    },
    updatenextarticle() {
     console.log(this.author);
     var submittime=Number(window.localStorage.getItem('submittime')) 
this.$http.post('http://localhost:3000/api/getarticlenext',{submittime:submittime}).then(response => {
 if(response.data.data.length){
 this.nextarticlename= response.data.data[0].title;
}else{
   this.nextarticlename= '木有啦o(╥﹏╥)o';
}
 
				});
            
    },
    lastarticle() {
      var submittime=Number(window.localStorage.getItem('submittime')) 
     this.$http.post('http://localhost:3000/api/getarticlelast',{submittime:submittime}).then(response => {
   console.log(response.data);
   
    if(response.data.data.length){
 this.lastarticlename= response.data.data[0].title;
}else{
   this.lastarticlename= '木有啦o(╥﹏╥)o';
}
					console.log(  response.data.data);
                   ;	
	   var obj=response.data.data
  this.$emit('reloadnext',response.data.data[0])
				});
    },
        updatelastarticle() {
      var submittime=Number(window.localStorage.getItem('submittime')) 
     this.$http.post('http://localhost:3000/api/getarticlelast',{submittime:submittime}).then(response => {
   
    if(response.data.data.length){
 this.lastarticlename= response.data.data[0].title;
}else{
   this.lastarticlename= '木有啦o(╥﹏╥)o';
}
				
				});
    }
  },
  mounted() {
    this.updatenextarticle();
    this.updatelastarticle();
	
var appid = 'cytMXY367'; 
var conf = 'prod_3d7edeeba5b206f72e68ceb0d3ede570'; 
var width = window.innerWidth || document.documentElement.clientWidth; 
if (width < 960) { 
window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>'); 
} else { 
	var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;
	var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");
	b.setAttribute("src",d);if(typeof a==="function"){
    if(window.attachEvent){
      b.onreadystatechange=function(){
      var e=b.readyState;
	if(e==="loaded"||e==="complete"){

    b.onreadystatechange=null;a()
    }
    }
    
    }else{b.onload=a}}c.appendChild(b)
    };
	loadJs("http://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); 
	}  
    this.href = window.location.href;
    this.qrcode();
    this.leavemessage = this.author.leavemessage;

    console.log(this.$route.query);

    this.getaboutarticle();
    this.lastarticle();
    this.nextarticle();
  }
};
</script>
<style scoped>
.tcode {
  width: 160px;
  height: 160px;
}
#pagemenui .commentlist {
  border-bottom: 1px solid #dad8d8;
  padding-bottom: 15px;
}
#pagemenui .commenttitle {
  font-size: 18px;
  font-weight: normal;
  text-align: left;

  padding: 5px 60px;
  margin: 0;
}
#pagemenui .top {
  box-sizing: content-box;
  overflow: hidden;
}

#pagemenui hr {
  /* border: 1px solid #ccc; */
  color: #ccc;
}
#pagemenui .head {
  float: left;
  width: 60px;
}
#pagemenui .head img {
  margin-top: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
#pagemenui .nocomment {
  color: #666;
  font-size: 15px;
}
#pagemenui .topbox {
  padding-left: 60px;
}
#pagemenui .topbox div {
  display: inline-block;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}
#pagemenui .topbox .delete i {
  vertical-align: middle;
}
#pagemenui .topbox .name {
  padding: 0 10px;
  color: cadetblue;
}
#pagemenui .topbox .time {
  padding: 0 10px;
}
#pagemenui .topbox .commentleft {
  float: left;
}

#pagemenui .topbox .commentright {
  float: right;
}
#pagemenui .topbox .commentright div {
  padding: 0 5px;
}
#pagemenui .bottom p {
  text-align: left;
  text-indent: 2em;
  font-size: 15px;
  color: #333;
}
#pagemenui .commetrecieve {
  position: relative;
  transition: all 0.5s;
}
#pagemenui .commetrecieve p {
  text-align: left;
  padding-left: 40px;
  color: #333;
  font-size: 15px;
}
#pagemenui .commetrecieve .namecolor {
  color: rgb(185, 141, 141);
}
#pagemenui .commetrecieve .authornamecolor {
  color: rgb(153, 185, 141);
}
#pagemenui .commetrecieve span {
  display: inline-block;
}
#pagemenui .commetrecieve span i {
  font-style: normal;
}
#pagemenui .recievelist {
  position: absolute;
  right: 10px;
  color: #666;
  vertical-align: middle;
}
#pagemenui .recievelist b {
  font-weight: normal;
}
#pagemenui .recievelist b.one {
  font-weight: normal;
  vertical-align: middle;
}
#pagemenui .recievelist i {
  vertical-align: middle;
}
</style>


