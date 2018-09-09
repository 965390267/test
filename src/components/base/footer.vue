<template>
    <div id="footerbar-out" style="clear:both; margin: 0 auto;padding: 0;">
    
        <div id="footerbar">
    
            <a  @click="top">返回顶部</a> &nbsp;&nbsp;
    
            <router-link to='/'>首页</router-link> &nbsp;&nbsp;
    
            <a title="手机版本" target="_blank">手机版本</a> &nbsp;&nbsp;
    
            <router-link to='/admin' class="hint--left hint--error" title="站长的后花园，闲人止步！ ^_^">后花园<span class="my-face">(●'◡'●)ﾉ♥</span></router-link>&nbsp;&nbsp;
    
            <!-- <a href="http://www.iitboy.cn/?plugin=yls_reg" title="会员注册" target="_blank">会员注册</a> &nbsp;&nbsp; -->
    
            <br>
    
            <router-link to='/' class="chaffle" ></router-link>&nbsp;&nbsp;&nbsp; 
    
            <span class="chaffle" >
    
    </span>&nbsp;&nbsp;&nbsp;
    
            Copyright&nbsp;&nbsp;㉢{{currentyear}}&nbsp;&nbsp; <a class="twitter" href="/"> ZZH博客. </a>All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;滇ICP备案:18003157
    
        </div>
    
        <div id="dening">
    
            <div id="shangxia" class="animated bounceInUp">
    
                <div id="shang" @click="top" title0="回到顶部"></div>
    
                <div id="comt" @click="mid">
    
                    <a id="ds-reset" title0="随便看看评论喽~"><img src="../../assets/articleimg/kongbai.png"></a>
    
                </div>
    
                <div id="xia" @click="foot" title0="直下底部"></div>
    
            </div>
    
    
    
        </div>
    
    </div>
</template>
<script>

export default {
  data(){
      return{
currentyear:''
      }
  },
  methods:{
      top(){
          var doc = document.documentElement || document.body;
  
  
var top = function () {
    // value就是当前的位置值
    // 例如我们可以设置DOM.style.left = value + 'px'实现定位
   doc.scrollTop-=10 ;
 
    if (doc.scrollTop > 0) { 
         // 继续运动
    var time=     requestAnimationFrame(top);
    } else {
        // 动画结束
        cancelAnimationFrame(time)
    }
};
top()
 
      },
      mid(){
           var doc = document.documentElement || document.body;
 doc.scrollTop=doc.scrollHeight/2;
      },
foot(){
     var doc = document.documentElement || document.body;
     let screenheight=doc.offsetHeight;
     doc.scrollTop=screenheight


}
  },
  mounted(){
    
      
      this.currentyear=new Date().getFullYear();
  }
}
</script>

<style scoped>
    .my-face {
    animation: my-face 5s infinite ease-in-out;
    display: inline-block;
    margin: 0 5px;
}
@keyframes my-face {
    2% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
}

4% {
    -webkit-transform: translateY(-1.5px) rotate(-.5deg);
    transform: translateY(-1.5px) rotate(-.5deg);
}

6% {
    -webkit-transform: translateY(1.5px) rotate(-1.5deg);
    transform: translateY(1.5px) rotate(-1.5deg);
}

8% {
    -webkit-transform: translateY(-1.5px) rotate(-1.5deg);
    transform: translateY(-1.5px) rotate(-1.5deg);
}

10% {
    -webkit-transform: translateY(2.5px) rotate(1.5deg);
    transform: translateY(2.5px) rotate(1.5deg);
}

12% {
    -webkit-transform: translateY(-.5px) rotate(1.5deg);
    transform: translateY(-.5px) rotate(1.5deg);
}

14% {
    -webkit-transform: translateY(-1.5px) rotate(1.5deg);
    transform: translateY(-1.5px) rotate(1.5deg);
}

16% {
    -webkit-transform: translateY(-.5px) rotate(-1.5deg);
    transform: translateY(-.5px) rotate(-1.5deg);
}

18% {
    -webkit-transform: translateY(.5px) rotate(-1.5deg);
    transform: translateY(.5px) rotate(-1.5deg);
}

20% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
}

22% {
    -webkit-transform: translateY(.5px) rotate(-1.5deg);
    transform: translateY(.5px) rotate(-1.5deg);
}

24% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
}

26% {
    -webkit-transform: translateY(.5px) rotate(.5deg);
    transform: translateY(.5px) rotate(.5deg);
}

28% {
    -webkit-transform: translateY(.5px) rotate(1.5deg);
    transform: translateY(.5px) rotate(1.5deg);
}

30% {
    -webkit-transform: translateY(-.5px) rotate(2.5deg);
    transform: translateY(-.5px) rotate(2.5deg);
}

