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
      "../images/haibao/haibao-1.jpg",
      "../images/haibao/haibao-2.jpg",
      "../images/haibao/haibao-3.jpg"
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
        url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
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
        url: '../../pages/shouye/sheyuan/sheyuan'
      })
    }
    if (id == "1") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
      })
    }
    if (id == "2") {
      wx.navigateTo({
        url: '../../pages/shouye/xinxi/sheyuanxinxi/sheyaunxinxi'
      })
    }
  },
  loadNavData: function () {
    var navs = [];

    var nav0 = new Object();
    nav0.img = '../images/daohang/sheyuan.png';
    nav0.name= "社员";
    navs[0] = nav0;

    var nav1 = new Object();
    nav1.img = '../images/daohang/huodong.png';
    nav1.name = "活动";
    navs[1] = nav1;

    var nav2 = new Object();
    nav2.img = '../images/daohang/bisai.png';
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

  bindtest: function () {
    wx.request({
      // url: 'http://129.206.200.64/weiDemo/demoServlet',
      url: 'http://129.204.200.64/weiDemo/demoServlet',
      data: {
        username: '001',
        password: 'abc'
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }
})