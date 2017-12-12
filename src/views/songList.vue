<template>
    <div class="box">
      <section class="con">
        <div class="thePlaylist">
          <div class="rLeft">
            {{catelist.checked.name}}
          </div>
          <div class="rbtn">
            选择分类
          </div>
        </div>
        <div class="imgList">
          <mu-row gutter>
            <mu-col width="50" tablet="50" desktop="50" v-for="item in playlist.list.playlists" :key="item.id">
              <img :src="item.coverImgUrl" alt="图片">
              <p class="name">{{item.name}}</p>
            </mu-col>
          </mu-row>
        </div>
      </section>
    </div>
</template>
<script>
  import {getCatlist,getPlayList} from "../api/index"
  export default{
    data(){
      return {
        msg: "songList",
        isadd: false,
        playlist: {
          idx: 1,
          list: {},
          offset: 0,
          limit: 20
        },
        catelist: {
          res: {},
          checked: {}
        }
      }
    },
    methods: {

    },
    mounted(){
      var that = this;
      //获取全部歌单
      getCatlist().then(res => {
        if(res.status == 200){
          let getData = res.data;
          that.catelist =  {
            res: getData,
            checked: getData.all
          };
        }else{
          console.log("error")
        }
      })
      //分类歌单列表
      getPlayList(that.playlist.limit,that.playlist.offset,that.catelist.checked.name).then(res => {
        if(res.status == 200){
          if (!that.isadd) {
            that.playlist.list = res.data
            that.isadd = true;
          } else {
            res.playlists = that.playlist.list.playlists.concat(res.data.playlists);
            that.playlist.list = res.data
          }
          that.playlist.offset += res.data.playlists.length;
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
        text-align: left;
      }
    }
  }
</style>
