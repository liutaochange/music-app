<template>
  <div>
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
    data(){
      return {
        text: (new Date()).getDate(),
        allSong:0,
        isShow:false,
        songsList:[],
        dialogOut:false,
        dialogMsg:""
      }
    },
    components: {
      loading,
      dialogOut
    },
    mounted(){
      var _this = this;
      // 获取每日推荐歌曲
      getRecomendSongs().then(res => {
        if(res.status == 200){
          let getData = res.data;
          _this.isShow = true;
          if(getData.code==301){
            _this.dialogMsg = "请求失败，请重试"
            _this.dialogOut = true;
            return false;
          }
          _this.songsList = getData.recommend;
          _this.allSong = getData.recommend.length;
        }else{
          console.log("error")
        }
      })
    },
    methods:{
      goBack:function(){
        window.history.go(-1);
      }
    }
  }
</script>
<style lang="less" scoped>
  *{margin: 0;padding: 0}
  .box-sizing{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .headerTop {
    width: 100%;
    height: 40px;
    background: #ce3d3e;
    font-size: 14px;
    line-height: 40px;
    color: #FEFEFE;
    text-align: center;
    .go_back {
      width: 25px;
      height: 40px;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      img {
        width: 16px;
        height: 20px;
        display: block;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
  }
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
  .content{
    width: 100%;
    padding: 0 3%;
    box-sizing: border-box;
    .title{
      width: 100%;
      height: 28px;
      overflow:hidden;
      .play_img{
        float: left;
        width: 16px;
        height: 16px;
        margin-top: 6px;
      }
      .play_text{
        float: left;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        width: auto;
        padding: 0;
        margin: 0 0 0 4px;
      }
    }
    .con{
      width: 100%;
      overflow: hidden;
      list-style: none;
      overflow: hidden;
      margin: 0;
      padding: 0;
      .item{
        float: left;
        width: 100%;
        height: 48px;
        border-top: 1px solid #999;
        overflow: hidden;
        position: relative;
        padding: 4px 0;
        box-sizing: border-box;
        .itenLeft{
          float: left;
          overflow: hidden;
          .name{
            font-size: 14px;
            color: #000;
          }
          .words{
            font-size: 13px;
            color: #999;
          }
        }
        .itemRight{
          float: right;
          .video_img{
            display: block;
            width: 40px;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
