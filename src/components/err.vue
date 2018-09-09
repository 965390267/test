<template>

<div class="error" v-if='iserr'>
    <img class="keyboard"  src="../assets/images/baoqian.png" alt="Notfond"/>
  <router-link to='/'>
    <img class="keyboard-button" src="../assets/images/fanhui.png" alt="home"/>
  </router-link>
</div>


</template>
<script>
export default {
    name: 'iserr',
    data() {
        return {
            iserr: false
        }
    },
    created() {
        var that = this;
        this.bus.$on('iserr', function(data) {
            that.iserr = !!data;
        })
    }
}
</script>
<style scoped>


    
    .error {
        position: absolute;
        top:300px;
        left: 50%;
        transform: translateX(-50%);
         background: beige;
      width: 582px;
      height: 363px;
      margin: 0 auto;
      text-align: center;
    }

    .keyboard {
      display: block;
      width: 582px;
    }

    .keyboard-button {
      width: 180px;
      margin-top: 16px;
    }
    
    @media (max-width: 582px) {
      .error {
          
        width: 80%;
      }
      .keyboard {
        width: 100%;
      }
      .keyboard-button {
        width: 30%;
      }
    }
</style>

