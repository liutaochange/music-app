<template>
  <div class="loading">
    <img src="../../static/images/loading.gif" alt="图片" width="24" height="24">
    <p class="text">{{title}}</p>
  </div>
</template>
<script>
  export default{
    props: {
      title: {
        type: String,
        default: '正在加载...'
      }
    }
  }
</script>
<style lang="less" scoped>
  .loading{
    position: fixed;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    overflow: hidden;
    img{
      display: block;
      margin: 0 auto;
    }
    .text{
      font-size: 14px;
      width: 100%;
      text-align: center;
      padding: 10px 0 20px;
    }
  }
</style>
