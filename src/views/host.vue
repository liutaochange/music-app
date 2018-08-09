<template>
  <div>
    <div class="box" v-show="isShow">
      <!--电台分类-->
      <section class="tab_cnt">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper_wamp">
          <swiper-slide v-for="(item,index) in [1,2,3]" :key="index">
            <div class="demo-grid">
              <mu-row gutter>
                <mu-col width="25" tablet="25" desktop="25" v-if="(idx<item*8)&&(idx>=(item-1)*8)" v-for="(items,idx) in catelist" :key="idx">
                  <img :src="items.pic56x56Url" alt="图片" width="52" height="52">
                  <p class="djName">{{items.name}}</p>
                </mu-col>
              </mu-row>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </section>
      <div class="recommend_wamp">
        <h1 class="title">{{recommend.name}}</h1>
        <div class="rec_wamp">
          <div class="rec_item" v-for="(item,index) in recommend.programs" :key="index">
            <img :src="item.coverUrl" alt="图片" class="left_img">
            <div class="text">
              <p class="text_top">{{item.name}}</p>
              <p class="text_bottom">{{item.reason}}</p>
            </div>
          </div>
        </div>
      </div>
      <!--推荐节目-->
      <div class="recommend_wamp">
        <h1 class="title">{{recommend.name}}</h1>
        <div class="rec_wamp">
          <div class="rec_item" v-for="(item,index) in recommend.programs" :key="index">
            <img :src="item.coverUrl" alt="图片" class="left_img">
            <div class="text">
              <p class="text_top">{{item.name}}</p>
              <p class="text_bottom">{{item.reason}}</p>
            </div>
          </div>
        </div>
      </div>
      <!--精选电台-->
      <div class="recommend_wamp">
        <h1 class="title">{{djcate.name}}</h1>
        <div class="imgList">
          <mu-row gutter>
            <mu-col width="33" tablet="33" desktop="33" v-for="(item,index) in djcate.djRadios" :key="index">
              <img :src="item.picUrl" alt="图片">
              <p class="name">{{item.copywriter}}</p>
            </mu-col>
          </mu-row>
        </div>
      </div>
      <!--热门电台-->
      <div class="recommend_wamp">
        <h1 class="title">热门电台</h1>
        <div class="imgList">
          <mu-row gutter>
            <mu-col width="50" tablet="50" desktop="50" v-for="(item,index) in hotDj.list.djRadios" :key="index">
              <img :src="item.picUrl" alt="图片">
              <p class="name">{{item.name}}</p>
            </mu-col>
          </mu-row>
        </div>
      </div>
    </div>
    <loading v-show="!isShow"></loading>
  </div>
</template>
<script>
  import loading from '../components/loading'
  import {getDjradio, getDjradioPro, getDjradioRec, getDjradioHot} from '../api/index'
  export default{
    data () {
      return {
        swiperOption: {
          initialSlide: 0,
          autoplay: 3500,
          direction: 'horizontal',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: false,
          observeParents: true,
          loop: true
        },
        catelist: '', // 主播电台分类
        recommend: '', // 推荐节目
        djcate: '', // 精选电台
        hotDj: {  // 热门电台
          idx: 2,
          list: '',
          limit: 20,
          offset: 0
        },
        isShow: false
      }
    },
    components: {
      loading
    },
    created () {
      this._getData()
    },
    methods: {
      _getData () {
        var _this = this
        // 获取电台分类
        const promiseDj = getDjradio().then(res => {
          if (res.status === 200) {
            let getData = res.data
            _this.catelist = getData.categories
          } else {
            console.log('error')
          }
        })
        // 获取推荐节目
        const promiseDjradio = getDjradioPro().then(res => {
          if (res.status === 200) {
            _this.recommend = res.data
          } else {
            console.log('error')
          }
        })
        // 获取精选电台
        const promiseDjrec = getDjradioRec().then(res => {
          if (res.status === 200) {
            let getData = res.data
            if (getData.djRadios.length > 6) {
              getData.djRadios.length = 6
            }
            _this.djcate = getData
          } else {
            console.log('error')
          }
        })
        // 获取热门电台
        const promiseDjhot = getDjradioHot().then(res => {
          if (res.status === 200) {
            let getData = res.data
            _this.hotDj.list = getData
            _this.hotDj.offset = getData.djRadios.length
          } else {
            console.log('error')
          }
        })
        Promise.all([promiseDj, promiseDjradio, promiseDjrec, promiseDjhot]).then(values => {
          _this.isShow = true
        }, reason => {
          console.log('error')
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .box{
    text-align: center;
    padding: 12px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    .tab_cnt{
      padding-top: 12px;
      .swiper_wamp{
        padding-bottom: 20px;;
      }
      .djName{
        float: left;
        margin-top: -5px;
        width:100%;
        font-size: 12px;
      }
    }
  }
  .title{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-indent: 8px;
    position: relative;
    text-align: left;
    font-size: 15px;
  }
  .title:before{
    background-color:red;
    width: 2px;
    height: 16px;
    content:"";
    vertical-align:middle;
    position: absolute;
    left: 0;
    top: 2px;
  }
  .recommend_wamp{
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    .rec_wamp{
      width: 100%;
      overflow: hidden;
      list-style: none;
      .rec_item{
        width: 100%;
        float: left;
        margin-bottom: 5px;
        .left_img{
          width: 50px;
          height: 50px;
          float: left;
        }
        .text{
          margin-left: 58px;
          height: 50px;
          position: relative;
          overflow: hidden;
          p{
            float: left;
            width: 100%;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            text-align: left;
            line-height: 1;
          }
          .text_top{
            font-size: 15px;
            color: #000;
            margin-top: 5px;
            margin-bottom: 8px;
          }
          .text_bottom{
            font-size: 13px;
            color: #999;
            margin-top: 5px;
          }
        }
      }
    }
  }
  .imgList{
    width: 100%;
    padding: 12px 12px 0 12px;
    box-sizing: border-box;
    overflow: hidden;
    .col {
      margin-bottom: 8px;
      img {
        float: left;
        width: 100%;
      }
      .name {
        text-align: left;
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
