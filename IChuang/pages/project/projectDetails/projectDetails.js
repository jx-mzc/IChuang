// pages/project/projectDetails/projectDetails.js
var app = getApp();     // 取得全局App
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",//项目名称
    post_name:"",//发布人
    start_time:"",//开始时间
    end_time: "",//结束时间
    type:"",//项目类型
    rank:"",//级别
    photo:"",
    file_name:"",//项目文档
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '项目详情'
    })
    console.log(options)
   var title1 = JSON.parse(options.title)//解析传过来的JSON数据
    console.log('标题'+title1)
    this.setData({
      title: title1
    })
    console.log(this.data.title)
    var that = this;
    wx.request({
      url: app.globalData.url +'listProject.action?name=' + that.data.title,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log(res);

        that.setData({
          post_name: res.data.rows[0].post_name,
          start_time: res.data.rows[0].start_time,
          end_time: res.data.rows[0].end_time,
          type: res.data.rows[0].type,
          rank: res.data.rows[0].rank,
          photo: res.data.rows[0].photo,
          file_name: res.data.rows[0].project_file,
        })
      },
      fail: function (res) {
        console.log(".....fail.....");
      },
      complete: function () {
        // complete
        console.log('onload方法结束');
      }
    })

  },


  showfile: function () {
    var that = this
    wx.downloadFile({
      url: that.data.file_name,
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