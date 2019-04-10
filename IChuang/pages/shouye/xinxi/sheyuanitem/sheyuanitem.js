// pages/shouye/xinxi/sheyuanitem/sheyuanitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = JSON.parse(options.json)
    this.setData({
      name: name,
    })
    console.log(name)
  },

})