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
  getDjProgram:'personalized/djprogram'
}
