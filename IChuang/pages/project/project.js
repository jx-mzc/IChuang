<<<<<<< HEAD
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  data: {
    tabs: ["未申请项目", "申请中项目", "申请成功项目", "申请失败项目"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    project: [{
        index: '蒸汽洗车',
        info: '汽车行业的发展大家都是有目共睹，为什么经常会堵车？汽车行业的发展大家都是有目共睹，为什么经常会堵车？汽车行业的发展大家都是有目共睹，为什么经常会堵车？',

      },
      {
        index: '共享经济',
        info: '这是一个神奇的行业，在短短几年的时间内造就很很多独角兽。这是一个神奇的行业，在短短几年的时间内造就很很多独角兽。这是一个神奇的行业，在短短几年的时间内造就很很多独角兽。'
      },
      {
        index: '生物科技',
        info: '越来越多的上市公司都在布局基因测序'
      },
      {
        index: '内容付费',
        info: '从平台来看有喜马拉雅、荔枝等;'
      },
      {
        index: 'K12教育',
        info: '所谓的K12教育，“K”代表Kindergarten(幼儿园)'
      },
    ]
=======
// pages/me/appraisal/appraisal.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["所有", "申请中", "申请失败"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
>>>>>>> 0774c819770533de41cc4a63b91184ef36243fa8
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
<<<<<<< HEAD
  projectDetails:function(e) {
    console.log(e)
    var id = e.currentTarget.id;
      console.log(id)
 
    var title = this.data.project[id].index;
    console.log(title)
    wx.navigateTo({
      url: 'projectDetails/projectDetails?title=' + JSON.stringify(title),
    })
  },
=======
>>>>>>> 0774c819770533de41cc4a63b91184ef36243fa8
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
<<<<<<< HEAD


=======
>>>>>>> 0774c819770533de41cc4a63b91184ef36243fa8
});