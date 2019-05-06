var app = getApp();     // 取得全局App
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBinbExpert1:true,//是否隐藏，false为显示，true为隐藏
    isBinbExpert2: true,//是否隐藏，false为显示，true为隐藏
    isBinbExpert3: true,//是否隐藏，false为显示，true为隐藏
    isBinbExpert4: true,//是否隐藏，false为显示，true为隐藏
   value:'',
   phoneValue:'',
   qqValue: '',
   interValue: '',
   dataValue: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '修改'
    }) 
    var json = JSON.parse(options.JSON)
    var id = JSON.parse(options.id)
    if(id==1){
      this.setData({
        value:json,
        isBinbExpert1:false
      })
      console.log("data" + this.data.value)
    } if (id == 2) {
      this.setData({
        value: json,
        isBinbExpert2: false
      })
      console.log("data" + this.data.value)
    } if (id == 3) {
      this.setData({
        value: json,
        isBinbExpert3: false
      })
      console.log("data" + this.data.value)
    } if (id == 4) {
      this.setData({
        value: json,
        isBinbExpert4: false
      })
      console.log("data" + this.data.value)
    }
  },

get1:function(e){
  console.log(e)
  this.setData({
    phoneValue: e.detail.value
  })
  console.log(this.data.phoneValue)
  // getApp().globalData.insterest = JSON.stringify(res.data.Member.interest).replace(/"/g, "")
  // getApp().globalData.qq = JSON.stringify(res.data.Member.qq).replace(/"/g, "")
  // getApp().globalData.birthday = JSON.stringify(res.data.Member.birthday).replace(/"/g, "")

},
  commit1: function () {
   
    console.log(app.globalData.phone)
    //服务器修改
    var that = this;
    wx.request({
      url: app.globalData.url +'updateMember.action',
      data: JSON.stringify({ id: app.globalData.sno, phone: that.data.phoneValue }),
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // dataType:JSON,//该语句会将服务器端的数据自动转为string类
      success: function (res) {
        console.log(res);
        console.log(".....success.....");
        if (JSON.stringify(res.data.Member)!='{}'){
            wx.showToast({
              title: '修改成功',  duration: 2000
            })
          app.globalData.phone = that.data.phoneValue
          console.log(app.globalData.phone);
        }else{
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
  },
  get2: function (e) {
    console.log(e)
    this.setData({
      qqValue: e.detail.value
    })
  },
  commit2: function () {   
    var that = this;
    wx.request({
      url: app.globalData.url +'updateMember.action',
      data: JSON.stringify({ id: app.globalData.sno, qq: that.data.qqValue }),
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
          app.globalData.qq = that.data.qqValue
          console.log(app.globalData.qq);
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
  },
  get3: function (e) {
    console.log(e)
    this.setData({
      interValue: e.detail.value
    })
    console.log(this.data.interValue)
  },
  commit3: function () {
    var that = this;
    wx.request({
      url: app.globalData.url +'updateMember.action',
      data: JSON.stringify({id: app.globalData.sno, interest: that.data.interValue }),
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
      success: function (res) {
        if (JSON.stringify(res.data.Member) != '{}') {
          wx.showToast({
            title: '修改成功', duration: 2000
          })
          app.globalData.insterest = that.data.interValue
          console.log(app.globalData.insterest)
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
  },
  get4: function (e) {
    console.log(e)
    this.setData({
      dataValue: e.detail.value
    })
    console.log(this.data.dataValue)
   
  },
  commit4: function () {
   var that=this;
    wx.request({
      url: app.globalData.url +'updateMember.action',
      data: JSON.stringify({ id: app.globalData.sno, birthday: that.data.dataValue }),
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
      success: function (res) {
        if (JSON.stringify(res.data.Member) != '{}') {
          wx.showToast({
            title: '修改成功', duration: 2000
          })
          app.globalData.birthday = that.data.dataValue
          console.log(app.globalData.birthday)
        } else {
          wx.showToast({
            title: '修改失败', duration: 2000
          })
        }
        app.globalData.birthday = that.data.dataValue
        console.log(app.globalData.birthday)
      },
      fail: function (res) {
        console.log(".....fail.....");
      },
      complete: function () {
        // complete
        console.log('submit comlete');
      }
    })
  },

})