var app = getApp();     // 取得全局App
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpuVal: "",//input框内值
    SearchText: '搜索',//按钮值
    keydown_number: 0,//name检测input框内是否有内容
    input_value: "",//value值
    name_focus: true,//获取焦点
    person:[],
    page:1,//分页页数
    rows:10//每页的10条数据
  },
  onLoad: function (options) {

   
    let This = this;
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '社员信息'
    })
    var that = this;
    wx.request({
      url: app.globalData.url +'listMember.action?school_name=' + app.globalData.school + '&club_name=' + app.globalData.association+ '&page=' + that.data.page + '&rows=' + that.data.rows,
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
        if (res.data.rows.length!=0){
          for (var i = 0; i <= res.data.rows.length - 1; i++) {
            that.data.person.push({ name: res.data.rows[i].name, sno: res.data.rows[i].id });
            var person = that.data.person
            that.setData({//赋值给本地
              person: person
            })
          }
        } else if (res.data.rows.length == 0){
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

    var name = that.data.person[id].name;
    console.log(name);
    var sno = that.data.person[id].sno;
    console.log(sno);
    wx.navigateTo({
      url: '../sheyuanitem/sheyuanitem?name=' + JSON.stringify(name) + '&sno=' + JSON.stringify(sno),
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
   /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // wx.showToast({
    //   title: '正在加载',
    //   icon: 'loading',
    //   duration: 2000
    // })
      var page = this.data.page +1;
      this.setData({
        page :page
      })
      console.log(this.data.page)
      this.onLoad()
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