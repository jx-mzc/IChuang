//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    page: 1,//分页页数
    rows: 10,//每页的10条数据
    competition: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: app.globalData.url +'listCompetition.action?page=' + this.data.page + '&rows=' + this.data.rows,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log("成功");
        console.log(res);
        console.log(res.data.total)
        console.log(res.data.rows.length)
        if (res.data.rows.length != 0) {
          for (var i = 0; i <= res.data.rows.length - 1; i++) {
            that.data.competition.push({ id: res.data.rows[i].id, name: res.data.rows[i].name, post: res.data.rows[i].post, end_time: res.data.rows[i].end_time });
            var competition = that.data.competition
            that.setData({//赋值给本地
              competition: competition
            })
          }
        } else if (res.data.rows.length == 0) {
          wx.showToast({
            title: '信息加载完毕',
            duration: 2000
          })
        }
        // wx.hideToast()
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
    //   title: '正在加载',
    //   icon: 'loading',
    //   duration: 2000
    // })
    var page = this.data.page + 1;
    this.setData({
      page: page
    })
    console.log(this.data.page)
    this.onLoad()
  },



  //按钮跳转
  navBtn: function (e) {
    var that = this;
    console.log(e);
    var id = e.currentTarget.id;
    console.log(id);
    var name = that.data.competition[id].name;
    console.log(name);
    var id = that.data.competition[id].id;
    console.log(id);
    wx.navigateTo({
      url: '../bisaixinxiitem/bisaixinxiitem?json=' + JSON.stringify(name) + '&id=' + JSON.stringify(id),
    })
  }
})