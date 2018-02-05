/**
 * Created by LiuTao on 2017/11/8.
 */
/*把所有的请求地址放在同一文件中，集中调用*/
export default {
  //获取banner
  getDefaultBanner: '/banner',
  //获取推荐歌单
  getPersonalized:'/personalized',
  //获取最新音乐
  getNewSong:'/personalized/newsong',
  //获取推荐MV
  getMv:'personalized/mv',
  //获取主播电台
  getDjProgram:'personalized/djprogram',
  //获取全部歌单
  getCatlist:'playlist/catlist',
  //获取分类歌单列表
  getPlayList:'/top/playlist',
  //获取主播电台分类
  getDjradio:'/djradio/catelist',
  //获取推荐节目
  getDjradioPro:'/program/recommend',
  //精选电台
  getDjradioRec:'/djradio/recommend',
  //热门电台
  getDjradioHot:'/djradio/hot',
  //获取排行榜
  getTopList:'/toplist/detail',
  //每日推荐
  getRecommendSongs: '/recommend/songs',
  //云音乐热歌榜
  getHotList:'/playlist/detail',
  //登录
  login:'/login/cellphone'
}
