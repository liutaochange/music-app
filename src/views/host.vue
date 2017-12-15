<template>
  <div>
    <div class="box">
      <section class="tab_cnt">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in banner" :key="index">
            <div class="demo-grid">
              <mu-row gutter>
                <mu-col width="25" tablet="25" desktop="25">col-100<br/>tablet-50<br/>desktop-33</mu-col>
              </mu-row>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>




        <!--<block wx:if="{{djcate.loading}}">-->
          <!--<swiper indicator-dots="true" circular="true">-->
            <!--<swiper-item wx:for-items="{{[1,2,3]}}" class="djcatewrap">-->
              <!--<view bindtap="djradiotype" wx:if="{{(idx<item*8)&&(idx>=(item-1)*8)}}" class="djcatelist" data-djtype="{{re.id}}" wx:for-items="{{djcate.categories}}" wx:for-item="re" wx:for-index="idx">-->
                <!--<img src="{{re.pic56x56Url}}" class="slide-img" width="56" height="56" />-->
                <!--<view>{{re.name}}</view>-->
              <!--</view>-->
            <!--</swiper-item>-->
          <!--</swiper>-->
          <!--<view class="listheader">{{djrecs.rec_p.name}}</view>-->
          <!--<view wx:for="{{djrecs.rec_p.programs}}" class="playlist" wx:for-item="re" wx:key="{{re}}">-->
            <!--<navigator url="../program/index?id={{re.mainSong.id}}&pid={{re.id}}">-->
              <!--<view class="flexlist  flex-img">-->
                <!--<view class="flexleft fl-img">-->
                  <!--<img src="{{re.coverUrl}}?param=100y100" class="album_cover" />-->
                <!--</view>-->
                <!--<view class="flexlist">-->
                  <!--<view class="flexmain">-->
                    <!--<view>{{re.name}}</view>-->
                    <!--<view class="relistdes">{{re.reason}}</view>-->
                  <!--</view>-->
                <!--</view>-->
              <!--</view>-->
            <!--</navigator>-->
          <!--</view>-->
          <!--<view class="listheader">{{djrecs.rec_d.name}}</view>-->
          <!--<view class='flex-boxlist'>-->
            <!--<view class="tl_cnt cateplaylist" wx:for-items="{{djrecs.rec_d.djRadios}}" wx:for-index="idx" wx:if="{{idx<6}}" wx:key="{{item.id}}">-->
              <!--<navigator url="../djradio/index?id={{item.id}}">-->
                <!--<view class="cover">-->
                  <!--<img src="{{item.picUrl}}?param=200y200" class="music_cover" />-->
                <!--</view>-->
                <!--<text class="name">{{item.copywriter}}</text>-->
              <!--</navigator>-->
            <!--</view>-->
          <!--</view>-->
          <!--<view class="listheader">热门电台</view>-->
          <!--<view class='flex-boxlist flex-two'>-->
            <!--<view class="tl_cnt cateplaylist" wx:for-items="{{djlist.list.djRadios}}" wx:key="{{item.id}}">-->
              <!--<navigator url="../djradio/index?id={{item.id}}">-->
                <!--<view class="cover">-->
                  <!--<img src="{{item.picUrl}}?param=200y200" class="music_cover" />-->
                  <!--<text>{{item.creator.nickname}}</text>-->
                  <!--<view class="img_playcount">-->
                    <!--<template is="img" data="{{src:'../../../img/cm2_list_icn_subscribe@2x.png',width:24}}" />{{item.subCount}}订阅</view>-->
                <!--</view>-->
                <!--<text class="name">{{item.name}}</text>-->
              <!--</navigator>-->
            <!--</view>-->
          <!--</view>-->
          <!--<template wx:if="{{djlist.loading&&djlist.list.hasMore}}" is="loading" />-->
        <!--</block>-->
        <!--<template wx:else is="loading" />-->
      </section>
    </div>
  </div>
</template>
<script>
  import {getDjradio,getDjradioPro,getDjradioRec,getDjradioHot} from "../api/index"
  export default{
    data(){
      return {
        msg: "host"
      }
    },
    mounted(){
      var _this = this;
      // 获取电台分类
      getDjradio().then(res => {
        if(res.status == 200){
          let getData = res.data;
          that.banner = getData.banners;
        }else{
          console.log("error")
        }
      })
      //获取推荐节目
      getDjradioPro().then(res => {
        if(res.status == 200){
          let getData = res.data;
          console.log(res)
          that.songList = getData.result;
        }else{
          console.log("error")
        }
      })
      //获取精选电台
      getDjradioRec().then(res => {
        if(res.status == 200){
          let getData = res.data;
          console.log(res)
          if (getData.result.length>9){
            getData.result.length = 9;
          }
          that.newMusic = getData.result;
        }else{
          console.log("error")
        }
      })
      //获取热门电台
      getDjradioHot().then(res => {
        if(res.status == 200){
          let getData = res.data;
          console.log(res)
          that.mvCon = getData.result;
        }else{
          console.log("error")
        }
      })
    }
  }
</script>
<style lang="less" scoped>
  .box{
    text-align: center;
  }
</style>
