<template>
  <div class="index_con">
    <router-view/>
    <!--底部选项卡-->
    <div class="app-bottom">
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="findmusic" title="发现音乐" icon="restore" to="/index/recommend" activeClass="newColor"/>
          <mu-bottom-nav-item value="mymusic" title="我的音乐" icon="location_on" to="/mine" activeClass="newColor"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>
</template>
<script>
  //导入子组件
  import Home from './Home';
  import Mine from './Mine';
  import store from '../store/index'
  export default {
    name: 'Index',
    data () {
      return {
        bottomNav: 'findmusic'
      }
    },
    components: {
      Home,
      Mine
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val;
        this.$store.commit('setIndexValue',val);
      }
    },
    created(){
      // created函数 监测路由信息,防止页面刷新tab高亮错误
      const home_index = this.$store.state.index_value;
      this.bottomNav = home_index;
      var tmpArr = this.$route.path.split('/');
      if (tmpArr[1] === "") {
        this.$router.push({ path: '/index/recommend' })
      }
      const getUrl = this.$route.path;
      if(getUrl.indexOf("mine")>-1){
        this.handleChange("mymusic");
      }
    }
  }
</script>
<style lang="less" scoped>
  .index_con{
    width: 100%;
    position: relative;
  }
  .app-bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    .mu-paper{
      background: #212121;
      .mu-bottom-nav{
        background: #212121;
        .mu-buttom-item{
          color: #ccc;
        }
      }
    }
    .mu-bottom-item-active{
      background: #212121;
      .mu-bottom-item-icon{
        color: #fff !important;
      }
      .mu-bottom-item-text{
        color: #fff !important;
      }
    }
  }
</style>
