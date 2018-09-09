<template>
  <div id='wrap-music' class="container" ref='musicbox' :style="{left:ismove+'px'}">
    <div class="pull" @click="musicbox">

    </div>
  <div id="player">
	<div class="cover" :class="{isrotate:rotate}"><img src='../assets/images/musicbox.jpeg'></div>
	<div class="ctrl">
		<div class="tag">
			<strong>{{musicsrc.musicname}}</strong>
			<span class="artist">Artist</span>
			<span class="album">Album</span>
      	<div class=" singlist" @click="showmusiclist"></div>
		</div>
		<div class="control">
			<div class="left">
				<div class="rewind icon"></div>
				<div class="playback icon" @click="pausebtn"></div>
				<div class="fastforward icon"></div>
			</div>
			<div class="volume right">
				<div class="mute icon left"  @click="novoice"></div>
				<div class="slider left" ref='slider'>
          <i class="point" @mousedown="movepoint($event)"></i>
					<div class="pace paceone" ref='line'></div>
				</div>
			</div>
		</div>
		<div class="progress">
			<div class="slider" ref='progressslider'>
				<div class="progresspoint" @mousedown="moveprogress($event)"></div>
				<div class="pace pacetwo" ref='currentprogress'></div>
			</div>
			<div class="timer left">{{currenttime}}</div>
			<div class="right">
        	<div class="timer left">{{alltime}}</div>
				<div class="repeat icon"></div>
				<div class="shuffle icon"></div>
        
			</div>
		</div>
	</div>
</div>
<ul id="playlist" v-if='hiddenlist'>
  <li v-for="(item,index) in musics" :key='index'  @click="choosemusic(index)" :class="{licolor:hascolor==index}">
{{item.musicname}}
  </li>
</ul>

   <audio :src='musicsrc' @canplaythrough='loaded()' @timeupdate="time()" @ended="end()" ref='music'>您的浏览器版本过低，请升级您的浏览器</audio>
  
  </div>
</template>