32% {
    -webkit-transform: translateY(1.5px) rotate(-.5deg);
    transform: translateY(1.5px) rotate(-.5deg);
}

34% {
    -webkit-transform: translateY(1.5px) rotate(-.5deg);
    transform: translateY(1.5px) rotate(-.5deg);
}

36% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
}

38% {
    -webkit-transform: translateY(1.5px) rotate(-1.5deg);
    transform: translateY(1.5px) rotate(-1.5deg);
}

40% {
    -webkit-transform: translateY(-.5px) rotate(2.5deg);
    transform: translateY(-.5px) rotate(2.5deg);
}

42% {
    -webkit-transform: translateY(2.5px) rotate(-1.5deg);
    transform: translateY(2.5px) rotate(-1.5deg);
}

44% {
    -webkit-transform: translateY(1.5px) rotate(.5deg);
    transform: translateY(1.5px) rotate(.5deg);
}

46% {
    -webkit-transform: translateY(-1.5px) rotate(2.5deg);
    transform: translateY(-1.5px) rotate(2.5deg);
}

48% {
    -webkit-transform: translateY(-.5px) rotate(.5deg);
    transform: translateY(-.5px) rotate(.5deg);
}

50% {
    -webkit-transform: translateY(.5px) rotate(.5deg);
    transform: translateY(.5px) rotate(.5deg);
}

52% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
}

54% {
    -webkit-transform: translateY(-1.5px) rotate(1.5deg);
    transform: translateY(-1.5px) rotate(1.5deg);
}

56% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
}

58% {
    -webkit-transform: translateY(.5px) rotate(2.5deg);
    transform: translateY(.5px) rotate(2.5deg);
}

60% {
    -webkit-transform: translateY(2.5px) rotate(2.5deg);
    transform: translateY(2.5px) rotate(2.5deg);
}

62% {
    -webkit-transform: translateY(-.5px) rotate(2.5deg);
    transform: translateY(-.5px) rotate(2.5deg);
}

64% {
    -webkit-transform: translateY(-.5px) rotate(1.5deg);
    transform: translateY(-.5px) rotate(1.5deg);
}

66% {
    -webkit-transform: translateY(1.5px) rotate(-.5deg);
    transform: translateY(1.5px) rotate(-.5deg);
}

68% {
    -webkit-transform: translateY(-1.5px) rotate(-.5deg);
    transform: translateY(-1.5px) rotate(-.5deg);
}

70% {
    -webkit-transform: translateY(1.5px) rotate(.5deg);
    transform: translateY(1.5px) rotate(.5deg);
}

72% {
    -webkit-transform: translateY(2.5px) rotate(1.5deg);
    transform: translateY(2.5px) rotate(1.5deg);
}

74% {
    -webkit-transform: translateY(-.5px) rotate(.5deg);
    transform: translateY(-.5px) rotate(.5deg);
}

76% {
    -webkit-transform: translateY(-.5px) rotate(2.5deg);
    transform: translateY(-.5px) rotate(2.5deg);
}

78% {
    -webkit-transform: translateY(-.5px) rotate(1.5deg);
    transform: translateY(-.5px) rotate(1.5deg);
}

80% {
    -webkit-transform: translateY(1.5px) rotate(1.5deg);
    transform: translateY(1.5px) rotate(1.5deg);
}

82% {
    -webkit-transform: translateY(-.5px) rotate(.5deg);
    transform: translateY(-.5px) rotate(.5deg);
}

84% {
    -webkit-transform: translateY(1.5px) rotate(2.5deg);
    transform: translateY(1.5px) rotate(2.5deg);
}

86% {
    -webkit-transform: translateY(-1.5px) rotate(-1.5deg);
    transform: translateY(-1.5px) rotate(-1.5deg);
}

88% {
    -webkit-transform: translateY(-.5px) rotate(2.5deg);
    transform: translateY(-.5px) rotate(2.5deg);
}

90% {
    -webkit-transform: translateY(2.5px) rotate(-.5deg);
    transform: translateY(2.5px) rotate(-.5deg);
}

92% {
    -webkit-transform: translateY(.5px) rotate(-.5deg);
    transform: translateY(.5px) rotate(-.5deg);
}

94% {
    -webkit-transform: translateY(2.5px) rotate(.5deg);
    transform: translateY(2.5px) rotate(.5deg);
}

96% {
    -webkit-transform: translateY(-.5px) rotate(1.5deg);
    transform: translateY(-.5px) rotate(1.5deg);
}

98% {
    -webkit-transform: translateY(-1.5px) rotate(-.5deg);
    transform: translateY(-1.5px) rotate(-.5deg);
}

0%, 100% {
    -webkit-transform: translate(0) rotate(0);
    transform: translate(0) rotate(0);
}
}
</style>

