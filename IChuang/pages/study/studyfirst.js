// pages/study/studyfirst.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      course:[
        // { name: "大型数据库之斤斤计较", teacher: "闵智超", src:"http://129.204.200.64/123/images/haibao/haibao-1.jpg"},
        // { name: "大型数据库之斤斤计较1", teacher: "闵智超11", src: "http://129.204.200.64/123/images/haibao/haibao-1.jpg" },
        //  { name: "大型数据库之斤斤计较2", teacher: "闵智超2", src:"http://129.204.200.64/123/images/haibao/haibao-1.jpg"}
      ],
      pages:1,//分页页数
      rows:10//每页行数
  },
  onLoad:function(){
    
    var that = this;
    wx.request({
      url: 'https://www.iwchuang.cn/ichuang/listCourse.action?page=' + that.data.pages + '&rows=' + that.data.rows,
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
    var page = this.data.page + 1;
    this.setData({
      page: page
    })
    console.log(this.data.page)
    this.onLoad()
  },
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