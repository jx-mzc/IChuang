// pages/shouye/sheyuan/sheyuan.js
var app = getApp();     // 取得全局App
Page({
  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true, //是否隐藏对话框
    url1: "../../images/tab/kongbai.png",
    url2: "../../images/tab/kongbai.png",
    url3: "../../images/tab/kongbai.png",
    url4: "../../images/tab/kongbai.png",
    url5: "../../images/tab/kongbai.png",
    url6: "../../images/tab/kongbai.png",
    url7: "../../images/tab/kongbai.png",
    url8: "../../images/tab/kongbai.png",
    url9: "../../images/tab/kongbai.png",
    url10: "../../images/tab/kongbai.png",
    url11: "../../images/tab/kongbai.png",
    url12: "../../images/tab/kongbai.png",
    url13: "../../images/tab/kongbai.png",
    url14: "../../images/tab/kongbai.png",
    url15: "../../images/tab/kongbai.png",
    url16: "../../images/tab/kongbai.png",
    url17: "../../images/tab/kongbai.png",
    url18: "../../images/tab/kongbai.png",
    url19: "../../images/tab/kongbai.png",
    url20: "../../images/tab/kongbai.png",
    url21: "../../images/tab/kongbai.png",
    arry: [{
        index: 'j1',
        value: 0
      },
      {
        index: 'j2',
        value: 0
      },
      {
        index: 'j3',
        value: 0
      },
      {
        index: 'j4',
        value: 0
      },
      {
        index: 'j5',
        value: 0
      },
      {
        index: 'j6',
        value: 0
      },
      {
        index: 'j7',
        value: 0
      },
      {
        index: 'j8',
        value: 0
      },
      {
        index: 'j9',
        value: 0
      },
      {
        index: 'j10',
        value: 0
      },
      {
        index: 'j11',
        value: 0
      },
      {
        index: 'j12',
        value: 0
      },
      {
        index: 'j13',
        value: 0
      },
      {
        index: 'j14',
        value: 0
      },
      {
        index: 'j15',
        value: 0
      },
      {
        index: 'j16',
        value: 0
      },
      {
        index: 'j17',
        value: 0
      },
      {
        index: 'j18',
        value: 0
      },
      {
        index: 'j10',
        value: 0
      },
      {
        index: 'j20',
        value: 0
      },
      {
        index: 'j21',
        value: 0
      },
    ],

  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '空闲时间登记',
    })
  },
  /**
   * 点击状态栏
   */

  showImg1: function() {
    var that = this;
    var text = this.data.arry[0].value;
    var url = this.data.url1;
    var text1 = text + 1;
    console.log(text1);
    var i = (text1) % 2;
    if (i == 1) {
      this.setData({
        url1: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url1: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[0].value']: text1
    })
  },
  showImg2: function() {
    var that = this;
    var text = this.data.arry[1].value;
    var url = this.data.url2;
    var text1 = text + 1;
    console.log(text1);
    var i = (text1) % 2;
    if (i == 1) {
      this.setData({
        url2: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url2: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[1].value']: text1
    })
  },
  showImg3: function() {
    var that = this;
    var text = this.data.arry[2].value;
    var url = this.data.url3;
    var text1 = text + 1;
    console.log(text1);
    var i = (text1) % 2;
    if (i == 1) {
      this.setData({
        url3: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url3: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[2].value']: text1
    })
  },
  showImg4: function() {
    var that = this;
    var text = this.data.arry[3].value;
    var url = this.data.url4;
    var text1 = text + 1;
    console.log(text1);
    var i = (text1) % 2;
    if (i == 1) {
      this.setData({
        url4: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url4: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[3].value']: text1
    })
  },
  showImg5: function() {
    var that = this;
    var text = this.data.arry[4].value;
    var url = this.data.url5;
    var text1 = text + 1;
    console.log(text1);
    var i = (text1) % 2;
    if (i == 1) {
      this.setData({
        url5: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url5: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[4].value']: text1
    })
  },
  showImg6: function() {
    var that = this;
    var text = this.data.arry[5].value;
    var url = this.data.url6;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url6: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url6: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[5].value']: text1
    })
  },
  showImg7: function() {
    var that = this;
    var text = this.data.arry[6].value;
    var url = this.data.url7;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url7: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url7: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[6].value']: text1
    })
  },
  showImg8: function() {
    var that = this;
    var text = this.data.arry[7].value;
    var url = this.data.url8;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url8: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url8: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[7].value']: text1
    })
  },
  showImg9: function() {
    var that = this;
    var text = this.data.arry[8].value;
    var url = this.data.url9;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url9: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url9: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[8].value']: text1
    })
  },
  showImg10: function() {
    var that = this;
    var text = this.data.arry[9].value;
    var url = this.data.url10;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url10: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url10: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[9].value']: text1
    })
  },
  showImg11: function() {
    var that = this;
    var text = this.data.arry[10].value;
    var url = this.data.url11;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url11: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url11: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[10].value']: text1
    })
  },
  showImg12: function() {
    var that = this;
    var text = this.data.arry[11].value;
    var url = this.data.url12;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url12: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url12: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[11].value']: text1
    })
  },
  showImg13: function() {
    var that = this;
    var text = this.data.arry[12].value;
    var url = this.data.url13;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url13: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url13: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[12].value']: text1
    })
  },
  showImg14: function() {
    var that = this;
    var text = this.data.arry[13].value;
    var url = this.data.url14;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url14: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url14: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[13].value']: text1
    })
  },
  showImg15: function() {
    var that = this;
    var text = this.data.arry[14].value;
    var url = this.data.url15;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url15: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url15: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[14].value']: text1
    })
  },
  showImg16: function() {
    var that = this;
    var text = this.data.arry[15].value;
    var url = this.data.url16;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url16: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url16: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[15].value']: text1
    })
  },
  showImg17: function() {
    var that = this;
    var text = this.data.arry[16].value;
    var url = this.data.url17;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url17: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url17: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[16].value']: text1
    })
  },
  showImg18: function() {
    var that = this;
    var text = this.data.arry[17].value;
    var url = this.data.url18;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url18: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url18: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[17].value']: text1
    })
  },
  showImg19: function() {
    var that = this;
    var text = this.data.arry[18].value;
    var url = this.data.url19;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url19: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url19: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[18].value']: text1
    })
  },
  showImg20: function() {
    var that = this;
    var text = this.data.arry[19].value;
    var url = this.data.url20;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url20: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url20: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[19].value']: text1
    })
  },
  showImg21: function() {
    var that = this;
    var text = this.data.arry[20].value;
    var url = this.data.url21;
    var text1 = text + 1;
    var i = (text1) % 2;
    console.log(text1);
    if (i == 1) {
      this.setData({
        url21: "../../images/tab/you.png"
      })
    }
    if (i == 0) {
      this.setData({
        url21: "../../images/tab/kongbai.png"
      })
    }
    that.setData({
      ['arry[20].value']: text1
    })
  },
  // 空闲时间表提交
  tijiaoTime: function(e) {
    var that = this;
    let arry = that.data.arry
    console.log(that.data.arry);

  },
  //事件处理函数
  bindViewTap: function() {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  //确定按钮点击事件
  modalBindaconfirm: function() {
    var that = this;
    let arry = that.data.arry
    console.log(that.data.arry);
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
    console.log(getApp().globalData.sno),
      console.log(that.data.arry[0].value),
      wx.request({
      url: app.globalData.url +'getFreeTime.action',
        method: 'POST',
        data: JSON.stringify({
          member_id: getApp().globalData.sno,
        }),
        header: {
          "content-type": "application/json"
        },
        success: function(res) {

          console.log(res)
          if (res.data == "FAIL") {
            // console.log("不存在")
            wx.request({

              url: app.globalData.url +'addFreeTime.action',
              method: 'POST',
              data: JSON.stringify({
                id: getApp().globalData.sno,
                member_id: getApp().globalData.sno,
                m1: that.data.arry[0].value,
                m2: that.data.arry[1].value,
                m3: that.data.arry[2].value,
                tu1: that.data.arry[3].value,
                tu2: that.data.arry[4].value,
                tu3: that.data.arry[5].value,
                w1: that.data.arry[6].value,
                w2: that.data.arry[7].value,
                w3: that.data.arry[8].value,
                th1: that.data.arry[9].value,
                th2: that.data.arry[10].value,
                th3: that.data.arry[11].value,
                f1: that.data.arry[12].value,
                f2: that.data.arry[13].value,
                f3: that.data.arry[14].value,
                sa1: that.data.arry[15].value,
                sa2: that.data.arry[16].value,
                sa3: that.data.arry[17].value,
                su1: that.data.arry[18].value,
                su2: that.data.arry[19].value,
                su3: that.data.arry[20].value,
              }),
              header: {
                "content-type": "application/json"
              },
              success: function(res) {
                console.log("成功")
                console.log(res)
                wx.showToast({
                  title: '提交成功',
                })
              },
              fail: function(res) {
                console.log(res)
              }
            })
          }
          if (res.data == "SUCCESS") {
            console.log("存在")
            wx.showModal({
              title: '提示',
              content: '您在这一周内已提交过',
              showCancel:false
            })
          }
        },
        fail: function(res) {
          console.log(res)
        }
      })

  },
  //取消按钮点击事件
    modalBindcancel: function() {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  }
})