<template>
  <div class="body">
    <div class="headerTop">
      <div class="go_back" @click="goBack">
        <img src="../../static/images/go_back.png" alt="图片" />
      </div>
      <span>云音乐热歌榜</span>
    </div>
    <div id="plist-header">
      <div class="blurbg" id="plh-filterbg" :style="{backgroundImage: 'url(' + list.coverImgUrl + ')'}"></div>
      <div id="plh-main">
        <div id="plh-cover">
          <img src="" alt="" class="music_cover">
          <div class="img_playcount">
            <img src="../../static/images/p0.png" style="width:24px;height:24px;" />
          </div>
          <div id="plh-playinfo">
            <img src="../../static/images/cm2_list_detail_icn_infor@2x.png" />
          </div>
        </div>
        <div id="plh-cnt">
          <p id="music_h_name">{{list.name}}</p>
          <div >
            <!--<img id="user_ava" class="user_avator" src="" />-->
            <!--<p>{{list.creator.nickname}} </p>-->
            <img src="../../static/images/cm2_list_detail_icn_arr@2x.png" style="width:16px;height:24px;" />
          </div>
        </div>
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
        <li class="item" v-for="(item,index) in songsList" :key="item.id">
          <div class="listNum">
            {{index+1}}
          </div>
          <div class="itenLeft">
            <p class="name">{{item.name}}</p>
            <p class="words">{{item.ar[0].name}}-{{item.al.name}}</p>
          </div>
          <div class="itemRight">
            <img src="../../static/images/l0.png" alt="图片" class="video_img" v-if="item.mv!=0">
          </div>
        </li>
      </ul>
    </div>
    <loading v-show="!isShow"></loading>
  </div>
</template>
<script>
  import { getHotList } from "../api/index"
  import loading from "../components/loading"
  export default{
    data(){
      return {
        allSong: 0,
        songsList:[],
        isShow:false,
        id: 3778678,
        limit: 1000,
        list:{}
      }
    },
    components:{
      loading
    },
    mounted(){
      var _this = this;
      // 获取云音乐热歌榜
      getHotList(_this.id,_this.limit).then(res => {
        if(res.status == 200){
          let getData = res.data;
          _this.isShow = true;
          console.log(getData)
          _this.list = getData.playlist;
          _this.songsList = getData.playlist.tracks;
          _this.allSong = getData.playlist.trackCount;
        }else{
          console.log("error")
        }
      })
    },
    methods: {
      goBack: function(){
        window.history.go(-1);
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/common.less";
  #plist-header {
    position: relative;
    width: 100%;
    overflow: hidden;
    .blurbg {
      background-color: #eee;
      background-size: contain;
      background-repeat: no-repeat;
    }
    #plh-main {
      position: relative;
      z-index: 3;
      overflow: hidden
    }
  }
  #plh-cover {
    width: 280px;
    height: 280px;
    float: left;
    margin: 30px;
    position: relative;
    margin-bottom: 10px
  }

  #plh-cover img {
    width: 100%;
    height: 100%;
  }



  #plh-playinfo {
    position: absolute;
    z-index: 3;
    right: 10px;
    bottom: 10px;
  }

  #plh-playinfo img {
    width: 46px;
    height: 46px;
    vertical-align: top;
    background-color: rgba(0, 0, 0, .2);
    border-radius: 50%;
  }

  #user_ava {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
    vertical-align: middle;
  }

  #plh-cnt {
    margin-left: 280px;
    color: #fff;
    font-size: 24px;
    line-height: 50px
  }

  #music_h_name {
    font-size: 32px;
    padding: 60px 20px 40px 0;
    display: block
  }

</style>
