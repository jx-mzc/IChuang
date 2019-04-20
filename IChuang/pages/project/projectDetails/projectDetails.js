// pages/project/projectDetails/projectDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
   var title1 = JSON.parse(options.title)//解析传过来的JSON数据
    console.log(title1)
    this.setData({
      title: title1
    })
    console.log(this.data.title)
  },
  showfile: function () {
    wx.downloadFile({
      url: 'http://129.204.200.64/123/images/file.doc',
      success: function (res) {
        console.log("下载成功")
        console.log(res);
        var path = res.tempFilePath;
        wx.openDocument({
          filePath: path,

          success: function (res) {
            console.log('打开成功');
          }, fail: function (res) {
            console.log("打开失败")

            console.log(res)
          }
        })
      },
      fail: function (res) {
        console.log("下载失败")
        console.log(res)
      }
    })
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