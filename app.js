//app.js
App({
  onShow:function(){
    var _this = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        console.log(1)
        _this.globalData.userInfo = res.userInfo
        _this.globalData.avatarUrl = res.userInfo.avatarUrl
        _this.globalData.nickName = res.userInfo.nickName
        _this.globalData.country = res.userInfo.country
        _this.globalData.city = res.userInfo.city
      }
    })  
  },
  onLaunch: function () {
    var _this = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})