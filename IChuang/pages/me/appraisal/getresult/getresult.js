// pages/me/appraisal/getresult/getresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finalanswer:[],
    choose:[],
    grade:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '考核结果'
    })
    console.log(options)
    var choose = JSON.parse(options.json)
    var grade = JSON.parse(options.grade)
    var finalanswer = JSON.parse(options.fianlanswer)
    this.setData({
      choose: choose,
      grade:grade,
      finalanswer: finalanswer
    })
    console.log(choose)
    console.log(grade)
    console.log(finalanswer)
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function () {

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