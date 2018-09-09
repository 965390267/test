<template>
  <div id="rili">
      <div class="clock">
        <object type="application/x-shockwave-flash" data="clock.swf"  id="clock" style=" visibility: visible;   width: 100%;">
    <param name="base" value=".">
    <param name="wmode" value="Opaque">
    <param name="allowScriptAccess" value="always">
    <param name="quality" value="high"> 
    <param name="allowNetWorking" value="all"> 
    </object>
   
    </div>
            <div id="rili_biaoti"><span>日历</span></div>
    
            <div id="rili_biankuang" :style="{height:change_height+'px'}">
    
                <div id="calendar">
    
                    <table class="calendartop" cellspacing="0">
    
                        <tbody>
    
                            <tr>
    
                                <td><a href="javascript:void(0);" > « </a>{{thisyear}}<a href="javascript:void(0);" > » </a></td>
    
                                <td><a href="javascript:void(0);" > « </a>{{thismonth}}<a href="javascript:void(0);"> » </a></td>
    
                            </tr>
    
                        </tbody>
    
                    </table>
    
                    <ul class="calendar" >
    
                      
    
                            <ul class="calendar">
    
                                <li class="week">一 </li>
                                 <li class="week">二 </li>
    
                                 <li class="week">三</li>
    
                                 <li class="week">四</li>
    
                                 <li class="week">五 </li>
    
                                 <li class="week">六 </li>
    
                                 <li class="week">日</li>
    
                            </ul>
    
                           <ul class="calendar">
                               <li class='days' v-for='(days,index) in thismonthdays' :key='index'>
                                   <span v-if='days<first'>&nbsp; &nbsp;</span>
                                   <span v-else-if='days-first+1==thisday' :class="{day:days-first+1==thisday}">{{days-first+1}}</span>
                                   <span v-else>{{days-first+1}}</span>
                                 
                               </li>
                           </ul>
    
                          
    
                    </ul>
    
                </div>
    
            </div>

        </div>
</template>
<script>
export default {
  data() {
    return {
        clock:'../../assets/images/clock',
      thisyear: "",
      thismonth: "",
      thisday:'',
      thismonthdays: "",
      first: "",
      change_height:192
    };
  },
  methods: {
    daycompute() {
      let date = new Date();
      this.thisyear = date.getFullYear(),
        this.thismonth = date.getMonth() + 1;
        this.thisday=date.getDate();
    //   this.thismonth =
    //     this.thismonth > 10 ? this.thismonth : "0" + this.thismonth;
      let nextyear = this.thisyear,
        nextmonth = this.thismonth + 1;
      if (this.thismonth == 12) {
        nextyear += 1;
        nextmonth = 1;
      }
      
      this.first = new Date(this.thisyear, this.thismonth - 1, 1).getDay();
      this.first=this.first==0?7:this.first;
      if(this.first==7){
          this.change_height=230;
      }
      this.thismonthdays =
        Math.ceil(new Date(nextyear, nextmonth - 1, 1) - new Date(this.thisyear, this.thismonth - 1, 1) )/(24 * 3600 * 1000)+this.first-1;

   
    
    }
  },
  mounted() {
    this.daycompute();
  }
};
</script>
<style scoped>
.calendar{
    width: 100%;
}
.calendar .week{
   float:left;
    text-align: center;
    height: 30px;
    width: 36px;
}
.calendar .days {
  float: left;
  text-align: center;
  width: 36px;
  height: 30px;
  line-break: 30px;
}
.calendar .days span{
    padding:7px 10px;
}
.clock{
    border-radius: 4px;
}
</style>


