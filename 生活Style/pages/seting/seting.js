// pages/seting/seting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  remove:function(res){
    wx.getSavedFileList({
      success(res) {
        if (res.fileList.length > 0) {
          wx.showToast({
            title: '清除成功!', //提示信息
            duration: 1000 //停留时间
          })
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete(res) {
              console.log(res)
              
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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