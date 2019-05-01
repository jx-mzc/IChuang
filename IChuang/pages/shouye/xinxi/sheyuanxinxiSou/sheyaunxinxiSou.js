var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:[],
    inpuVal: "",//input框内值
    listarr:[null],//创建数组
    SearchText: '搜索',//按钮值
    keydown_number: 0,//检测input框内是否有内容
    input_value:"",//value值
    name_focus: true//获取焦点
  },
  //取值input判断输入框内容修改按钮
  inputvalue: function (e) {
    this.setData({
      inputVal: e.detail.value
    })
    console.log(this.data.inputVal)
    if (e.detail.cursor != 0) {
      this.setData({
        keydown_number: 1, 
      })
      
    }
  },
  //搜索方法
  search: function () {
    var that = this;
    console.log(that.data.inputVal)
    wx.request({
      // console.log(getApp().globalData.association);
      // console.log(getApp().globalData.school);
      url: 'https://www.iwchuang.cn/ichuang/listMember.action?name='+that.data.inputVal,
      // data: JSON.stringify(),
      method: 'POST',
      // data: JSON.stringify({ name: that.data.inputVal, club_name: app.globalData.association}),
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type':'application/x-www-from-urlencoded;charset=utf-8'
      },
      // dataType:JSON,//该语句会将服务器端的数据自动转为string类型
      success: function (res) {
        console.log(res);
        console.log(res.data.length);
        if(res.data.rows.length ==  0){
            wx.showModal({
              title: '提示',
              content: '该社团没有该成员',
              showCancel:false
            })
        }else{
          for (var i = 0; i <= res.data.rows.length - 1; i++) {
            that.data.person.push({ name: res.data.rows[i].name, sno: res.data.rows[i].id });
          }
          var person = that.data.person
          that.setData({//赋值给本地
            person: person
          })
          console.log(that.data.person)
        }
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
  
  navBtn: function (e) {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let This = this;
    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '搜索'
    });
    //读取缓存历史搜索记录
    wx.getStorage({
      key: 'list_arr',
      success: function (res) {
        This.setData({
          listarr: res.data
        })
      }
    })
  },
  
});
