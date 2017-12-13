<template>
  <div>
    <div class="box">
      {{msg}}
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
    }
  }
</script>
<style lang="less" scoped>
  .box{
    text-align: center;
  }
</style>
