/**
 * Created by LiuTao on 2017/11/8.
 */

/*对所有的ajax请求用axios统一封装*/

import axios from 'axios'
import API from './address.js'
const baseURL = "http://localhost:3000/v1/"
const request = axios.create({
  baseURL: baseURL
});

export default {
  // 获取默认歌单
  getDefaultSonglist: () => request.get(API.getDefaultSonglist),

  // 搜索歌曲
  searchSongs: (param) => request.get(API.searchSongs, {params: {s: param}}),

  // 根据dfsid获取任意品质音源
  getUrlByDfsId: (param) => request.get(API.getUrlByDfsId, {params: {dfsid: param}}),

  // 获取评论
  getCommments: (param) => request.get(API.getComments, {params: {rid: param}}),

  // 添加歌曲到收藏夹
  addToCollections: () => request.get(API.addToCollections),

  /**
   * 登录
   * @param params {object} 格式：{username:xxx, password:xxx}
   */
  login: (params) => request.post(API.login, params),

  // 获取用户歌
  getUserInfo: () => request.get(API.getUserInfo),

}
