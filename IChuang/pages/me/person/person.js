// pages/me/person/person.js
var app = getApp();     // 取得全局App
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,//姓名
    phone: null,//电话
    qq: null,//QQ
  
    insterest: null,//兴趣
    birthday: null,//出生日期
    sno: null,//学号
    school: null,//学校
    association: null,//社团
    grade: null,//年级
    major: null,//专业
    photo: null + Math.random() / 9999 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '我的信息'
    })
    console.log(options)
    var name1 = getApp().globalData.username;
    var phone1 = getApp().globalData.phone;
    var qq1 = getApp().globalData.qq;
    var photo1 = getApp().globalData.photo;
    var insterest1 = getApp().globalData.insterest;
    var  birthday1= getApp().globalData.birthday;
    var  sno1=getApp().globalData.sno;
    var school1= getApp().globalData.school;
    var association1= getApp().globalData.association;
    var grade1= getApp().globalData.grade;
    var  major1= getApp().globalData.major;
    console.log(phone1)
    console.log(name1)
    this.setData({
      name:name1,
      phone: phone1,
      qq: qq1,
      photo: photo1,
      insterest:insterest1,
      birthday: birthday1,
      sno:sno1,
      school:school1,
      association:association1,
      grade: grade1,
      major:major1,
    })
  },
  change:function(e){
    console.log(e)
    var id = e.currentTarget.id

    console.log(id)
    if(id==1){
      
      wx.navigateTo({
        url: 'phone/phone?JSON=' + JSON.stringify(getApp().globalData.phone) + "&id=" + JSON.stringify(1),
      })
    }
    if (id == 2) {
      wx.navigateTo({
        url: 'phone/phone?JSON=' + JSON.stringify(getApp().globalData.qq) + '&id=' + JSON.stringify(2),
      })
    }
    if (id == 3) {
      wx.navigateTo({
        url: 'phone/phone?JSON=' + JSON.stringify(getApp().globalData.insterest) +'&id='+JSON.stringify(3),
      })
    }
    if (id == 4) {
      wx.navigateTo({
        url: 'phone/phone?JSON=' + JSON.stringify(getApp().globalData.birthday) + '&id=' + JSON.stringify(4),
      })
    }
  },
  /**
   * 选择图片
   */
  chooseimage:function(){
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album'],
      success: function(res) {
        console.log(res)
        console.log(res.tempFilePaths)  
        getApp().globalData.photo=res.tempFilePaths;  
        var temFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: app.globalData.url +'uploadMemberPhoto.action',
          filePath: temFilePaths[0],
          name: 'file',//文件对应的key，在服务器获取key获取二进制内容  

          formData:{//其他信息
              id:app.globalData.sno
          },
          success:function(res){

            console.log(res)
            console.log("成功")
          },
          fail: function (res) {
            console.log("失败")
          }
        })

      },
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
      this.onLoad()
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