// pages/shouye/xinxi/sheyuanitem/sheyuanitem.js
var app = getApp();     // 取得全局App
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:null,//姓名
      sno:null,//学号
      school:null,//学校名
      grade:null,//年级
      major:null,//学院
      sex:null,//性别
      apartment:null,//部门
      photo:null//图片地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = JSON.parse(options.name)
    var sno = JSON.parse(options.sno)
    this.setData({
      name: name,
      sno:sno
    })
    console.log(name)
    console.log(sno)
    var that = this;
    wx.request({
      url: app.globalData.url +'getMember.action?id=' + that.data.sno,
      // data: JSON.stringify({ id: that.data.sno}),
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8'
      },
      // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
      success: function (res) {
        console.log(res); 
        that.setData({
          school: JSON.stringify(res.data.Member.school_name).replace(/"/g, ""),
          grade: JSON.stringify(res.data.Member.grade).replace(/"/g, ""),
          major: JSON.stringify(res.data.Member.major).replace(/"/g, ""),//学院
          sex: JSON.stringify(res.data.Member.sex).replace(/"/g, ""),//性别
          apartment: JSON.stringify(res.data.Member.department_name).replace(/"/g, ""),//部门
          photo: JSON.stringify(res.data.Member.photo).replace(/"/g, "")//图片地址
        })
        // console.log("成功")
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