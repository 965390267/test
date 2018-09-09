<template>
  <div id="contentleftt">
  
    <h2 class="biaoti" id="masked"></h2>
  
    <div class="xiantiao2"><img src="../../assets/images/xiantiao2.png"></div>
  
  
  
    <form method="post">
  
      <div class="cline"><input maxlength="200" id="ctitle" class="username" name="title" placeholder="Name"></div>
  
      <div class="cline"><input id="ctags" name="tags" class="useremail" maxlength="200" placeholder="Email"></div>
  <div class="cline"><textarea id="ctags" class="textarea" name="tags" maxlength="200" placeholder="Message"></textarea></div>
      <div class="cline">
  
        <!-- <select id="csort" name="sortid">
  
    <option value="-1">选择分类...</option>
  
    <option value="1">原创软件</option><option value="3">软件分享</option>
  
    <option value="4">源码分享</option><option value="2">精美文章</option>
  
    <option value="5">C语言笔记</option><option value="8">技术分享</option>
  
    <option value="9">趣味C语言</option><option value="10">算法之路</option>
  
    <option value="11">几何算法</option><option value="12">南阳ACM-范逸飞</option>
  
    <option value="13">Java数据结构与算法</option>
  
    </select> -->
  
        <!-- <img id="cimg" src="../../assets/images/att.png"> -->
  
        <!-- <input id="ccode" name="code" placeholder="验证码"> -->
  
        <input type="button" value="提交" id='comment_submit'>
  
      </div>
  
    </form>
  
    <div id="pagemenui">
  
    </div>
  
  
  
    
  
  </div>
</template>
<script>
  import music from "@/components/music";
  
  import HeadNav from "@/components/base/headernav";
  
  export default {
  
    components: {
  
      // HeadNav,
  
      // music
  
    }
  
  };
</script>
<style scoped>
  #ctitle {
  
    width: 90%;
  
  }
  
  
  
  #ccontent {
  
    width: 99%;
  
    height: 300px;
  
  }
  
  
  
  #ctags {
  
    width: 90%;
  
  }
  
  .username,.useremail{
    height: 36px;
    background-color: transparent;
    border: 1px solid #999;
  }
  
  #cimg {
  
    vertical-align: middle;
  
  }
  
  .textarea{
    height: 200px;
     background-color: transparent;
    border: 1px solid #999;
  }
  
  #tietuku_pick {
  
    max-width: 35%;
  
  }
  
  
  
  #tietuku_list {
  
    margin: 2px 0;
  
    font-size: 12px;
  
  }
  
  
  
  .tietuku_pic {
  
    margin: 2px;
  
    width: 200px;
  
    height: 150px;
  
    display: inline-block;
  
  }
  
  
  
  .tietuku_act {
  
    padding-top: 55px;
  
    width: 200px;
  
    height: 95px;
  
    background: rgba(0, 0, 0, 0.2);
  
    text-align: center;
  
  }
  
  
  
  .tietuku_act a {
  
    color: #fff;
  
    font-weight: bold;
  
    text-shadow: 1px 1px 3px #000;
  
  }
  
  form{
        width: 95%;
    margin: 0 auto;
  }
  
  .cline {
  
    margin: 6px 0;
    text-align: center;
  
  }
  #comment_submit{
    background: url('./../../assets/images/em_button.png') no-repeat;
    border: 0;
    font-size: 14px;
    font-family: \5FAE\8F6F\96C5\9ED1;
    color: #000000;
    width: 86px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    float: inherit;
  }
    #comment_submit:hover{
      background: url('./../../assets/images/em_button2.png') no-repeat;
    }
</style>


