Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      arr.push(name);
      console.log(arr);
        wx.navigateTo({
        url: '../sheyuanitem/sheyuanitem?json=' + JSON.stringify(name),
        })
      this.data.inputVal = i;
      this.data.keydown_number=0;
      console.log(this.data.inputVal)
      //判断取值是手动输入还是点击赋值
      if (this.data.input_value == "") {//手动输入
         console.log('手动输入')
        // 判断数组中是否已存在
        let arrnum = arr.indexOf(this.data.inputVal);//indexOf检索字符串，没有检索到返回-1
        console.log('进来第' + arrnum+'个');
        if (arrnum != -1) {
          // 删除已存在后重新插入至数组
          console.log(this.data.inputVal);
          arr.splice(arrnum, 1);
          arr.unshift(this.data.inputVal);//unshift将新加的元素放在起始位置
        } else {
          console.log("插到首个位置");
          arr.unshift(this.data.inputVal);
        }

      } else {//点击赋值
        console.log('点击赋值')
        let arr_num = arr.indexOf(this.data.input_value);
        console.log('点击赋值' + arr_num + '点击赋值');
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
          console.log(res)
          This.setData({
            listarr: res.data
          })
        }
      })
     
    } else {//input框没内容
      
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
