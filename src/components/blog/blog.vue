<template>
	<div id="contentleftt" style="background-color: rgba(255, 255, 255, 0.6);">
	
		<article class="post-list"   role="article" v-for='(item,index) in article' :key='index'>
	
			<h2 class="articletitle">
				<!-- 说明：判断浏览量 -->

				<!-- 说明：判断时间 -->

				<a href= "" :title="item.title" class="shake shake-little">{{item.title}}</a>
				</h2>
			<div class="date1"><span class="ptime"></span>时间：{{ format(item.submittime) }}&nbsp;&nbsp;
	
				<span class="pauthor"></span>作者：<a href="" :title="item.author">{{item.author}}</a>&nbsp;&nbsp;
	
				<span class="pcata"></span>分类： <a href="">{{item.column}}</a> &nbsp;
	
				<span class="pview"></span>热度：<a href="">{{item.visitnumber}}</a>°&nbsp;
	
				<!--原评论代码 <a href="https://omist.cn/?post=54#comments">评论：0</a> -->
	
				<!-- 多说评论代码 -->
	
				<a href=""><span class="ds-thread-count" data-thread-key="54" data-count-type="comments"></span></a> &nbsp;&nbsp; </div>
	
			<div class="date3">
	
				时间：{{item.time}}&nbsp;&nbsp; 分类：<a href="">{{item.column}} </a> &nbsp;&nbsp; 热度：
	
				<a href="">31</a>&nbsp;&nbsp;
	
			</div>
	
			<div class="fl thumbnail_box">
	<div class="thumbnail1">
			<li><a href="/more/study/1/1.html" :title="item.title" target="_blank"><i><img :src="item.thumbnail"></i>
      <!-- <h2 class="title">{{item.title}}</h2> -->
    </a> </li>
	</div>
			</div>
	<div class="article" v-html="item.article"><!-- 文章渲染 -->
		
	</div>
			<p class="readmore"><a href="">阅读全文&gt;&gt;</a></p>
	
			<div style="clear:both;"></div>
	
			<div class="r">
	
				<router-link :to="{path:'/blogarticle',query:{id:index,databaseid:item._id,totalpages:totalpages,pageSize:pageSize,currentPage:currentPage}}">
	
					<i class="fa fa-list"></i> 阅读全文»</router-link>
	
			</div>
	
			<div id="gaodu1"></div>
	
			<div class="line"></div>
	
	
	
		</article>
	
	
	

	
	
	
		<div id="pagenextandlast">
	
		<span class="pre" @click="prevOrNext(-1)"><svg viewBox="0 0 24 24" class="mu-pagination-svg-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg></span>
		<div class="btnlist"><span v-for="(item,index) in pages" :key='index' @click="openpage(item)" :class="{activecolor:item==currentPage}">
	
	{{item}}
		</span> </div>	
			<span class="next" @click="prevOrNext(1)"><svg viewBox="0 0 24 24" class="mu-pagination-svg-icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></span>
			 </div>
	
	</div>
</template>
<script>
import {getarticle} from '../../api/articleapi.js'
	import music from "@/components/music";
	
	import HeadNav from "@/components/base/headernav";
	
	import FooterBar from "@/components/base/footer";
	
	export default {
	
		components: {
	
			// HeadNav,
	
			// FooterBar,
	
			// music
	
		},
	
		data() {
	
			return {

  
				isshow: true,
	
				artshow: false,
	
				title: "",
	
				pbody: "",
	
				gettitle: "",
	
				article: [],
				totalpages:1,
				 pageSize:5,//每页请求5条数据,
				 currentPage:1,
				isactive:1,
				
			};
	
		},
	 computed: {
pages() {
   const c = this.currentPage
   const t = this.totalpages
   if(t>11){
   if (c <= 5) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', t] //第一种情况
   } else if (c >= t - 4) {
    return [1, '...', t-8, t-7, t-6, t-5, t-4, t-3, t-2, t-1, t] //第二种情况
   } else {
    return [1, '...', c-3, c-2, c-1, c, c+1, c+2, c+3, '...', t] //第三种情况
   }
}else{

	   var arr=[];
	  
	   for(var i=1;i<=this.totalpages;i++){
          arr.push(i)
	   }
	   return  arr//第4种情况
}

  }
 },
		methods: {
	prevOrNext (n) {
 this.currentPage += n
 this.currentPage < 1
 ? this.currentPage = 1
 : this.currentPage > this.totalpages
  ? this.currentPage = this.totalpages
  : null;

 this.$http.post(getarticle,{pageSize:this.pageSize,currentPage:this.currentPage}).then(response => {
	
					this.article = response.data.data;	
	
				});
  
},
		 format(timestemp){
    var format=new Date(timestemp)
    var year=format.getFullYear();
    var month=format.getMonth()+1;
    var day=format.getDate()
return year+'-'+month+'-'+day;
},
	openpage(index){
		if (index === this.currentPage) return
  if (typeof index=== 'string') return

		this.currentPage=index
 var doc = document.documentElement || document.body;
 doc.scrollTop=0;
 window.localStorage.setItem('pageSize',this.pageSize)
  window.localStorage.setItem('currentPage',index)
				this.$http.post(getarticle,{pageSize:this.pageSize,currentPage:index}).then(response => {
	
					this.article = response.data.data;	
	
				});
	},

			get(pageindex) {
	
				this.$http.post(getarticle,{pageSize:this.pageSize,currentPage:this.currentPage}).then(response => {

					// response = response.body;
	
					this.article = response.data.data;
	this.totalpages=( response.data.count)/this.pageSize;
		this.totalpages=Math.ceil(this.totalpages)	;	
	
				});
	
			},

			openart() {
	
				this.$nextTick(() => {
	
					this.ishow = false;
	
					this.artshow = true;
	
				});
	
			}
	
		},
	
		mounted() {
	
			this.get();
	
		}
	
	};
</script>
<style scoped>
.activecolor{
 background-color:#0c0!important;

}
	.article{
		height: 150px;
		overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
padding-left: 15px;
	}
/* .thumbnail_box li:last-child {
    margin-top: 19px;
} */

.thumbnail_box li {
	width: 206px;
    background: rgba(0,0,0,0.7);
	border-radius: 8px;
    position: relative;
    overflow: hidden;
}
.thumbnail_box a {
    text-decoration: none;
    color: #555;
}
.thumbnail_box li i {
    display: block;
	opacity: 0.7;
	border-radius: 8px;
    -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    overflow: hidden;
}
.thumbnail_box li:hover i {
    opacity: 1;
}
.thumbnail_box li i img {
	
	border-radius: 8px;
    width: 100%;
	height: 160px;
	transition: all 0.5s ease;
}
.thumbnail_box li:hover  img  {
	border-radius: 16px;
   transform: scale(1.1);
}
.thumbnail_box img {
border: 0px;
    display: block;
}
.thumbnail_box li .title {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    padding: 4px 20px;
    color: #fff;
    display: block;
    font-weight: normal;
	font-size: 12px;
	line-height: 24px;
    overflow: hidden;
    background: rgba(0,0,0,0.5);
    text-overflow: ellipsis;
    white-space: nowrap;
	overflow: hidden;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}
.mu-pagination-svg-icon {
   
    fill: currentColor;
}
</style>


