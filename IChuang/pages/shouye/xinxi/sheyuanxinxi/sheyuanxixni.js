Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:[
      { index: '小明', value: "123" },
      { index: '张三', value: "456"},
      { index: '李四', value: "789" },
      { index: '王二', value: "741"},
    ]
  },
  onLoad: function (options) {

    let This = this;
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '社员信息'
    })
  },
  getSearch:function(){
    wx.navigateTo({
      url: '../sheyuanxinxiSou/sheyaunxinxiSou',
    })
  },
  //打印数组
  tijiaoTime: function (e) {
    var that = this;
    let arry = that.data.person;
    console.log(that.data.person);
  },
  navBtn:function(e){
    var that = this;
    console.log(e);
    var id = e.currentTarget.id;
    console.log(id);
    var name = that.data.person[id].index;
    console.log(name);
    wx.navigateTo({
      url: '../sheyuanitem/sheyuanitem?json=' + JSON.stringify(name),
    })  
  }
})