/**
 * Created by LiuTao on 2017/11/13.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import playMode from './player.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //控制首页tab索引
    home_index: "recommend",
    index_value: "findmusic",
    //音乐播放组件
    singer:{},
    playing:false,    //是否播放
    fullScreen:false,    //是否全屏
    playList:[],   //播放列表
    sequenceList:[],    // 非顺序播放列表
    mode:playMode.sequence,   // 播放模式（顺序0，循环1，随机2）
    currentIndex:-1,  //当前播放索引
  },
  mutations: {
    setIndex(state,index){
      state.home_index = index;
    },
    setIndexValue(state,index){
      state.index_value = index;
    }
  }
})
export default store

