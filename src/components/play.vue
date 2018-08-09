<template>
  <div class="flexwamp">
    <div v-for="(item,index) in list" :key="index">
      <div class="flexitem" v-if="item.userId!=user.profile.userId">
        <router-link to="../playlist/index?pid=item.id" tag="a">
          <div class="flexleft">
            <!-- <img :src="item.coverImgUrl?param=100y100" class="album_cover" /> -->
          </div>
          <div class="flexmain">
            <p>{{item.name}}</p>
            <p class="relistdes">{{item.trackCount}}首，播放{{item.playCount}}次</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
<style lang="less" scoped>
  .flexwamp{
    width: 100%;
  }
  .flexitem{
    padding: 5px;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    line-height: 1.5;
    position: relative;
    border-bottom: 1px solid #e1e2e3;
    .flexleft {
      padding-right: 10px;
      vertical-align: middle;
      position: relative;
      img {
        vertical-align: middle;
      }
      img.album_cover{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
      }
    }
    .flex-center{
      display: flex;
      align-items: center;
    }
  }
  .flexlist {
    display: flex;
    align-items: stretch;
  }
  .flex-center {
    align-items: center;
  }
  .flexnum {
    flex: 0 0 80px;
    font-size: 30px;
    color: #999;
    text-align: center;
  }
  .flexact {
    text-align: right;
    font-size: 24px;
    color: #999;
    display: flex;
  }
  .flexmain {
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
  }
  .fm_tdes {
    font-size: 24px;
    color: #999;
  }
  .flexmain view {
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.6;
    width: 100%;
    word-wrap: break-word;
  }
  .flexmain view text {
    color: #999;
  }
  .flexmain .lname {
    max-height: 2.4em;
    line-height: 1.2;
    white-space: normal;
  }
</style>
