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
  //获取主播电台公共接口
  getDjradio:'/djradio/catelist',
  //获取精彩节目
  getDjradioPro:'/program/recommend',
  //精选电台
  getDjradioRec:'/djradio/recommend',
  //热门电台
  getDjradioHot:'/djradio/hot'

}
