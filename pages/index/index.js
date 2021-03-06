
Page({
  data: {
    indexnav: [{ icon: 'icon-talk', content: '325' }, { icon: 'icon-collect', content: '收藏' },
      { icon: 'icon-download', content: '下载' }, { icon: 'icon-share', content: '分享' },],
    
    MusicList: [
      { id: '01', ranking:'icon-upicon',ranknamber:'006', name: '暖暖', author: '杨丞琳', imageUrl: '../../image/indexList/01.jpg', url: 'https://raw.githubusercontent.com/wushuxuan/Resources/master/Music/Music.mp3', }, 
      { id: '02', ranking: 'icon-downicon', ranknamber: '021', name: '暖暖', author: '杨丞琳', imageUrl: '../../image/indexList/02.jpg', url: 'https://raw.githubusercontent.com/wushuxuan/Resources/master/Music/Music.mp3', },
      { id: '03', ranking: 'icon-upicon', ranknamber: '104', name: '暖暖', author: '杨丞琳', imageUrl: '../../image/indexList/03.jpg', url: 'https://raw.githubusercontent.com/wushuxuan/Resources/master/Music/Music.mp3', },]
  },

  play:function(e){
    console.log(e.currentTarget.dataset.index)
    var that = this
    that.setData({
      id: e.currentTarget.dataset.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  MusicStart: function (e) {
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    var that = this
    that.setData({
      progress: progress
    })
    console.log(progress + '%')
  },
  MusicEnd: function () {
    wx.showModal({
      title: '提示',
      content: '音乐已播放完毕',
    })
  },
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
