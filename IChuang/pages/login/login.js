 var app = getApp();     // 取得全局App
Page({
  data: {
    account: '',
    password: '',
    data:'',
    tishi:''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      account: e.detail.value
    })
    app.globalData.sno = e.detail.value;  //赋值
 //   console.log('赋值' + app.globalData.sno);   //打印正确
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
    app.globalData.password = e.detail.value;  //赋值
    console.log('密码' + app.globalData.password);   //打印正确
  },

  // 登录 
  login: function (e) {
    console.log(e);
    console.log(this.data.account);
    console.log(this.data.password);
    if (this.data.account == '' || this.data.password ==''){
      this.setData({
        tishi:'账号或者密码不能为空'
      })
      console.log(this.data.tishi)
    }else{
      this.setData({
        tishi: ''
      })
      wx.request({
        // url: 'http://129.206.200.64/weiDemo/demoServlet',
        url: 'https://www.iwchuang.cn/ichuang/login.action',
        data: JSON.stringify({ account: this.data.account, password: this.data.password }),
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
        success: function (res) {
          console.log(res);
          var name = JSON.stringify(res.data);
          console.log(name)  
        
          if (name == '{}') {
            console.log("失败")
            wx.showModal({
              title: '提示：',
              showCancel: false,
              content: '请检查账号或者密码',
            })
          } else {
            app.globalData.type = JSON.stringify(res.data.Account.types).replace(/"/g, "")//登录类型
            app.globalData.sno = JSON.stringify(res.data.Account.account).replace(/"/g, "")//登录类型
            console.log(app.globalData.type);
            console.log("成功")
            wx.switchTab({
              url: '../shouye/shouye',
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
  }
})