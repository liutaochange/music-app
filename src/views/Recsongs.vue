<template>
  <div class="body">
    <div class="headerTop">
      <div class="go_back" @click="goBack">
        <img src="../../static/images/go_back.png" alt="图片" />
      </div>
      <span>云音乐热歌榜</span>
    </div>
    <div id="plist-header" v-show="isShow">
      <div class="blurbg" id="plh-filterbg">
        <img :src="list.coverImgUrl" alt="图片">
      </div>
      <div id="plh-main">
        <div id="plh-cover">
          <img :src="list.coverImgUrl" alt="图片" class="music_cover">
          <div class="img_playcount">
            <img src="../../static/images/p0.png" style="width:12px;height:12px;" />
            <span>{{list.playCount}}</span>
          </div>
          <div id="plh-playinfo">
            <img src="../../static/images/cm2_list_detail_icn_infor@2x.png" />
          </div>
        </div>
        <div id="plh-cnt">
          <p id="music_h_name">{{list.name}}</p>
          <div class="info_name">
            <img id="user_ava" :src="avatarUrl" />
            <span>{{nickname}} </span>
            <img src="../../static/images/cm2_list_detail_icn_arr@2x.png" style="width:12px;height:16px;" />
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
  import { getHotList } from '../api/index'
  import loading from '../components/loading'
  export default{
    data () {
      return {
        allSong: 0,
        nickname: '',
        avatarUrl: '',
        songsList: [],
        isShow: false,
        id: 3778678,
        limit: 1000,
        list: {}
      }
    },
    components: {
      loading
    },
    created () {
      var _this = this
      // 获取云音乐热歌榜
      getHotList(_this.id, _this.limit).then(res => {
        if (res.status === 200) {
          let getData = res.data
          _this.list = getData.playlist
          _this.songsList = getData.playlist.tracks
          _this.allSong = getData.playlist.trackCount
          _this.avatarUrl = getData.playlist.creator.avatarUrl
          _this.nickname = getData.playlist.creator.nickname
          _this.isShow = true
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
  #plist-header {
    position: relative;
    width: 100%;
    overflow: hidden;
    .blurbg {
      float: left;
      width: 100%;
      height: 220px;
      background-color: #eee;
      overflow: hidden;
      img{
        display: block;
        vertical-align: top;
      }
    }
    #plh-main {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 3;
      overflow: hidden;
      #plh-cover {
        width: 160px;
        height: 160px;
        float: left;
        position: relative;
        margin: 30px 10px 30px 10px;
        &  .music_cover {
          display: block;
          width: 100%;
          height: 100%;
        };
        &  .img_playcount {
          position: absolute;
          top: 0;
          right: 0;
          width:100%;
          height: 26px;
          line-height: 26px;
          font-size: 13px;
          color: #fff;
          text-align: right;
          padding-right: 10px;
          box-sizing: border-box;
        }
      }
    }
  }

  #plh-playinfo {
    position: absolute;
    z-index: 3;
    right: 10px;
    bottom: 10px;
  }
  #plh-playinfo img {
    width: 24px;
    height: 24px;
    vertical-align: top;
    background-color: rgba(0, 0, 0, .2);
    border-radius: 50%;
  }
  #user_ava {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    vertical-align: middle;
  }

  #plh-cnt {
    margin-left: 200px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    .info_name{
      vertical-align: middle;
      span, img{
        vertical-align: middle;
      }
    }
  }

  #music_h_name {
    font-size: 15px;
    padding: 60px 20px 40px 0;
    display: block
  }

</style>
