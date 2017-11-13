<template>
  <div>
    <div class="box">
      {{msg}}
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: "rank"
      }
    }
  }
</script>
<style lang="less" scoped>
  .box{
    text-align: center;
  }
</style>
