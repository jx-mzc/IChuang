//index.js
//获取应用实例
var app = getApp();
var register = require('../../../../utils/refreshLoadRegister.js');
Page({
  data: {
    currentSize: 0,
    words: []
  },
  onLoad: function () {
    var _this = this;
    register.register(this);
    //获取words  
    this.doLoadData(0, 6);
  },
  doLoadData(currendSize, PAGE_SIZE) {
    wx.showLoading({
      title: 'loading...',
    });
    var that = this;
    setTimeout(function () {
      var length = currendSize + PAGE_SIZE;
      // console.log('currendSize:', currendSize);
      for (var i = currendSize; i < length; i++) {
        /**从数据库中获取数组后赋值到words数组 */
        that.data.words.push({ id: i, index: "大赛1", value: "123", liuliang: "234" });
      }
      var words = that.data.words;
      that.data.currentSize += PAGE_SIZE;
      that.setData({
        words: words
      });
      wx.hideLoading();
      register.loadFinish(that, true);
    }, 2000);
  },
  //模拟刷新数据
  refresh: function () {

    this.setData({
      words: [],
      currentSize: 0
    });
    this.doLoadData(0, 6);
  },
  //模拟加载更多数据
  loadMore: function () {
    this.doLoadData(this.data.currentSize, 6);
  },
  navBtn: function (e) {
    var that = this;
    console.log(e);
    var id = e.currentTarget.id;
    console.log(id);
    var name = that.data.words[id].index;
    console.log(name);
    wx.navigateTo({
      url: '../bisaixinxiitem/bisaixinxiitem?json=' + JSON.stringify(name),
    })
  }
})