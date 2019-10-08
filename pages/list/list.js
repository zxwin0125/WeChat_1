// pages/list/list.js
let datas = require('../../datas/list-data.js');
console.log(datas,typeof datas)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 填充数据
    this.setData({
      listArr: datas.list_data
    })
  },
  
  // 点击跳转到detail详情页面
  toDetail(event){
    console.log(event);
    // 获取点击跳转对应的下标
    let index = event.currentTarget.dataset.index;
    // 跳转到对应下标的详情页面
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },

  // 轮播图跳转到对应下标的详情页面
  carouselToDetail(event){
    console.log(event);
    let index = event.target.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  }

})