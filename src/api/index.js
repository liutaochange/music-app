/**
 * Created by LiuTao on 2017/11/8.
 */

/*对所有的ajax请求用axios统一封装*/

import axios from 'axios'
import API from './address.js'
const baseURL = "http://localhost:3000/v1"
const request = axios.create({
  baseURL: baseURL,
  withCredentials: true
});
// 获取banner
export const getDefaultBanner = () => request.get(API.getDefaultBanner);
//获取推荐歌单
export const getPersonalized = ()=> request.get(API.getPersonalized);
//获取最新音乐
export const getNewSong = ()=> request.get(API.getNewSong);
//获取推荐MV
export const getMv = ()=> request.get(API.getMv);
//获取主播电台
export const getDjProgram = ()=> request.get(API.getDjProgram);
//获取全部歌单
export const getCatlist = ()=>request.get(API.getCatlist);
//获取分类歌单列表
export const getPlayList = (limit,offset,type)=>request.get(API.getPlayList,{
  "limit":limit,
  "offset":offset,
  "type":type
});
//获取主播电台分类
export const getDjradio = ()=>request.get(API.getDjradio);
//获取推荐节目
export const getDjradioPro = ()=>request.get(API.getDjradioPro);
//精选电台
export const getDjradioRec = ()=>request.get(API.getDjradioRec);
//热门电台
export const getDjradioHot = ()=>request.get(API.getDjradioHot);
//获取排行榜
export const getTopList = ()=>request.get(API.getTopList);
//获取每日歌曲推荐
export const getRecomendSongs = ()=>request.get(API.getRecommendSongs);
//云音乐热歌榜
export const getHotList = (id,limit)=>request.get(API.getHotList,{
  "id":id,
  "limit":limit
});

