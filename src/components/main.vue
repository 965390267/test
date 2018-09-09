<template>
<div id='headwrap'>
	 <div class="bg-fixed"></div>

<dong-hua></dong-hua>

	
    <footer-bar></footer-bar>
		<loading></loading>
   
</div>
</template>
<script>
import FooterBar from "@/components/base/footer";
import loading from "@/components/base/loading";
import DongHua from "@/components/donghua/donghua";

export default {
  components: {
    FooterBar,
    loading,
    DongHua
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>

</style>


