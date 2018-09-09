<template>
  <div id="app">
  
  <music></music>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import music from "@/components/music";
  export default {
     components: {
      music
      },
    name: "app",
    data() {
      return {
        transitionName: "slide-left",
  
      };
    },
    updated() {
  
    },
  
    methods: {
  
  
  
  
    },
    mounted() {
  
  
    }

  };
</script>

<style>
  body {
    background: url('./assets/images/mainbg.jpg') rgba(194, 240, 194, 0.99) no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  
  @media screen and (max-width:800px) {
    body {
      padding: 0;
      background: url('./assets/images/sjbj.jpg') rgba(194, 240, 194, 0.99) no-repeat;
      background-attachment: fixed;
      color: #323232;
      margin: 0;
      font: small 'Microsoft Yahei';
      background-size: cover;
    }
  }
  
  .child-view {
    /* position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 1; */
    /* overflow-x: hidden;
    overflow-y: auto; */
    height: 100%;
    transition: all 1s ease-in-out;
  }
  
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    /* -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0); */
  }
  
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    /* -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0); */
  }
  
  li {
    cursor: pointer;
  }
</style>
