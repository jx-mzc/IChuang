// pages/me/person/person.js
var app = getApp();     // 取得全局App
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",//姓名
    phone: null,//电话
    qq: null,//QQ
    photo: null,//图片地址
    insterest: null,//兴趣
    birthday: null,//出生日期
    sno: null,//学号
    school: null,//学校
    association: null,//社团
    grade: null,//年级
    major: null,//专业
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(options)
    var name=JSON.parse(options.name)
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
    console.log(name)
    this.setData({
      name:name,
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
  chooseimage:function(){
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album'],
      success: function(res) {
        // console.log(res)
        // console.log(res.tempFilePaths)  
        getApp().globalData.photo=res.tempFilePaths;  
        
        var temFilePaths = res.tempFilePaths;

        wx.uploadFile({
          url: '',
          filePath: temFilePaths[0],
          name: 'name',//文件对应的key，在服务器获取key获取二进制内容
          header:{
            'content-type':'Application/json'
          },
          formData:{//其他信息
              imgName:"名称"
          },
          success:function(res){
            console("成功")
          },
          success: function (res) {
            console("失败")
          }
        })
        // wx.getImageInfo({//获取图片信息
        //   src: ''+that.data.photo,//获取图片信息格式？？？？？？？why
        //   success:function(res){
        //     console.log(res)
        //   },
        //   fail:function(res){
        //     console.log("--失败--")
        //   }
        // })

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