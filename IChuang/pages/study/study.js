var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    teachername:"闵智超",
    id: "123456",
    intro:"8年开发管理经验/具有丰富的教学经验，蹭供职于华为/网易、联信永益担任项目经历，，有丰富的教学经验，蹭供职于华为/网易、联信永益担任项目",
    tabs: ["老师介绍", "课程目录"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    thissrc:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    courses:[
      {
        classname: '大型数据库设计1', src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        classname: '大型数据库设计2', src: 'http://129.204.200.64/123/images/VID_20190415_082745.mp4',
      },
    ]
  },
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '学习',
    })
    var name = JSON.parse(options.json)
    this.setData({
      teachername: name,
    })
    console.log(name);
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  choose:function(e){
    var id = e.currentTarget.id;
    console.log(id);
    console.log(this.data.courses[id].src);
    this.setData({
      thissrc: this.data.courses[id].src,
    })
    console.log(this.data.thissrc);
  }
});