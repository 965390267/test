<template>
    <div id="zuixinwenzhang">
    
            <div id="zuixin_biaoti"><span>最新文章</span></div>
    
            <div id="zuixin_biankuang">
    
                <div class="wenzhang">
    
                    <ul>
    
                     
    
    
                        <li v-for='(item,index) in articles' :key='index' v-if='index<6'>
    
                            <em class="hotSoSo" v-html="index+1"></em>
    	<!-- <router-link :title="item.title" :to="{path:'/blogarticle',query:{id:index,databaseid:item._id}}">{{item.title}}</router-link> -->
                            <a  :title="item.title" @click="openarticle(item._id)">{{item.title}}</a>
                            </li>
<!--     
                        <li>
    
                            <em class="hotSoSo">5</em>
    
                            <a title="逆置单向链表" href="https://omist.cn/?post=51">逆置单向链表</a></li>  -->
    
                    </ul>
    
                </div>
    
            </div>
    
        </div>
</template>

<script>
    export default{
         data() {
    return {
	articles:[]
    };
  },
  methods:{
      openarticle(item){
this.$router.push({ path: "/blogarticle", query: { databaseid: item } });

this.bus.$emit('reflusharticle', true);
    //   this.$emit("reflush");
      },
 getmostnewarticle(){
      this.$http
          .get("api/getarticlemostnew")//获取最新几篇文章信息
          .then(res => {
          
          if(res.data.code==200){
                this.articles=res.data.data;
            console.log(res);
			
          }
		  });
	  },	 
  },
  mounted(){
this.getmostnewarticle()
  }
    }
</script>
