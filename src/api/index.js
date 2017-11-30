/**
 * Created by LiuTao on 2017/11/8.
 */

/*对所有的ajax请求用axios统一封装*/

import axios from 'axios'
import API from './address.js'
const baseURL = "http://localhost:3000/v1"
const request = axios.create({
  baseURL: baseURL
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

