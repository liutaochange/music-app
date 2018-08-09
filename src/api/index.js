/**
 * Created by LiuTao on 2017/11/8.
 */

/* 对所有的ajax请求用axios统一封装 */

import axios from 'axios'
import API from './address.js'
const baseURL = 'http://localhost:3000/v1'
const request = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  timeout: 8000
})
// code状态码200判断
axios.interceptors.response.use((res) => {
  if (res.status === 654) { // 百度云请求超时检测
    window.alert('请求超时！')
  }
  if (res.data.code !== 200) {
    window.alert('数据返回有误')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  console.log('promise error:' + error)
  return Promise.reject(error)
})
// 获取banner
export const getDefaultBanner = () => request.get(API.getDefaultBanner)
// 获取推荐歌单
export const getPersonalized = () => request.get(API.getPersonalized)
// 获取最新音乐
export const getNewSong = () => request.get(API.getNewSong)
// 获取推荐MV
export const getMv = () => request.get(API.getMv)
// 获取主播电台
export const getDjProgram = () => request.get(API.getDjProgram)
// 获取全部歌单
export const getCatlist = () => request.get(API.getCatlist)
// 获取分类歌单列表
export const getPlayList = (limit, offset, type) => request.get(API.getPlayList, {
  params: {
    'limit': limit,
    'offset': offset,
    'type': type
  }
})
// 获取主播电台分类
export const getDjradio = () => request.get(API.getDjradio)
// 获取推荐节目
export const getDjradioPro = () => request.get(API.getDjradioPro)
// 精选电台
export const getDjradioRec = () => request.get(API.getDjradioRec)
// 热门电台
export const getDjradioHot = () => request.get(API.getDjradioHot)
// 获取排行榜
export const getTopList = () => request.get(API.getTopList)
// 获取每日歌曲推荐
export const getRecomendSongs = () => request.get(API.getRecommendSongs)
// 云音乐热歌榜
export const getHotList = (id, limit) => request.get(API.getHotList, {
  params: {
    'id': id,
    'limit': limit
  }
})
// 登录
export const login = (phone, password) => request.get(API.login, {
  params: {
    email: phone,
    phone: phone,
    password: password
  }
})
// 获取用户信息
export const getUserSubcount = (id) => request.get(API.getUserSubcount, {
  params: {
    id: id
  }
})
// 获取用户列表
export const getUserPlayList = (id) => request.get(API.getUserPlayList, {
  params: {
    uid: id
  }
})
// 获取用户的收藏列表
export const getLikeList = () => request.get(API.getLikeList)
