<template>
  <div class="body">
    <div class="headerTop">
      <div class="go_back" @click="goBack">
        <img src="../../static/images/go_back.png" alt="图片" />
      </div>
      <span>每日推荐</span>
    </div>
    <div id="recs_header">
      <img src="http://s2.music.126.net/style/web2/img/recmd_daily.jpg" alt="图片" class="head-bg">
      <div id="date">
        <span class="text">{{text}}</span>
        <img src="../../static/images/cm2_daily_cal_bg@2x.png" alt="图片" class="text-bg">
      </div>
    </div>
    <div class="content" v-show="isShow">
      <div class="title">
        <img src="../../static/images/pl-playall.png" alt="图片" class="play_img">
        <p class="play_text">
          播放全部 <span>(共{{allSong}}首)</span>
        </p>
      </div>
      <ul class="con">
        <li class="item" v-for="item in songsList" :key="item.id">
          <div class="itenLeft">
            <p class="name">{{item.name}}</p>
            <p class="words">{{item.artists[0].name}}-{{item.album.name}}</p>
          </div>
          <div class="itemRight">
            <img src="../../static/images/l0.png" alt="图片" class="video_img" v-if="item.mvid!=0">
          </div>
        </li>
      </ul>
    </div>
    <loading v-show="!isShow"></loading>
    <dialogOut v-show="dialogOut" v-bind:dialog-msg="dialogMsg" :show.sync="dialogOut"></dialogOut>
  </div>
</template>
<script>
  import loading from '../components/loading'
  import dialogOut from '../components/diaLog'
  import { getRecomendSongs } from '../api/index'
  export default{
    data () {
      return {
        text: (new Date()).getDate(),
        allSong: 0,
        isShow: false,
        songsList: [],
        dialogOut: false,
        dialogMsg: ''
      }
    },
    components: {
      loading,
      dialogOut
    },
    mounted () {
      var _this = this
      // 获取每日推荐歌曲
      getRecomendSongs().then(res => {
        if (res.status === 200) {
          let getData = res.data
          _this.isShow = true
          if (getData.code === 301) {
            _this.dialogMsg = '尚未登录，请先登录'
            _this.dialogOut = true
            setTimeout(function () {
              _this.$router.push({path: '/login'})
            }, 1500)
            return false
          }
          _this.songsList = getData.recommend
          _this.allSong = getData.recommend.length
        } else {
          console.log('error')
        }
      })
    },
    methods: {
      goBack: function () {
        window.history.go(-1)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/common.less";
  #recs_header {
    width: 100%;
    overflow: hidden;
    position: relative;
    .head-bg {
      float: left;
      width: 100%;
    }
    #date {
      position: absolute;
      left: 3%;
      top: 50%;
      width: 80px;
      text-align: center;
      overflow: hidden;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      .text {
        position: absolute;
        top: 50%;
        left: 0;
        font-size: 50px;
        width: 100%;
        text-align: center;
        transform: translateY(-50%);
        color: #BB2C08
      }
      .text-bg{
        width:100%;
        float: left;
      }
    }
  }
</style>
