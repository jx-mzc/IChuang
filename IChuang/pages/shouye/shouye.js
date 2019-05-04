var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2500,
    duration: 800,
    circular:true,
    current:0,
    imgUrls: [
      "../images/act3.jpg",
      "../images/act2.jpg",
      "../images/act3.jpg"
    ],
    navs:[],
  },
/**
 * 轮播图切换事件
 */
  swiperChange:function(e){
    this.setData({
      current:e.detail.current
    })
  },
  /**
   * 轮播图点击事件
   */
  swiperClick:function(e){
    console.log(this.data.swiperCurrent);
    let _this = this;
    let _index = _this.data.current;
    console.log(_index);
    if (_index == "0") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
      })
    }
    if (_index == "1") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/huodongxinxi/huodongxinxi'
      })
    }
    if (_index == "2") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      //设置当前页标题
      wx.setNavigationBarTitle({
        title: 'i   创'
      })
  
    if (app.globalData.type == 1) {//社员登录
      wx.request({
        url: 'https://www.iwchuang.cn/ichuang/getMember.action?id=' + app.globalData.sno,
        // data: JSON.stringify({ id: app.globalData.sno}),
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

          console.log(getApp().globalData.association);
          console.log(getApp().globalData.school);
          console.log(getApp().globalData.qq);
          console.log(getApp().globalData.photo);
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
    if (app.globalData.type == 4) {//管理员登录
      wx.request({
        url: 'https://www.iwchuang.cn/ichuang/getAdmin.action',
        data: JSON.stringify({ id: app.globalData.sno }),
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
          // var i = JSON.stringify(res.data.Admin.photo).replace(/"/g, "")
          // var name = JSON.stringify(res.data.Admin.name).replace(/"/g, "")
          // self.setData({
          //   photo: i,
          //   name: name
          // })
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
    /**
     * 纵向轮播
     * */
    var page = this;
    var navs = this.loadNavData();
    page.setData({ navs: navs });
    var that = this;
    // 滚动数据配置
    var rollData = [
      "小明成功申请项目A",
      "小明成功申请项目B",
      "小明成功申请项目C",
      "小明成功申请项目D",
    ];
    that.setData({
      rollData: rollData
    })
  },
/**
 * 中间导航框入口
 */
  navBtn: function (a) {
    console.log(a);
    var id = a.currentTarget.id;
    if (id == "0") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyuanxixni'
      })
    }
    if (id == "1") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/huodongxinxi/huodongxinxi'
      })
    }
    if (id == "2") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/bisaixinxi/bisaixinxi'
      })
    }
  },
  loadNavData: function () {
    var navs = [];

    var nav0 = new Object();
    nav0.img = 'http://129.204.200.64/123/images/daohang/sheyuan.png';
    nav0.name= "社员";
    navs[0] = nav0;

    var nav1 = new Object();
    nav1.img = 'http://129.204.200.64/123/images/daohang/huodong.png';
    nav1.name = "活动";
    navs[1] = nav1;

    var nav2 = new Object();
    nav2.img = 'http://129.204.200.64/123/images/daohang/bisai.png';
    nav2.name = "比赛";
    navs[2] = nav2;

    return navs;
  },
 
  /**
   * 活动1跳转
   */
  btnAc1:function(){
    wx.navigateTo({
      url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
    })
  },
  /**
 * 活动2跳转
 */
  btnAc2: function () {
    wx.navigateTo({
      url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
    })
  },
  /**
* 活动3跳转
*/
  btnAc3: function () {
    wx.navigateTo({
      url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
    })
  },
  /**
* 活动4跳转
*/
  btnAc4: function () {
    wx.navigateTo({
      url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
    })
  },
  /**
* 活动5跳转
*/
  btnAc5: function () {
    wx.navigateTo({
      url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
    })
  },
  /**
* 活动6跳转
*/
  btnAc6: function () {
    wx.navigateTo({
      url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
    })
  },

 
})