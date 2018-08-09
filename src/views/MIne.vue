<template>
  <div>
    <header class="mine_head">
      我的音乐
    </header>
    <ul class="main_con">
      <li>
        <img src="../../static/images/cm2_list_icn_dld_new@2x.png" alt="图片">
        <p>我的下载</p>
      </li>
      <li>
        <img src="../../static/images/cm2_list_icn_recent_new@2x.png" alt="图片">
        <p>最近播放</p>
      </li>
      <li>
        <img src="../../static/images/cm2_lay_icn_cloud@2x.png" alt="图片">
        <p>我的云盘</p>
      </li>
      <li>
        <img src="../../static/images/cm4_my_icn_fav@2x.png" alt="图片">
        <p>我的收藏</p>
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  data () {
    return {
      list: [],
      subcount: {}
    }
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
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      border-bottom: 1px solid #e1e2e3;
      img{
        float: left;
        width: 32px;
        margin-left: 15px;
        margin-top: 8px;
      }
      p{
        margin-left: 10px;
        float: left;
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
</style>
