<template>
    <div class="con">
      <section class="official_list">
        <h1 class="title">云音乐官方榜</h1>
        <div class="rec_wamp">
          <div class="rec_item" v-for="(item,index) in topList.list" :key="index">
            <img :src="item.coverImgUrl" alt="图片" class="left_img">
            <div class="text">
              <p v-for="(items,idx) in item.tracks" :key="idx">
                {{idx+1}}．{{items.first}} - <span>{{items.second}}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="global_list">
        <h1 class="title">全球榜</h1>
        <div class="imgList">
          <mu-row gutter>
            <mu-col width="33" tablet="33" desktop="33" v-for="(item,index) in topList.list" :key="index">
              <img :src="item.coverImgUrl" alt="图片">
              <p class="name">{{item.name}}</p>
            </mu-col>
          </mu-row>
        </div>
      </section>
    </div>
</template>
<script>
  import { getTopList } from "../api/index"
  export default{
    data(){
      return {
        topList:""
      }
    },
    mounted(){
      const _this = this;
      getTopList().then(res => {
        if(res.status == 200){
          _this.topList = res.data;
        }else{
          console.log("error")
        }
      })
    }
  }
</script>
<style lang="less" scoped>
  .con{
    width:100%;
    overflow: hidden;
    padding: 12px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .official_list{
    width:100%;
    overflow: hidden;
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
  .rec_wamp {
    width: 100%;
    overflow: hidden;
    .rec_item {
      width: 100%;
      float: left;
      margin-bottom: 10px;
      .left_img {
        width: 100px;
        height: 100px;
        float: left;
      }
      .text {
        margin-left: 108px;
        height: 100px;
        position: relative;
        overflow: hidden;
        padding: 15px 0;
        p {
          float: left;
          margin: 8px 0 0 0;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
          line-height: 1;
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
