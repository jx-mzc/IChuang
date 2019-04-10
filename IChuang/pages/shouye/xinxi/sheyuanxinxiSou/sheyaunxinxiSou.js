Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpuVal: "",//input框内值
    listarr: [],//创建数组
    SearchText: '搜索',//按钮值
    keydown_number: 0,//检测input框内是否有内容
    input_value: "",//value值
    name_focus: true//获取焦点
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
      
    } else {
      this.setData({
        keydown_number: 0
      })
    }
  },
  //搜索方法
  search: function () {
    if (this.data.keydown_number == 1) {
      let This = this;
      //把获取的input值插入数组里面
      let arr = this.data.listarr;
      var i = this.data.input_value;
      console.log(this.data.inputVal)
      console.log(i)
      console.log(this.data.inputVal);
       let name = this.data.inputVal
        wx.navigateTo({
        url: '../sheyuanitem/sheyuanitem?json=' + JSON.stringify(name),
        })
      this.data.inputVal = "";
      this.data.keydown_number=0;
      console.log(this.data.inputVal)
      //根据姓名i进行迷糊查找




      //判断取值是手动输入还是点击赋值
      if (this.data.input_value == "") {
        // console.log('进来第er个')
        // 判断数组中是否已存在
        let arrnum = arr.indexOf(this.data.inputVal);
        console.log(arr.indexOf(this.data.inputVal));
        if (arrnum != -1) {
          // 删除已存在后重新插入至数组
          arr.splice(arrnum, 1)
          arr.unshift(this.data.inputVal);
     
        } else {
          arr.unshift(this.data.inputVal);
        }

      } else {
        console.log('进来第一个')
        let arr_num = arr.indexOf(this.data.input_value);
        console.log(arr.indexOf(this.data.input_value));
        if (arr_num != -1) {
          arr.splice(arr_num, 1)
          arr.unshift(this.data.input_value);
        } else {
          arr.unshift(this.data.input_value);
        }
    
      }
      // console.log(arr)

      //存储搜索记录
      wx.setStorage({
        key: "list_arr",
        data: arr
      })


      //取出搜索记录
      wx.getStorage({
        key: 'list_arr',
        success: function (res) {
          This.setData({
            listarr: res.data
          })
        }
      })
      this.setData({
        input_value:'',
      })
    } else {
      
      console.log("取消")
    }

  },
  //清除搜索记录
  delete_list: function () {
    //清除当前数据
    this.data.inputVal=""
    this.setData({
      listarr: []
    });
    //清除缓存数据
    wx.removeStorage({
      key: 'list_arr'
    })
  },
  //点击赋值到input框
  this_value: function (e) {
    this.setData({
      name_focus: true
    })
    let value = e.currentTarget.dataset.text;
    this.data.inputVal=value
    this.setData({
      input_value: value,
      SearchText: "搜索",
      keydown_number: 1
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
