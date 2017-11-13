<template>
  <div id="app">
    <router-view/>
    <!--底部选项卡-->
    <div class="app-bottom">
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="recents" title="发现音乐" icon="restore" to="/" activeClass="newColor"/>
          <mu-bottom-nav-item value="nearby" title="我的音乐" icon="location_on" to="/mine" activeClass="newColor"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./assets/theme.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-bottom{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
  .newColor{
       background: #fff;
      .mu-buttom-item-wrapper{
         background: #fff;
         color: #ce3d3e;
         .mu-bottom-item-text{
           color: #ce3d3e !important;
         }
      }
  }


</style>
