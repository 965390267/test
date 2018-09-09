<template>
    <div class="loading" v-show="loading">
    
        <div class="loading2">
    
            <div class="block"></div>
    
            <div class="block"></div>
    
            <div class="block"></div>
    
            <div class="block"></div>
    
        </div>
    
    <!-- <div class="lanren">
		<img src="../../assets/images/fsw.png">
		<img src="../../assets/images/boy.png">
		<img src="../../assets/images/girl.png">
        <img src="../../assets/images/shamegirl.png">
	</div> -->
    </div>
</template>
<script>
export default {
    name: 'loading',
    data() {
        return {
            loading: false
        }
    },
    created() {
        var that = this;
        this.bus.$on('loading', function(data) {
            that.loading = !!data;
        })
    }
}
</script>
<style scoped>
div.lanren{
		margin: 100px auto;
		width: 800px;
		animation: a 1000s;
		position: relative;
	}
	img:nth-child(2){
		position: absolute;
		top: 80px;
		left: 400px;
		animation: b 1000s;
		transform-origin:top center;
	}
	img:nth-child(3){
		position: absolute;
		top: 700px;
		left: 400px;
		animation: b 1000s;
		transform-origin:top center;
	}
	img:nth-child(4){
		position: absolute;
		top: 300px;
		left: 0px;
		animation: b 1000s;
		transform-origin:top center;
	}
	@keyframes a{
		form{transform: rotate(0deg)}
		to{transform: rotate(36000deg)}
	}
	@keyframes b{
		form{transform: rotate(0deg)}
		to{transform: rotate(-36000deg)}
	}
</style>



