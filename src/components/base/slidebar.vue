<template>
    <div id="sidebar" style="background-color: rgba(255, 255, 255, 0.6);">
    <calendar></calendar>
       <sousuo></sousuo>
       <biaoqian></biaoqian>
       <fenlei></fenlei>
       <cundang></cundang>
       <pinglun></pinglun>
         <weiyu></weiyu>
    <!-- <youqinglianjie></youqinglianjie> -->
    <!-- <zuixinwenzhang></zuixinwenzhang> -->
    </div>
</template>
<script>
import calendar from "@/components/decorate/calendar";
import sousuo from "@/components/decorate/sousuo";
import biaoqian from "@/components/decorate/biaoqian";
import fenlei from "@/components/decorate/fenlei";
import cundang from "@/components/decorate/cundang";
import pinglun from "@/components/decorate/pinglun";
import weiyu from "@/components/decorate/weiyu";
import youqinglianjie from "@/components/decorate/youqinglianjie";
import zuixinwenzhang from "@/components/decorate/zuixinwenzhang";
export default {
  components: {
    calendar,
    sousuo,
    biaoqian,
    fenlei,
    cundang,
    pinglun,
    weiyu,
    youqinglianjie,
    zuixinwenzhang
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
