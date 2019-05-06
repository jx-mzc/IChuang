// pages/me/points/points.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mypoint:0,//我的积分
     page: 1,//分页页数
    rows: 10,//每页的10条数据
    points:[]//积分事件
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '我的积分'
    })
var that = this;
    wx.request({
      url: 'https://www.iwchuang.cn/ichuang/listCourseExerciseResult.action?member_id=' + app.globalData.sno + '&page=' + that.data.page + '&rows=' + that.data.rows,
      method: 'POST',
      
      header: {
        'content-type': 'application/json' // 默认值
        // 'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success(res) {
        console.log('成功')
        console.log(res)
        if(res.data.rows.length!=0){
          for (var i = 0; i < res.data.rows.length;i++){
            
            that.data.points.push({name: res.data.rows[i].exercise_name, point: res.data.rows[i].point });
            var point = that.data.points
            that.setData({//赋值给本地
              points: point
            })

            //计算总积分
            var sum = that.data.mypoint + res.data.rows[i].score
            that.setData({
              mypoint:sum
            })
          
          }
        }
        else if (res.data.rows.length == 0) {
          wx.showToast({
            title: '信息加载完毕',
            duration: 2000
          })
        }
        console.log(that.data.mypoint)
      },
      fail(res) {
        console.log('失败')
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
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 2000
    })
    var page = this.data.page + 1;
    this.setData({
      page: page
    })
    console.log(this.data.page)
    this.onLoad()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})