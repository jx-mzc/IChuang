// const downloadExampleUrl = "http://129.204.200.64/123/images/file.doc";
// const tempFilePath = "http://129.204.200.64/123/images/file.doc";

Page({
  data: {
    name: ''
  },
  onLoad: function (options) {
    var name = JSON.parse(options.json)
    this.setData({
      name: name,
    })
    console.log(name)
  },
  showfile: function () {
    wx.downloadFile({
      url: 'http://129.204.200.64/123/images/file.doc',
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