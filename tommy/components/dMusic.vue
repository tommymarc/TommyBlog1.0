<template>
  <div id="dMusic">
    <div class="d-audio" ></div>
  </div>
</template>

<script>
import musicList from '../assets/musicList.json'

export default {
  name: 'dMusic',
  props:['myMusic'],
  data(){
    return {
      d:'', //实力audio
      count:0,    //播放的歌
      musicList:[],
      smallBoxUrl:'',    //展示图片
    }
  },
  created(){
    this.musicList = musicList
  },
  watch: {
    myMusic(newName, oldName) {
      // console.log(newName);
      
      if(newName) this.myVideo()
    }
  },
  methods:{
    // 创建video
    myVideo(){
      // console.log(this.musicList);
      
      this.count = parseInt(Math.random()*10)
      this.count = this.count%2==1? 0:parseInt(Math.random()*10)
      // console.log(this.count );
      
      let {src, imageurl, name, singer} = this.musicList[this.count]
      this.smallBoxUrl = imageurl
      const d = new Daudio ({
        ele: '.d-audio',
        src,
        imageurl,
        name,
        singer,
        initstate: 'cricle',
        loop: false,
        next:  ()=> {
          this.count += this.count%2==1? 1: parseInt(Math.random()*10)

          if(this.count >= this.musicList.length) this.count = 0
          // console.log(this.count);
          
          let {src, imageurl, name, singer} = this.musicList[this.count]
          this.smallBoxUrl = imageurl
          d.checkAudio(src, imageurl, name, singer)
        },
        ended: ()=> {
          this.count += 1
          if(this.count >= this.musicList.length) this.count = 0
          let {src, imageurl, name, singer} = this.musicList[this.count]
          this.smallBoxUrl = imageurl
          
          d.checkAudio(src, imageurl, name, singer)
        }
      })
      d.play()
    },
    

    // 播放暂停
    playPause(){
      let d = this.d
      d.playPause()
    },

    //播放
    play(){
      let d = this.d
      d.play()
    }

  }
}
</script>

<style lang="less" scoped>


</style>
<style>
@font-face {
  font-family: 'icomoon';
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-next:before {
  margin-left: 2px;
  content: "\E98C";
}
.icon-play:before {
  content: "\E900";
}
.icon-pause:before {
  margin-left: 4px;
  content: "\E901";
}
@keyframes rotateMusicLogo {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotateMusicLogo {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-moz-keyframes rotateMusicLogo {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.audio-content {
  width: 100%;
  height: 100%;
  min-width: 240px;
  min-height: 50px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s;
  -webkit-transform-origin: right center;
  -moz-transform-origin: right center;
  transform-origin: right center;
  border-radius: 6px;
  user-select: none;
  transform: translate3d(0, 0, 0);
  font-family: 'PingFangSC-Regular', Arial, Helvetica, sans-serif;
}
.audio-content.cricle {
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
}
.audio-content.cricle .audio-detail {
  visibility: hidden;
  opacity: 0;
}
.audio-content.cricle .audio-detail .right-info {
  visibility: hidden;
  opacity: 0;
}
.audio-content.cricle .audio-cricle {
  visibility: visible;
  opacity: 1;
  z-index: 6;
  min-width: 50px;
  min-height: 50px;
}
.audio-content .audio-cricle {
  width: 50px;
  height: 50px;
  position: relative;
  visibility: hidden;
  overflow: hidden;
  transition: all 0.5s;
  opacity: 0;
  border-radius: 50%;
  transform: translate3d(0, 0, 0);
  -moz-animation: rotateMusicLogo 8s linear infinite;
  -webkit-animation: rotateMusicLogo 8s linear infinite;
  animation: rotateMusicLogo 8s linear infinite;
  -moz-animation-play-state: paused;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
  cursor: pointer;
}
.audio-content .audio-cricle img {
  width: 100%;
  height: 100%;
}
.audio-content .audio-cricle .d-audio-cricle-range {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 3px solid rgba(14, 90, 80, 0.397);
  border-radius: 50%;
}
.audio-content .audio-cricle.active {
  -moz-animation-play-state: running;
  -webkit-animation-play-state: running;
  animation-play-state: running;
}
.audio-content .audio-detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  border-radius: 8px;
  transition: all 0.5s;
  transform: translate3d(0, 0, 0);
}
.audio-content .audio-detail .left-config {
  flex: 0 0 90px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 5px 0 10px;
  box-sizing: border-box;
}
.audio-content .audio-detail .left-config i {
  display: block;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 36px;
  font-size: 22px;
  cursor: pointer;
}
.audio-content .audio-detail .left-config i.next {
  width: 28px;
  height: 28px;
  margin-left: 10px;
  line-height: 28px;
  font-size: 10px;
}
.audio-content .audio-detail .left-config i:hover {
  background: rgba(0, 0, 0, 0.5);
}
.audio-content .audio-detail .right-info {
  flex: 1 1 auto;
  height: 100%;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10px 0 5px;
  visibility: visible;
  opacity: 1;
  transition: all 0.5s;
}
.audio-content .audio-detail .right-info .m-title {
  font-size: 16px;
  padding: 1px 0;
  margin: 0;
  font-weight: 200;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  color: rgba(76, 250, 91, 0.801);
}
.audio-content .audio-detail .right-info .m-singer {
  font-weight: 200;
  padding: 1px 0;
  font-size: 12px;
  margin: 0;
  color: rgba(245, 255, 255, 0.8);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-align: center;
}
.audio-content .audio-bg {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-filter: blur(10px);
  filter: blur(10px);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  overflow: hidden;
  bottom: 0;
  height: unset;
}
.audio-content .audio-bg::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
.audio-content .audio-bg.draken::before {
  background: rgba(0, 0, 0, 0.3);
}
.audio-content .audio-loading {
  position: absolute;
  z-index: 12;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: all 0.5s;
  opacity: 0;
}
.audio-content .audio-loading svg {
  width: 36px;
  height: 36px;
}
.audio-content .audio-loading.active {
  visibility: visible;
  opacity: 1;
}
.audio-content .audio-progress {
  position: absolute;
  left: 0;
  height: 1px;
  bottom: 0;
  width: 0;
  background-image: linear-gradient(to right, rgba(255, 56, 56, 0.1) 30%, rgba(255, 56, 56, 0.6));
  transition: all 0.5s;
  z-index: 4;
}
</style>
