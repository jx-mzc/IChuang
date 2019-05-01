var app = getApp();     // 取得全局App
// pages/me/me.js
Page({
  data:{
    type:'',//登录类型
    num:0,
    account:'',
    name: '',
    photo: '' + Math.random() / 9999
  },
   onShow: function () {
      this.onLoad()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */


  onLoad:function(e){
    console.log(app.globalData.type);
    this.data.account=getApp().globalData.sno, // 获取全局变量并赋值给userId
      console.log("用户名" + this.data.account)
      this.setData({
        account: app.globalData.sno
      })
    var self = this;
    if (app.globalData.type==1){//管理员登录
      wx.request({
        url: 'https://www.iwchuang.cn/ichuang/getMember.action?id=' + this.data.account,
        // data: JSON.stringify({ id: this.data.account }),
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
        success: function (res) {
          console.log(res);
         
          console.log("成功")
          var person = JSON.stringify(res.data) //解析成string类型
          var i = JSON.stringify(res.data.Member.photo).replace(/"/g, "")
          var name = JSON.stringify(res.data.Member.name).replace(/"/g, "")
          self.setData({
            photo: i,
            name: name
          })
          getApp().globalData.username = JSON.stringify(res.data.Member.name).replace(/"/g, "")
          getApp().globalData.phone = JSON.stringify(res.data.Member.phone).replace(/"/g, "")
          getApp().globalData.insterest = JSON.stringify(res.data.Member.interest).replace(/"/g, "")
          getApp().globalData.qq = JSON.stringify(res.data.Member.qq).replace(/"/g, "")
          getApp().globalData.birthday = JSON.stringify(res.data.Member.birthday).replace(/"/g, "")
          getApp().globalData.sno = JSON.stringify(res.data.Member.id).replace(/"/g, "")
          getApp().globalData.association = JSON.stringify(res.data.Member.club_name).replace(/"/g, "")
          getApp().globalData.school = JSON.stringify(res.data.Member.school_name).replace(/"/g, "")
          getApp().globalData.grade = JSON.stringify(res.data.Member.grade).replace(/"/g, "")
          getApp().globalData.major = JSON.stringify(res.data.Member.major).replace(/"/g, "")
          getApp().globalData.photo = JSON.stringify(res.data.Member.photo).replace(/"/g, "")

          // console.log(getApp().globalData.username);
          // console.log(getApp().globalData.phone);
          // console.log(getApp().globalData.qq);
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
    if (app.globalData.type==4){//管理员登录
      wx.request({
        url: 'https://www.iwchuang.cn/ichuang/getAdmin.action',
        data: JSON.stringify({ id: this.data.account }),
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
        success: function (res) {
          console.log(res);
          console.log("有用值" + res.data.Admin);//有用值
          console.log("成功")
          var person = JSON.stringify(res.data) //解析成string类型
          var i = JSON.stringify(res.data.Admin.photo).replace(/"/g, "")
          var name = JSON.stringify(res.data.Admin.name).replace(/"/g, "")
          self.setData({
            photo: i,
            name: name
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
    }
   

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
  },
  /**
   * 注销登录
   */
  loginout:function(){
   wx.showModal({
     title:'提示',
     content:'确定注销登录？',
     success:function(res){
       if(res.confirm){
         wx.redirectTo({
           url:'../login/login'
         })
       }
     }
   })
  }
})