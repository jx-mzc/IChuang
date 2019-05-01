// pages/me/changepwd/changepwd.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldpwd:'',
    newpwd:'',
    ispwd:''
  },
  // 获取输入原密码 
  passwordInputOld: function (e) {
    this.setData({
      oldpwd: e.detail.value
    })

    console.log('旧密码' + this.data.oldpwd);   //打印正确
  },
  // 获取输入新密码 
  passwordInputNew: function (e) {
    this.setData({
      newpwd: e.detail.value
    })

    console.log('新密码' + this.data.newpwd);   //打印正确
  },
  // 获取确认新密码 
  ispasswordInput: function (e) {
    this.setData({
      ispwd: e.detail.value
    })

    console.log('确认密码' + this.data.ispwd);   //打印正确
  },
  changepwd:function(){
    if (this.data.oldpwd == '' || this.data.newpwd == '' || this.data.ispwd== ''){
      wx.showModal({
        title: '提示',
        content: '密码修改不能为空',
        showCancel: false
      })
    }else
    if (app.globalData.password != this.data.oldpwd){
      wx.showModal({
        title: '提示',
        content: '原密码输入错误',
        showCancel:false
      })
    } else if (this.data.oldpwd == this.data.newpwd){
      wx.showModal({
        title: '提示',
        content: '修改密码与原密码一样',
        showCancel: false
      })
    } else if (this.data.ispwd != this.data.newpwd) {
      wx.showModal({
        title: '提示',
        content: '确认密码错误',
        showCancel: false
      })
    } else {
      var that = this;
      console.log(app.globalData.sno)
      console.log(that.data.newpwd)
      console.log(app.globalData.type)
      wx.request({
        url: 'https://www.iwchuang.cn/ichuang/updateAccount.action',
        data: JSON.stringify({ account: app.globalData.sno, password: that.data.newpwd, types:app.globalData.type}),
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        // dataType:JSON,//该语句会将服务器端的数据自动转为string类
        success: function (res) {
          console.log(res);
          console.log(".....success.....");
          if (JSON.stringify(res.data.Member) != '{}') {
            wx.showToast({
              title: '修改成功', duration: 2000
            })
          
            // app.globalData.phone = that.data.phoneValue
            // console.log(app.globalData.phone);
          } else {
            wx.showToast({
              title: '修改失败', duration: 2000
            })
          }
        },
        fail: function (res) {
          console.log(".....fail.....");
        },
        complete: function () {
          // complete
          console.log('submit comlete');
        }
      })
    }
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