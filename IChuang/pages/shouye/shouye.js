var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1, //分页页数
    rows: 10, //每页的10条数据
    indicatorDots: true,
    autoplay: true,
    interval: 2500,
    duration: 800,
    circular: true,
    current: 0,
    navs: [], //中部导航
    project: [], //轮播图推荐项目
    project_true: [], //申请成功的项目
    rollData: [], //纵向轮播
    acticity:[],//推荐活动
    id: 0,//推荐活动id
  },
  /**
   * 轮播图切换事件
   */
  swiperChange: function(e) {
    this.setData({
      current: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //设置当前页标题
    wx.setNavigationBarTitle({
      title: 'i   创'
    })
    /**
     * 获取轮播图项目
     */
    var that = this;
    wx.request({
      url: app.globalData.url + 'listProject.action?page=' + that.data.page + '& rows=' + that.data.rows,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function(res) {
        console.log(res);

        if (res.data.rows.length != 0) {
          for (var i = 0; i <= 2; i++) {
            that.data.project.push({
              name: res.data.rows[i].name,
              photo: res.data.rows[i].photo
            });
            var project = that.data.project
            that.setData({ //赋值给本地
              project: project
            })
          }
        }
        console.log(that.data.project);
      },
      fail: function(res) {
        console.log(".....fail.....");
      },
      complete: function() {
        // complete
        console.log('onload方法结束');
      }
    })

    /**
     * 获取已申请成功的
     */
var self = this
    wx.request({
      url: app.globalData.url + 'listProjectApply.action?page=' + that.data.page + '& rows=' + that.data.rows,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function(res) {
        console.log(res)
     
        for (var j = 0; j <res.data.rows.length ; j++) {
          // console.log(res.data.rows[j].apply_name)
          // console.log(res.data.rows[j].project_name)
          // if (res.data.rows[j].status == 2){
            self.data.project_true.push({
              project_name: res.data.rows[j].project_name,
              apply_name: res.data.rows[j].apply_name,
            });
            var project_true = self.data.project_true
            self.setData({ //赋值给本地
              project_true: project_true
            })
          // }

        }

        //  console.log(that.data.project_ing)
        console.log('申请成功' + self.data.project_true)
        //  console.log(that.data.project_fail)
      }
    })
/**
 * 获取活动
 */
    var _that = this;
    wx.request({
      url: app.globalData.url + 'listActivity.action?page=' + _that.data.page + '&rows=' + _that.data.rows,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log(res)
          for (var i = 0; i <= 4; i++) {
            _that.data.acticity.push({name: res.data.rows[i].name});
            var acticity = _that.data.acticity
            _that.setData({//赋值给本地
              acticity: acticity
            })
          }
       
        // wx.hideToast()
        console.log('活动'+_that.data.acticity)
      },
      fail: function (res) {
        console.log(".....fail.....");
      },
      complete: function () {
        // complete
        console.log('submit comlete');
      }

    })


    if (app.globalData.type == 1) { //社员登录
      wx.request({
        url: app.globalData.url + 'getMember.action?id=' + app.globalData.sno,
        // data: JSON.stringify({ id: app.globalData.sno}),
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
        success: function(res) {
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
        fail: function(res) {
          console.log(".....fail.....");
        },
        complete: function() {
          // complete
          console.log('submit comlete');
        }
      })
    }
    if (app.globalData.type == 4) { //管理员登录
      wx.request({
        url: app.globalData.url + 'ichuang/getAdmin.action',
        data: JSON.stringify({
          id: app.globalData.sno
        }),
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
        success: function(res) {
          console.log(res);
          console.log("有用值" + res.data.Admin); //有用值
          console.log("成功")
          var person = JSON.stringify(res.data) //解析成string类型
        },
        fail: function(res) {
          console.log(".....fail.....");
        },
        complete: function() {
          // complete
          console.log('submit comlete');
        }
      })
    }
    /**
     * 纵向轮播
     * */
    var page = this;
    var navs = this.loadNavData();//设置中部导航
    page.setData({
      navs: navs
    });
    
  },
  /**
   * 轮播图点击事件
   */
  swiperClick: function(e) {
    console.log(this.data.swiperCurrent);
    let _this = this;
    let _index = _this.data.current;
    console.log(_index);
    wx.navigateTo({
      url: '../../pages/project/projectDetails/projectDetails?title=' + JSON.stringify(_this.data.project[_index].name)
    })
  },
  /**
   * 中间导航框入口
   */
  navBtn: function(a) {
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
  loadNavData: function() {
    var navs = [];

    var nav0 = new Object();
    nav0.img = '../images/daohang/sheyuan.png';
    nav0.name = "社员";
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
   * 活动跳转
   */
  btnAc: function(res) {
    console.log(res)
    console.log(res.currentTarget.id)
    var id = res.currentTarget.id 
    this.setData({
      id: parseInt(res.currentTarget.id) + 1
    })
    console.log(this.data.acticity[res.currentTarget.id].name)

    wx.navigateTo({
      url: '../../pages/shouye/xinxi/huodongxinxiitem/huodongxinxiitem?json=' + JSON.stringify(this.data.acticity[res.currentTarget.id].name) + '&id=' + JSON.stringify(this.data.id),
    })
  },




})