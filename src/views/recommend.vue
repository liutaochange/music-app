<template>
  <div>
    <!--banner-->
    <section class="bannerBox">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <img :src="item.pic" alt="图片">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </section>
    <!--每日推荐-->
    <section class="recomdBox">
      <mu-row gutter>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="recn_ico">
            <img src="../../static/images/cm2_discover_icn_fm-ip6@2x.png" alt="图片">
          </div>
          <p>私人FM</p>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="recn_ico" :style="{height:accountHeight+'px'}" id="accountCenter">
            <span>{{thisday}}</span>
          </div>
          <p>每日歌曲推荐</p>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="recn_ico">
            <img src="../../static/images/cm2_discover_icn_upbill-ip6@2x.png" alt="图片">
          </div>
          <p>云音乐热歌榜</p>
        </mu-col>
      </mu-row>
    </section>
    <section class="con">
      <div class="thePlaylist">
          <div class="rLeft">
            <img width="20" src="../../static/images/cm2_discover_icn_recmd@2x.png" />推荐歌单
          </div>
          <div class="rbtn"  data-t="1">更多></div>
      </div>
      <div class="imgList">
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33" v-for="item in songList" :key="item.id">
            <img :src="item.picUrl" alt="图片">
            <p class="name">{{item.name}}</p>
          </mu-col>
        </mu-row>
      </div>
    </section>
  </div>
</template>
<script>
  import { getDefaultBanner, getPersonalized, getNewSong, getMv, getDjProgram } from '../api/index'
  import dialogOut from '../components/diaLog'
  export default {
    data(){
      return {
        banner:"",
        swiperOption: {
          initialSlide :0,
          autoplay: 2500,
          direction : 'horizontal',
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : false,
          observeParents:true,
          loop:true
        },
        accountHeight:"",
        thisday: (new Date()).getDate(),
        songList:""
      }
    },
    components: {
      dialogOut
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      const that = this;
      // 获取banner
      getDefaultBanner().then(res => {
        if(res.status == 200){
          let getData = res.data;
          that.banner = getData.banners;
        }else{
          console.log("error")
        }
      })
      //获取推荐歌单
      getPersonalized().then(res => {
        if(res.status == 200){
          let getData = res.data;
          console.log(res)
          that.songList = getData.result;
        }else{
          console.log("error")
        }
      })
      //获取最新音乐
      getNewSong().then(res => {
        if(res.status == 200){
          let getData = res.data;
          console.log(res)
          that.songList = getData.result;
        }else{
          console.log("error")
        }
      })
      //获取推荐MV
      getMv().then(res => {
        if(res.status == 200){
          let getData = res.data;
          console.log(res)
          that.songList = getData.result;
        }else{
          console.log("error")
        }
      })
      //获取主播电台
      getDjProgram().then(res => {
        if(res.status == 200){
          let getData = res.data;
          console.log(res)
          that.songList = getData.result;
        }else{
          console.log("error")
        }
      })
      this.getHeight();
      var _this = this;
      window.onresize= function () {
        _this.getHeight()
      }
    },
    methods: {
      getHeight: function(){
        let obj = document.getElementById("accountCenter");
        this.accountHeight = obj.clientWidth;
      }
    }
  }
</script>
<style lang="less" scoped>
  .bannerBox{
    text-align: center;
    width: 100%;
    overflow: hidden;
    img{
      float: left;
      width: 100%;
      max-height: 300px;
    }
  }
  .recomdBox{
    width:100%;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    text-align: center;
    .col{
      position: relative;
      padding: 10px 0;
      .recn_ico{
        width: 75%;
        max-width: 100px;
        font-weight: 600;
        margin: 0 auto;
        border-radius: 50%;
        border: 1px solid #BB2C08;
        color: #BB2C08;
        text-align: center;
        position:relative;
        img{
          width: 100%;
          display: block;
        }
        span{
          position: absolute;
          width: 100%;
          left:0;
          top:50%;
          font-size: 28px;
          transform: translateY(-50%);
        }
      }
    }
  }
  .con{
    .thePlaylist{
      width: 100%;
      padding: 12px 5px 5px 5px;
      box-sizing: border-box;
      overflow: hidden;
      font-size: 14px;
      line-height: 18px;
      .rLeft{
        vertical-align: middle;
        line-height: 18px;
        float: left;
        img{
          margin-right: 5px;
          vertical-align: middle;
        }
      }
      .rbtn{
        float: right;
      }
    }
  }
  .imgList{
    width: 100%;
    padding: 12px 12px 0 12px;
    box-sizing: border-box;
    overflow: hidden;
    .col{
      margin-bottom: 8px;
      img{
        float: left;
        width: 100%;
      }
      .name{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
</style>
