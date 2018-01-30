<template>
  <div>
    <div class="headerTop">
      <div class="go_back" @click="goBack">
        <img src="../../static/images/go_back.png" alt="图片" />
      </div>
      <span>云音乐热歌榜</span>
    </div>
    <div class="header"></div>
    <div class="content" v-show="isShow">
      <div class="title">
        <img src="../../static/images/pl-playall.png" alt="图片" class="play_img">
        <p class="play_text">
          播放全部 <span>(共{{allSong}}首)</span>
        </p>
      </div>
      <!--<ul class="con">-->
        <!--<li class="item" v-for="item in songsList" :key="item.id">-->
          <!--<div class="itenLeft">-->
            <!--<p class="name">{{item.name}}</p>-->
            <!--<p class="words">{{item.artists[0].name}}-{{item.album.name}}</p>-->
          <!--</div>-->
          <!--<div class="itemRight">-->
            <!--<img src="../../static/images/l0.png" alt="图片" class="video_img" v-if="item.mvid!=0">-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
    <loading v-show="!isShow"></loading>
  </div>
</template>
<script>
  import {getHotList} from "../api/index"
  import loading from "../components/loading"
  export default{
    data(){
      return {
        allSong: 0,
        songsList:[],
        isShow:false,
        id: 3778678,
        limit: 1000
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
//          _this.songsList = getData.recommend;
//          _this.allSong = getData.recommend.length;
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

</style>
