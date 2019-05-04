
Page({
  data:{
    name:'',//活动名
    id:'',//活动id
    start_time:'',//活动开始时间
    end_time: '',//活动结束时间
    post:'',//活动发布方
    juban:'',//活动举办方
    acdoc:null,//活动文档
    doc:null//报名文档

  },
  onLoad: function (options) {
    var name = JSON.parse(options.json)
    var id = JSON.parse(options.id)
    this.setData({
      name: name,
      id:id
    })
    console.log(name)
    console.log("id"+this.data.id)
    var that = this;
    wx.request({
      url: 'https://www.iwchuang.cn/ichuang/listActivity.action?id=' + that.data.id,
    
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log(res);
        that.setData({
          start_time: res.data.rows[0].start_time,
          end_time: res.data.rows[0].end_time,
          post: res.data.rows[0].post,
          juban: res.data.rows[0].hold,
          acdoc: res.data.rows[0].notification_file,
          doc: res.data.rows[0].apply_file,
        })
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
  showfile:function(){
    var that = this
    console.log(that.data.acdoc)
    wx.downloadFile({
      url: that.data.acdoc,
      success: function (res) {
        console.log("下载成功")
        console.log(res);
        var path = res.tempFilePath;
        wx.openDocument({
          filePath: path,

          success: function (res) {
            console.log('打开成功');
          }, fail: function (res) {
            console.log("打开失败")

            console.log(res)
          }
        })
      },
      fail: function (res) {
        console.log("下载失败")
        console.log(res)
      }
    })
  }
 
})