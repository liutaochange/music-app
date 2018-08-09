<template>
  <div>
    <header class="mine_head">
      我的音乐
    </header>
    <ul class="main_con">
      <li>
        <img src="../../static/images/cm2_list_icn_dld_new@2x.png" alt="图片">
        <p class="name">我的下载</p>
      </li>
      <li>
        <img src="../../static/images/cm2_list_icn_recent_new@2x.png" alt="图片">
        <p class="name">最近播放</p>
      </li>
      <li>
        <img src="../../static/images/cm2_lay_icn_cloud@2x.png" alt="图片">
        <p class="name">我的云盘</p>
      </li>
      <li>
        <img src="../../static/images/cm4_my_icn_fav@2x.png" alt="图片">
        <p class="name">我的收藏</p>
        <p class="count">{{subcount.artistCount}}</p>
      </li>
    </ul>
    <ul class="userplaylist" v-if="!hide">
      <li class="sm_title">
        我创建的歌单 ({{subcount.createdPlaylistCount}})
      </li>
      <play :list="list"></play>
      <li class="sm_title">
        我收藏的歌单 ({{subcount.subPlaylistCount}})
      </li>
    </ul>
  </div>
</template>
<script>
  import { getItem } from 'utils/store.js'
  import { getUserSubcount, getUserPlayList } from 'api/index.js'
  import { USERKEY } from 'api/config.js'
  import play from '../components/play.vue'
  export default {
    data () {
      return {
        list: [],
        subcount: {},
        hide: true
      }
    },
    created () {
      this.checkUserInfo()
    },
    methods: {
      checkUserInfo () {
        let _this = this
        let userInfo = JSON.parse(getItem(USERKEY))
        if (userInfo === null || Object.getOwnPropertyNames(userInfo).length === 0) {
          _this.$router.push({path: '/login'})
        } else {
          let id = userInfo.account.id
          getUserSubcount(id).then((res) => {
            if (res.status === 200) {
              _this.subcount = res.data
              _this.hide = false
              console.log(_this.subcount)
            }
          })
          getUserPlayList(id).then((res) => {
            if (res.status === 200) {
              console.log(res.data)
            }
          })
        }
      }
    },
    components: {
      play
    }
  }
</script>
<style lang="less" scoped>
  .mine_head{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0 auto;
    height: 56px;
    line-height: 56px;
    font-size: 15px;
    color: #fff;
    background: #ce3d3e;
    text-align: center;
  }
  .main_con{
    margin-top: 56px;
    display: block;
    width:100%;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    li{
      float: left;
      width: 100%;
      position: relative;
      box-sizing: border-box;
      overflow: hidden;
      border-bottom: 1px solid #e1e2e3;
      img{
        float: left;
        width: 32px;
        margin-left: 15px;
        margin-top: 8px;
      }
      .name{
        margin-left: 10px;
        float: left;
      }
      .count{
        float: right;
        margin-right: 28px;
      }
    }
    li:after{
      content: "";
      position: absolute;
      width:14px;
      height:18px;
      right: 10px;
      top: 14px;
      background-size:100% auto;
      background-position:center center;
      background-repeat:no-repeat;
      background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAqCAMAAACeG2tsAAAAJFBMVEUAAACysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrIIg5e5AAAAC3RSTlMAV6UD/KinqaaqWKI0gd4AAABFSURBVDjLY2AgAzAyMWMXZ+FmxSrDxs2NXYaZfZDLsI8YGQ5sEqxACTYc4pzMtBVnH2Hi2BIhE67EyYUrqzFw4cicpAIAj9UHHcF4JeQAAAAASUVORK5CYII=);
    }
  }
  .userplaylist{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    .sm_title{
      float: left;
      display: block;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;
      color:#6a6a6a;
      background-color:#eeeff0;
    }
  }
</style>
