<template>
    <div>
    
        <div id="iitboy_logo" >
    
            <div class="title main-titcolor animated  infinite" href="/" title="寒光博客">
    
                <!-- <img src="../../assets/images/headlogo.png" class="animated tada"> -->
    WELCOME
    
            </div>
    
            <br>
    
            <div id="tock" style="top:-3px">
    
                <div class="hibox">
    
                    <div class="hi container">
    
                        <a href="javascript:;" onclick="getkoto();" title="换一条">
    
                            <div class="hitokoto animated shake " id="hitokoto" :style="{color:roundcolor()}">Loading...（欢迎来到逆水寒博客~我是会动的哟！）</div></a>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
        <div id="hjsbox"></div>
    
        <div id="sousuo2" title="在搜索框中输入关键字后，按“回车”即可搜到结果。">
    
            <form name="keyform" method="get" action="">
    
                <input name="keyword" type="search" placeholder="框中输文字，回车索结果。"></form>
    
        </div>
    
    </div>
</template>
<script>
    export default {
    
        data() {
    
            return {
    
                isactive: 1,
    
                indexarr: [],
    
                str: ''
    
            }
    
        },
    
    
    
        methods: {
            roundcolor(){

             
                return 'rgb(70, 51, 54)'; 

            },
    
            addclass(index) {
    
                sessionStorage.setItem('index', index);
    
                // this.isactive=Number( sessionStorage.getItem('index'));
    
            }
    
        },
    
        mounted() {
    
    
    
            this.isactive = Number(sessionStorage.getItem('index')) || 1;
    
        }
    
    }
</script>

<style scropd>
    /* @import "../../assets/css/basestyle/base-nav.min.css";
    
    @import "../../assets/css/basestyle/nav.css"; */
    
    #hitokoto{
        animation-duration: 4.5s
    }
    
    .main-titcolor {
    padding: 10px 0;
        font-family: "Segoe Script", 楷体;
    
    background: linear-gradient(to right,   #df613b, #e93168);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 50px;
    /* color:#ba4242!important; */
    }
    .hitokoto{
        /* rgb(110, 55, 23) */
          font-family: "Segoe Script", 楷体;
           background: linear-gradient(to right,  red, blue);
        -webkit-background-clip: text;
        color: transparent;
        color: #2599d8;
font-size: 18px;
    }
    .hitokoto:before, .hitokoto:after {
    content: attr(data-heading);
    position: absolute;
    overflow: hidden;
    left: 0px;
}

.hitokoto::before {
    height: 40%;
    z-index: 4;
    color: #f1573f;
}

.hitokoto::after {
    height: 60%;
    z-index: 3;
    color: #6abc4e;
}
</style>
