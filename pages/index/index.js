Page({  // 注册当前页面

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isShow: false
  },

  handleParent(){
    console.log('父元素');
    // 跳转页面
    wx.switchTab({
      url: '/pages/list/list',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 做一些初始化工作，发送请求，开启定时器
    console.log('onload 页面加载')
    console.log(this);
    this.getUserInfo();
  },
  getUserInfo(){
    // 判断用户是否授权
    wx.getSetting({
      success: (data) => {
        // console.log(data);
        if (data.authSetting['scope.userInfo']) {
          // 用户已经授权,可以直接调用 getUserInfo 获取头像昵称
          // console.log('已经授权');
          // 更新用户数据
          this.setData({
            isShow: false
          })
        } else {
          // 没有授权
          // console.log('没有授权');
          this.setData({
            isShow: true
          });
        }
      }
    });

    // 获取用户登陆的信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        // 更新data中的userInfo
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: () => {
        console.log('获取用户数据失败')
      }
    })
  },
  // 判断用户点击按钮的回调函数
  handleGetUserInfo(data){
    console.log('用户点击了',data);
    // 判断用户是否点击了允许
    if(data.detail.rawData){
      // 用户点击了允许
      this.getUserInfo();
    }
  }
})