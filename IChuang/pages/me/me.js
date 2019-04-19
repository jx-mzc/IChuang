var app = getApp();     // 取得全局App
// pages/me/me.js
Page({
  data:{

    num:0,
    account:'2019001',
    name: '闵智超',
    photo: 'https://www.iwchuang.cn/images/admin/2019001.jpg'
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.onLoad
  },
  onLoad:function(e){
    this.data.account=getApp().globalData.username, // 获取全局变量并赋值给userId
      console.log("用户名" + this.data.account)
      this.setData({
        account: app.globalData.username
      })
    var self = this;
    wx.request({
      url: 'https://www.iwchuang.cn/ichuang/getAdmin.action',
      data: JSON.stringify({ id: this.data.account}),
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
      success: function (res) {
        console.log(res);
        console.log("有用值"+res.data.Admin);//有用值
          console.log("成功")
        var person = JSON.stringify(res.data) //解析成string类型
        var i = JSON.stringify(res.data.Admin.photo).replace(/"/g,"")
        var name = JSON.stringify(res.data.Admin.name).replace(/"/g, "")
        self.setData({
         photo:i,
         name:name
        })
        // console.log(self.data.photo);
        // console.log(self.data.name);

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
  person:function(){
    var name = this.data.name;
    console.log(name);
    wx.navigateTo({
      url: 'person/person?name='+JSON.stringify(name),
    })
  },
  goto:function(){
    wx.navigateTo({
      url: 'appraisal/appraisal?id=1',
    })
  }
})