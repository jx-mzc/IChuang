
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp();     // 取得全局App
Page({

  data: {
    tabs: ["所有项目", "申请中",  "申请失败","申请成功"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    project:[],//所有项目
    project_ing: [],//申请中
    project_true: [],//申请成功
    project_fail: [],//申请失败
    status:[],//申请状态
    page: 1,//分页页数
    rows: 10,//每页的10条数据
  },
  onLoad: function() {
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '项目'
    })

    var that = this;
    wx.request({
      url: app.globalData.url + 'listProject.action?page=' + that.data.page + '& rows=' + that.data.rows,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log(res);

        if (res.data.rows.length != 0) {
          for (var i = 0; i <= res.data.rows.length - 1; i++) {
            that.data.project.push({ name: res.data.rows[i].name, introduction: res.data.rows[i].introduction });
            var project = that.data.project
            that.setData({//赋值给本地
              project: project
            })
          }
        } else if (res.data.rows.length == 0) {
          wx.showToast({
            title: '信息加载完毕',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        console.log(".....fail.....");
      },
      complete: function () {
        // complete
        console.log('onload方法结束');
      }
    })
    wx.request({
      url: app.globalData.url + 'listProjectApply.action?page=' + that.data.page + '& rows=' + that.data.rows,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
     success:function(res){
       console.log(res)
       for(var i =0;i<=res.data.rows.length-1;i++){
         console.log(res.data.rows[i].status)
         if (res.data.rows[i].status==1){
           that.data.project_ing.push({ project_name: res.data.rows[i].project_name, apply_name: res.data.rows[i].apply_name });
           var project_ing = that.data.project_ing
           that.setData({//赋值给本地
             project_ing: project_ing
           })
         }
         if (res.data.rows[i].status == 2) {
           that.data.project_true.push({ project_name: res.data.rows[i].project_name, apply_name: res.data.rows[i].apply_name });
           var project_true = that.data.project_true
           that.setData({//赋值给本地
             project_true: project_true
           })
         }
         if (res.data.rows[i].status == 3) {
           that.data.project_fail.push({ project_name: res.data.rows[i].project_name, apply_name: res.data.rows[i].apply_name });
           var project_fail = that.data.project_fail
           that.setData({//赋值给本地
             project_fail: project_fail
           })
         }
       }
      //  console.log(that.data.project_ing)
      //  console.log(that.data.project_true)
      //  console.log(that.data.project_fail)
     }
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
/**
 * 所有项目点击跳转
 */
  projectDetails:function(e) {
    console.log(e)
    var id = e.currentTarget.id;
      console.log(id)
 
    var title = this.data.project[id].name;
    console.log(title)
    wx.navigateTo({
      url: 'projectDetails/projectDetails?title=' + JSON.stringify(title),
    })
  },
  /**
 * 申请中项目点击跳转
 */
  projectDetails1: function (e) {
    console.log(e)
    var id = e.currentTarget.id;
    console.log(id)

    var title = this.data.project_ing[id].project_name;
    console.log(title)
    wx.navigateTo({
      url: 'projectDetails/projectDetails?title=' + JSON.stringify(title),
    })
  },
   /**
 * 申请失败中项目点击跳转
 */
  projectDetails2: function (e) {
    console.log(e)
    var id = e.currentTarget.id;
    console.log(id)

    var title = this.data.project_fail[id].project_name;
    console.log(title)
    wx.navigateTo({
      url: 'projectDetails/projectDetails?title=' + JSON.stringify(title),
    })
  },
   /**
 * 申请成功中项目点击跳转
 */
  projectDetails3: function (e) {
    console.log(e)
    var id = e.currentTarget.id;
    console.log(id)

    var title = this.data.project_true[id].project_name;
    console.log(title)
    wx.navigateTo({
      url: 'projectDetails/projectDetails?title=' + JSON.stringify(title),
    })
  },
  /**
    * 页面上拉触底事件的处理函数
    */
  onReachBottom: function () {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 2000
    })
    var page = this.data.page + 1;
    this.setData({
      page: page
    })
    console.log(this.data.page)
    this.onLoad()
  },

  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }

});