<script>
import {music} from './../api/musicapi'
export default {
  data() {
    return {
      hascolor: 0,
      ismove: -465,

      distx: 0,

      oStyle: "",
      rotate: false,

      hiddenlist: false,
      currenttime: "", //已播放时间
      alltime: "", //歌曲总时长
      isplay: true, //是否播放状态
      isnovoice: false, //是否静音状态
      sing: [
        "./bgm.mp3",
        "./bgm2.mp3",
        "./bgm3.mp3",
        "./bgm4.mp3",
        "./bgm5.mp3",
        "./bgm6.mp3",
        "./bgm7.mp3",
        "./bgm8.mp3",
        "./bgm9.mp3",
        "./bgm10.mp3"
      ], //歌曲路径数组
      musicsrc: require("../assets/audio/bgm.mp3"), //双向绑定音乐路径
      index: 0 //当前歌曲的索引
    };
  },

  methods: {
    loaded() {
      //歌曲加载完成可以播放后执行该函数
      this.$refs.music.play();
      this.rotate = true;
      this.alltime = this.$refs.music.duration;
      this.$refs.music.volume = 0.3;

      let allmm, allss;
      if (this.alltime < 60) {
        //把毫秒数转换为分和杪
        this.alltime = Math.round(this.alltime);
        if (this.alltime < 10) {
          //小于十秒前面加0
          this.alltime = "0" + Math.round(this.alltime);
        }
      } else {
        allmm = Math.floor(this.alltime / 60);
        allss = Math.round(this.alltime - allmm * 60);
        this.alltime = allmm + ":" + allss;
      }
    },
    pausebtn() {
      //播放以及暂停功能实现
      if (this.isplay) {
        this.$refs.music.pause();
        this.isplay = !this.isplay;
        this.rotate = false;
      } else {
        this.$refs.music.play();
        this.isplay = !this.isplay;
        this.rotate = true;
      }
    },
    novoice() {
      //静音功能实现
      this.isnovoice = !this.isnovoice;
      this.$refs.music.muted = this.isnovoice;
    },
    time() {
      //当前歌曲已经播放的时间
      this.currenttime = this.$refs.music.currentTime;
      let allmm, allss;
      if (this.currenttime < 60) {
        //把毫秒数转换为分和杪
        this.currenttime = Math.round(this.currenttime);
        if (this.currenttime < 10) {
          this.currenttime = "0" + Math.round(this.currenttime);
        }
      } else {
        allmm = Math.floor(this.currenttime / 60);
        allss = Math.round(this.currenttime - allmm * 60);
        this.currenttime = allmm + ":" + allss;
      }
      this.progress();
      // console.log(this.$refs.music.currentTime)
    },
    end() {
      //当前歌曲是否播放完成处理

      if (this.$refs.music.ended) {
        this.rotate = false;
        if (this.index < this.sing.length) {
          this.index++;
        } else {
          this.index = 0;
        }
        this.musicsrc = this.sing[this.index];
      }
    },
    next() {
      //下一曲
      if (this.index != this.sing.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      console.log(this.index);
      this.musicsrc = this.sing[this.index];
    },
    last() {
      //上一曲
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.sing.length - 1;
      }
      console.log(this.index);
      this.musicsrc = this.sing[this.index];
    },

    showmusiclist() {
      this.hiddenlist = !this.hiddenlist;
    },
    movepoint(e) {
      var Left = e.target;

      var leftw = Left.offsetWidth / 2;

      var lefth = Left.offsetHeight / 2;
      var that = this;
      document.onmousemove = function(e) {
        e.preventDefault();

        this.distx = e.clientX - that.$refs.slider.getBoundingClientRect().left;

        if (this.distx < 0) {
          this.distx = 1;
        }
        if (this.distx > 100) {
          this.distx = 100;
        }
        var currentvolume = (this.distx - 6) / 100;
        if (currentvolume <= 0) {
          currentvolume = 0;
        }
        if (currentvolume >= 1) {
          currentvolume = 1;
        }
        that.$refs.music.volume = currentvolume;
        document.getElementsByClassName("pace")[0].style.width =
          this.distx - 6 + "px";
        Left.style.left = this.distx - 6 + "px";
      };

      document.onmouseup = function() {
        document.onmousemove = null;
      };
    },
    progress() {
      //进度君

      var currentprogress =
        this.oStyle * this.$refs.music.currentTime / this.$refs.music.duration;

      if (currentprogress <= 0) {
        currentprogress = 0;
      }
      if (currentprogress >= this.$refs.music.duration) {
        currentprogress = this.$refs.music.duration;
      }
      this.$refs.currentprogress.style.width = currentprogress + "px";
      document.getElementsByClassName("progresspoint")[0].style.left =
        currentprogress + "px";
    },
    moveprogress(e) {
      //进度条按上去移动
 this.$refs.music.pause();
      var Left = e.target;

      var leftw = Left.offsetWidth / 2;

      var lefth = Left.offsetHeight / 2;
      var oStyle = this.$refs.progressslider.currentStyle
        ? this.$refs.progressslider.currentStyle
        : window.getComputedStyle(this.$refs.progressslider, null);
      oStyle = parseInt(oStyle["width"]);
      var that = this;
      document.onmousemove = function(e) {
        e.preventDefault();

        this.distx =
          e.clientX - that.$refs.progressslider.getBoundingClientRect().left;

        var currentprogress = this.distx * that.$refs.music.duration / oStyle;

        if (currentprogress <= 0) {
          currentprogress = 0;
        }
        if (currentprogress >= that.$refs.music.duration) {
          currentprogress = that.$refs.music.duration;
        }

        that.$refs.music.currentTime = currentprogress;
        that.currenttime = that.$refs.music.currentTime;
        document.getElementsByClassName("pace")[1].style.width =
          this.distx - 6 + "px";
        Left.style.left = this.distx - 6 + "px";
      };

      document.onmouseup = function() {
         that.$refs.music.play();
        document.onmousemove = null;
      };
    },

    musicbox() {
      // this.$refs.musicbox

      if (this.ismove == -465) {
        this.ismove = 0;
      } else {
        this.ismove = -465;
        this.hiddenlist = false;
      }
    },

    choosemusic(index) {
      this.rotate = true;
      this.hascolor = index; //歌曲列表选中状态颜色
      var m = this.musics[index]; //歌曲在数组中的索引
      //  this.alltime= this.$refs.controlmusic.duration;
      this.musicsrc = m.musicpath; //得出歌曲路径
    }
  },

  mounted() {
    this.oStyle = this.$refs.progressslider.currentStyle
      ? this.$refs.progressslider.currentStyle
      : window.getComputedStyle(this.$refs.progressslider, null);
    this.oStyle = parseInt(this.oStyle["width"]);
    this.$http.get(music).then(response => {
      this.musics = response.data;
    });
  },

  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.licolor {
  color: purple !important;
}
.leftmove {
  left: 0px;
}

#wrap-music {
  position: fixed;
  /* left: -550px; */
  top: 40%;
  z-index: 999;
  transition: all 1s ease-in-out;
}
.pull {
  position: absolute;
  left: 465px;
  top: 36px;
  width: 30px;
  height: 60px;
  background-image: url("./../assets/musicicon/pull.png");
  background-position-y: 50%;
  background-repeat: no-repeat;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
}
.left {
  float: left;
}

