// pages/study/studyfirst.js
var app = getApp();     // 取得全局App
Page({

  /**
   * 页面的初始数据
   */
  data: {
      course:[],
      pages:1,//分页页数
      rows:10//每页行数
  },
  onLoad:function(){
   
      //设置当前页标题
      wx.setNavigationBarTitle({
        title: '学习'
      })
    
    var that = this;
    wx.request({
      url: app.globalData.url +'listCourse.action?page=' + that.data.pages + '&rows=' + that.data.rows,
      method: 'POST',
      // },
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8'
      },
      // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
      success: function (res) {
        console.log("成功");
        console.log(res);
        console.log(res.data.total)
        console.log(res.data.rows.length)
        if (res.data.rows.length != 0) {
          for (var i = 0; i <= res.data.rows.length - 1; i++) {
            that.data.course.push({ name: res.data.rows[i].name, teacher: res.data.rows[i].teacher_name, src: res.data.rows[i].photo, id: res.data.rows[i].teacher_id});
            var course = that.data.course
            that.setData({//赋值给本地
              course: course
            })
          }
        } else if (res.data.rows.length == 0) {
          wx.showToast({
            title: '信息加载完毕',
            duration: 2000
          })
        }
        wx.hideToast()
        console.log(that.data.person)
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
  
  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    // wx.showToast({
    //   title: 'loading...',
    //   icon: 'loading',
    //   duration:2000
    // })
    var page = this.data.page + 1;
    this.setData({
      page: page
    })
    console.log(this.data.page)
    this.onLoad()
  },

  /**
   * 点击事件
   */
  navBtn: function (e) {
    var that = this;
    console.log(e);
    var id = e.currentTarget.id;
    console.log(id);
    var teacher_id = that.data.course[id].id;
    console.log(that.data.course[id].name);
    console.log(teacher_id);
    wx.navigateTo({
      url: 'study?json=' + JSON.stringify(teacher_id) + '&course_name=' + JSON.stringify(that.data.course[id].name),
    })
  },



  adddetial: function () {
    console.log("成功");
    wx.navigateTo({
      url: 'taolun/taolun',
    })

  },

})