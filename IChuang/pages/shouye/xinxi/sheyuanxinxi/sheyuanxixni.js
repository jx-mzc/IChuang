Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpuVal: "",//input框内值
    SearchText: '搜索',//按钮值
    keydown_number: 0,//检测input框内是否有内容
    input_value: "",//value值
    name_focus: true,//获取焦点
    person:[
      { index: '小明', value: "123" },//person[0]
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
    var name = that.data.person[id].index1;
    console.log(name);
    wx.navigateTo({
      url: '../sheyuanitem/sheyuanitem?json=' + JSON.stringify(name),
    })  
  },
  //取值input判断输入框内容修改按钮
  inputvalue: function (e) {
    this.setData({
      inputVal: e.detail.value
    })
    if (e.detail.cursor != 0) {
      this.setData({
        keydown_number: 1,
      })


    }
  },
  //搜索方法
  search: function () {
    if (this.data.keydown_number == 1) {//
      let This = this;
      //把获取的input值插入数组里面
      let arr = this.data.listarr;
      var i = this.data.input_value;
      // console.log(this.data.inputVal)
      console.log(this.data.inputVal);
      let name = this.data.inputVal
      console.log("输入的值" + name + "输入的值");
      // arr.push(name);
      console.log(arr);
      wx.navigateTo({
        url: '../sheyuanitem/sheyuanitem?json=' + JSON.stringify(name),
      })
      this.data.inputVal = i;
      this.data.keydown_number = 0;
      console.log(this.data.inputVal)
     
      // console.log(arr)

    } else {//input框没内容

      console.log("取消")
    }

  }
})