.right {
  float: right;
}

.clear {
  clear: both;
}

#player {
  width: 415px;
  height: 80px;
  padding: 25px;
  background: #cddcc3;
  border-radius: 4px;
  /* margin: 50px auto 30px; */
  position: relative;
}
#player .cover {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  position: absolute;
  top: 20px;
  left: 10px;
  overflow: hidden;
  -moz-border-radius: 75px;
  -webkit-border-radius: 75px;
  -o-border-radius: 75px;
  -ms-border-radius: 75px;
  -khtml-border-radius: 75px;
  border-radius: 75px;
  width: 90px;
  height: 90px;
  -moz-box-shadow: 2px 2px 10px black;
  -webkit-box-shadow: 2px 2px 10px black;
  -o-box-shadow: 2px 2px 10px black;
  box-shadow: 2px 2px 10px black;
}
.isrotate {
  animation: rotate 4s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
#player .cover img {
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  -khtml-border-radius: 10px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
#player .ctrl {
  position: absolute;
  width: 70%;
  top: 8px;
  margin-left: 100px;
  /* text-shadow: 0 1px 2px #000; */
  line-height: 16px;
}
#player .ctrl .tag {
  position: relative;
}
#player .ctrl .tag .singlist {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 10px;
  top: 20px;
  background: url("./../assets/musicicon/show.png");
  background-repeat: no-repeat;
  cursor: pointer;
}
#player .ctrl .tag strong,
#player .ctrl .tag span {
  display: block;
  text-overflow: ellipsis;
}
#player .ctrl .tag span {
  font-size: 12px;
  margin-top: 5px;
  color: #333;
}
#player .ctrl .slider {
  width: 90%;
}
#player .ctrl .icon {
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  opacity: 0.6;
  cursor: pointer;
  width: 24px;
  height: 24px;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
