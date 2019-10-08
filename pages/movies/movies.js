// pages/movies/movies.js
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250';
let appDatas = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviesArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: MOVIE_URL,
      success: (data) => {
        // 更新状态值
        this.setData({
          moviesArr: data.data.subjects
        });
        //  更新app数据
        appDatas.data.moviesArr = data.data.subjects;
      }
    })
  }

  
})