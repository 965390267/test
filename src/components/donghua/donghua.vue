<template>
  	 <div id='donghua'>
<head-nav></head-nav><!-- 这儿是log -->
 <div id="linkk">
         <menu-bar></menu-bar>

            <div id="content">
               <!-- <wei-yu></wei-yu> -->
               <router-view ></router-view>
                <!--end #contentleftt-->
             <slide-bar></slide-bar>
            </div>
        </div>
        <!--end #content-->

	 </div>
</template>
<script>
import HeadNav from "@/components/base/headernav";
import WeiYu from "@/components/weiyu/weiyu";

import MenuBar from "@/components/base/menu";
import SlideBar from "@/components/base/slidebar";


export default {
  components: {
    HeadNav,MenuBar,SlideBar,WeiYu
  },
  data(){
return{

}
  }
  ,
  methods:{
  
  },
  mounted(){


  }
};
</script>
