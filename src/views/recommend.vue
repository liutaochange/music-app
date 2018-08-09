<template>
  <div>
    <!--banner-->
    <section class="bannerBox" v-show="isShow">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <img :src="item.pic" alt="图片">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </section>
    <!--每日推荐-->
    <section class="recomdBox" v-show="isShow">
      <mu-row gutter>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="recn_ico"  @click="switchViews(1)">
            <img src="../../static/images/cm2_discover_icn_fm-ip6@2x.png" alt="图片">
          </div>
          <p>私人FM</p>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="recn_ico" :style="{height:accountHeight+'px'}" id="accountCenter" @click="switchViews(2)">
            <span>{{thisday}}</span>
          </div>
          <p>每日歌曲推荐</p>
        </mu-col>
        <mu-col width="33" tablet="33" desktop="33">
          <div class="recn_ico"  @click="switchViews(3)">
            <img src="../../static/images/cm2_discover_icn_upbill-ip6@2x.png" alt="图片">
          </div>
          <p>云音乐热歌榜</p>
        </mu-col>
      </mu-row>
    </section>
    <!--推荐歌单-->
    <section class="con" v-show="isShow">
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
    <!--最新音乐-->
    <section class="con" v-show="isShow">
      <div class="thePlaylist">
        <div class="rLeft">
          <img width="20" src="../../static/images/cm2_discover_icn_newest@2x.png" />最新音乐
        </div>
        <div class="rbtn"  data-t="1">更多></div>
      </div>
      <div class="imgList">
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33" v-for="item in newMusic" :key="item.id">
            <img :src="item.song.album.picUrl" alt="图片">
            <p class="nameFirst">{{item.name}}</p>
            <p class="remark">{{item.song.artists[0].name}}</p>
          </mu-col>
        </mu-row>
      </div>
    </section>
    <!--推荐MV-->
    <section class="con" v-show="isShow">
      <div class="thePlaylist">
        <div class="rLeft">
          <img width="20" src="../../static/images/cm2_discover_icn_newest@2x.png" />推荐MV
        </div>
        <div class="rbtn"  data-t="1">更多></div>
      </div>
      <div class="imgList">
        <mu-row gutter>
          <mu-col width="50" tablet="50" desktop="50" v-for="item in mvCon" :key="item.id">
            <img :src="item.picUrl" alt="图片">
            <p class="nameFirst">{{item.name}}</p>
            <p class="remark">{{item.artists[0].name}}</p>
          </mu-col>
        </mu-row>
      </div>
    </section>

    <!--主播电台-->
    <section class="con" v-show="isShow">
      <div class="thePlaylist">
        <div class="rLeft">
          <img width="20" src="../../static/images/cm2_discover_icn_newest@2x.png" />主播电台
        </div>
        <div class="rbtn"  data-t="1">更多></div>
      </div>
      <div class="imgList">
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33" v-for="item in hostCon" :key="item.id">
            <img :src="item.picUrl" alt="图片">
            <p class="name">{{item.name}}</p>
          </mu-col>
        </mu-row>
      </div>
    </section>
    <loading v-show="!isShow"></loading>
    <dialogOut v-show="dialogOut" v-bind:dialog-msg="dialogMsg" :show.sync="dialogOut"></dialogOut>
  </div>
</template>
<script>
  import loading from '../components/loading'
  import { getDefaultBanner, getPersonalized, getNewSong, getMv, getDjProgram } from '../api/index'
  import dialogOut from '../components/diaLog'
  export default {
    data () {
      return {
        banner: '',
        swiperOption: {
          initialSlide: 0,
          autoplay: 2500,
          direction: 'horizontal',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: false,
          observeParents: true,
          loop: true
        },
        accountHeight: '',
        thisday: (new Date()).getDate(),
        songList: '',
        newMusic: '',
        mvCon: '',
        hostCon: '',
        isShow: false,
        dialogOut: false,
        dialogMsg: ''
      }
    },
    components: {
      dialogOut,
      loading
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    created () {
      const that = this
      // 获取banner
      const promise1 = getDefaultBanner().then(res => {
        if (res.status === 200) {
          let getData = res.data
          that.banner = getData.banners
        } else {
          console.log('error')
        }
      })
      // 获取推荐歌单
      const promise2 = getPersonalized().then(res => {
        if (res.status === 200) {
          let getData = res.data
          console.log(res)
          that.songList = getData.result
        } else {
          console.log('error')
        }
      })
      // 获取最新音乐
      const promise3 = getNewSong().then(res => {
        if (res.status === 200) {
          let getData = res.data
          console.log(res)
          if (getData.result.length > 9) {
            getData.result.length = 9
          }
          that.newMusic = getData.result
        } else {
          console.log('error')
        }
      })
      // 获取推荐MV
      const promise4 = getMv().then(res => {
        if (res.status === 200) {
          let getData = res.data
          console.log(res)
          that.mvCon = getData.result
        } else {
          console.log('error')
        }
      })
      // 获取主播电台
      const promise5 = getDjProgram().then(res => {
        if (res.status === 200) {
          let getData = res.data
          console.log(res)
          that.hostCon = getData.result
        } else {
          console.log('error')
        }
      })
      Promise.all([promise1, promise2, promise3, promise4, promise5]).then(values => {
        that.isShow = true
        setTimeout(function () {
          that.getHeight()
          window.onresize = function () {
            that.getHeight()
          }
        }, 20)
      }, reason => {
        console.log(reason)
      })
    },
    // watch函数监测路由的变化,控制页面跳转
    watch: {
      '$route' (to, from) {
        const path = to.path
        var tmpArr = path.split('/')
        if (tmpArr[1] === 'index') {
          this.switchViews(tmpArr[2])
        }
      }
    },
    methods: {
      getHeight: function () {
        let obj = document.getElementById('accountCenter')
        this.accountHeight = obj.clientWidth
      },
      switchViews: function (type) {
        var _this = this
        switch (type) {
          case 1:
            _this.dialogMsg = '此功能暂未开通，敬请期待'
            _this.dialogOut = true
          // _this.$router.push({ path: '/fm'})
            break
          case 2:
            _this.$router.push({path: '/playlist'})
            break
          case 3:
            _this.$router.push({path: '/recsongs'})
            break
          default:
            break
        }
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
      .nameFirst{
        float: left;
        margin-top: 5px;
        width: 100%;
        overflow: hidden;
        line-height: 1;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .remark{
        float: left;
        margin-top: -5px;
        width: 100%;
        overflow: hidden;
        line-height: 1;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
</style>
