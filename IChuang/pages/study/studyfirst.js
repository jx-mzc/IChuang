// pages/study/studyfirst.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      course:[
        { name: "大型数据库之斤斤计较", teacher: "闵智超", src:"http://129.204.200.64/123/images/haibao/haibao-1.jpg"},
        { name: "大型数据库之斤斤计较1", teacher: "闵智超11", src: "http://129.204.200.64/123/images/haibao/haibao-1.jpg" },
         { name: "大型数据库之斤斤计较2", teacher: "闵智超2", src:"http://129.204.200.64/123/images/haibao/haibao-1.jpg"}
      ]
  },
  navBtn: function (e) {
    var that = this;
    console.log(e);
    var id = e.currentTarget.id;
    console.log(id);
    var name = that.data.course[id].teacher;
    console.log(name);
    wx.navigateTo({
      url: 'study?json=' + JSON.stringify(name),
    })
  },
 
})