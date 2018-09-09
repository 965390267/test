<template>
	<div id="contentleftt" style="background-color: rgba(255, 255, 255, 0.6);">
	
	
	
		<div class="biaoti" id="masked">{{current.title}}</div>
	
		<div class="date2">
	
			<span class="home"></span><a href="/" title="返回网站首页">首页</a> <b>&gt;</b>
	
			<a href="">文章</a> <b>&gt;</b> <a href="">随笔</a>
	
			<!--分类原代码 	    <a href="https://omist.cn/?sort=13">Java数据结构与算法</a>
	
		 -->&nbsp;&nbsp;
	
			<span class="pauthor"></span>作者：<a href="" title="等待你的加入。 364543777@qq.com">{{current.author}}</a>&nbsp;&nbsp;
	
			<span class="ptime"></span>{{format(current.submittime)}}&nbsp;&nbsp;
	
			<span class="pview"></span>热度：{{current.visitnumber}}°&nbsp;&nbsp;
	
			<a style="color:red;" rel="external nofollow" title="点击提交收录！" >已自动提交收录</a>
	
			<!-- 以下是原评论代码，如果你没用多说社会化评论，那么请把下面的“注释”取消就行了。 -->
	
			<!--  0条评论&nbsp;&nbsp;&nbsp;&nbsp;  -->
	
			<!-- 以下是调用多说社会化评论数据，如果你没用多说，请删除下面这条代码。-->
	
	
	
			<a id="comments" href="#comments"><span class="ds-thread-count" ></span></a>&nbsp;
	
		</div>
	
	
	
	
	
		<div class="date4">
	
			时间：{{current.time}}&nbsp;&nbsp; 热度：23°&nbsp;
	
			<!-- 以下是调用多说社会化评论数据，如果你没用多说，请删除下面这条代码。 -->
	
			<a href="#comments"><span class="ds-thread-count" ></span></a>
	
		</div>
	
		<div class="xiantiao"><img src="../../assets/images/xiantiao1.png"></div>
	
		<div id="zoom">
	
			<pre class="prettyprint lang-java linenums" v-html='current.article'><!-- 文章渲染页 -->
	
	</pre>
	
		</div>
	
		<div class="post-tags">
	
			<a rel="tag"  :title="item._id"  v-for="(item,index) in tags" :key='index' v-if='index<3'>{{item._id}}</a>
	
		</div>
	
		<blogfoot v-if='loadedshow' :author='current' @reflush="reflushpage"></blogfoot>
	
	
	
				
	
	</div>
</template>
<script>
import {getarticlebyid,viewarticlenums,getarticletag} from '../../api/articleapi.js'
	import HeadNav from "@/components/base/headernav";
	import blogfoot from "@/components/blog/blogfoot";
	export default {
	
		components: {
	
			blogfoot
	
		},
	
		data() {
	
			return {
				article:[],
				current:[],
				tags:[],
				loadedshow:false
			
			};
	
		},
	
		methods: {
					 format(timestemp){
    var format=new Date(timestemp)
    var year=format.getFullYear();
    var month=format.getMonth()+1;
	var day=format.getDate();
	var housr=format.getHours();
	var Minutes=format.getMinutes();
	var weeks=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
return year+'年'+month+'月'+day+'日'+' '+housr+':'+Minutes+' '+weeks[format.getDay()];
},
			reflushpage(){
			
	this.getarticlebyid();
			},
			addviewnums(){
this.$http.post(viewarticlenums,{artid:this.$route.query.databaseid}).then((res)=>{


})
			},
	getarticlebyid() {




	 this.$http.post(getarticlebyid,{id:this.$route.query.databaseid}).then(res => {


  
	 this.current=res.data.data;
	 this.loadedshow=true;
	
	 
      });
           

	
			},gettag(){
    this.$http.get(getarticletag).then(res => {
  
        //微语渲染
  
        this.tags = res.data.data;
  
     
  
      });
}

		},
		mounted(){
			this.getarticlebyid();
	this.addviewnums()
	this.gettag();
	var doc = document.documentElement || document.body;
doc.scrollTop=0;
			// this.current=this.article[this.$route.query.id]
			
		}
	
	};
</script>

<style scoped>
	textarea{
		background:transparent;
	}
</style>