#player .ctrl .icon:hover,
#player .ctrl .icon.enable {
  opacity: 1;
}
#player .ctrl .icon:active {
  opacity: 0.3;
}
#player .ctrl .control {
  margin-top: 10px;
  height: 25px;
}
#player .ctrl .control .rewind {
  background-image: url(./../assets/musicicon/rewind.png);
}
#player .ctrl .control .playback {
  background-image: url("./../assets/musicicon/play.png");
}
#player .ctrl .control .playback.playing {
  background-image: url(./../assets/musicicon/pause.png);
}
#player .ctrl .control .fastforward {
  background-image: url(./../assets/musicicon/fastforward.png);
}
#player .ctrl .control .volume .mute {
  background-image: url(./../assets/musicicon/volume.png);
}
#player .ctrl .control .volume .mute.enable {
  background-image: url(./../assets/musicicon/mute.png);
}
#player .ctrl .control .volume .slider {
  margin-top: 11px;
  margin-left: 10px;
  width: 100px;
}
#player .ctrl .progress {
  margin-top: 10px;
}
#player .ctrl .progress .timer {
  font-size: 12px;
  color: #333;
  margin-top: 8px;
}
#player .ctrl .progress .repeat,
#player .ctrl .progress .shuffle {
  background-position: center bottom;
}
#player .ctrl .progress .repeat {
  background-image: url(./../assets/musicicon/repeat.png);
}
#player .ctrl .progress .repeat.once,
#player .ctrl .progress .repeat.all {
  opacity: 1;
}
#player .ctrl .progress .repeat.once {
  position: relative;
}
#player .ctrl .progress .repeat.once:before {
  content: "1";
  position: absolute;
  top: 3px;
  right: -2px;
  font-size: 8px;
}
#player .ctrl .progress .shuffle {
  background-image: url(./../assets/musicicon/shuffle.png);
}

.slider {
  background: rgba(0, 0, 0, 0.3);
  height: 5px;
  position: relative;
  cursor: pointer;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  -khtml-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset;
  -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset;
}
.slider:hover a,
.slider.enable a {
  opacity: 1;
}
.slider a {
  background: #fff;
  margin-left: -2.5px;
  position: absolute;
  opacity: 0;
  width: 5px;
  height: 5px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -khtml-border-radius: 50%;
  border-radius: 50%;
  -moz-transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.slider .loaded,
.slider .pace {
  position: absolute;
  height: 100%;
  opacity: 0.7;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  -khtml-border-radius: 5px;
  border-radius: 5px;
}
.slider .loaded {
  background: rgba(255, 255, 255, 0.1);
}
.slider .pace {
  background: linear-gradient(to right, #da81a1 35%,#7aa4c8 68%);
}
.slider .paceone {
   background: linear-gradient(to right, #e39f86 35%,#b0ba90 68%);
  width: 40px;
}
.slider .pacetwo {
  width: 0px;
}
.point {
  position: absolute;
  left: 40px;
  top: -3px;
  z-index: 9;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background: black;
}
.point:hover {
  box-shadow: 0 0 25px 5px hsla(210, 100%, 63%, 1);
}
.progresspoint {
  position: absolute;
  left: 40px;
  top: -3px;
  z-index: 9;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background: black;
}
.progresspoint:hover {
  box-shadow: 0 0 25px 5px hsla(210, 100%, 63%, 1);
}

#playlist {
  background: #d0e9d6;
  width: 436px;
  height: 160px;
  margin: 0 auto 50px;
  padding: 10px 15px;
  list-style: none;
  position: relative;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  -khtml-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  -o-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  overflow: auto;
}
#playlist li {
  color: #000;
  font-size: 12px;
  line-height: 2;
  padding-left: 25px;
  cursor: pointer;
  text-overflow: ellipsis;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
#playlist li:hover {
  color: #fff;
}
#playlist li.playing {
  background: url(./../assets/musicicon/playing.png) no-repeat 0 center;
  color: #fff;
  font-weight: bold;
}

footer {
  position: relative;
  font-size: 12px;
  color: white;
  margin-top: 160px;
  text-shadow: 0 1px 2px #000;
  text-align: center;
}
footer a {
  color: #fff;
  font-weight: bold;
}
footer a:hover {
  text-decoration: none;
}
</style>
