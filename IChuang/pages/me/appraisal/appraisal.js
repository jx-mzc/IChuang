
// pages/study/lianxi/lianxi.js
var app = getApp();

function two_char(n) {
  return n >= 10 ? n : "0" + n;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionbody: '',//题目
    A: '',
    B: '',
    C: '',
    D: '',
    Ans: '',
    countj: true,//判断下一题，当做题后为false,刷新题目为true
    bindcount: 0,
    errorcount: 0,
    rightcount: 0,
    count: 0,
    time: '',
    index: '',
    choose: [],
    finalanswer: [],//最后输出的答案
    timer: '', //定时器名字
    countDownNum: '10',//倒计时初始值
    class_id: '',//考核练习id
    class_name:'',//考核练习名
    i: 0,//i为当前题号
    course_name: ''//当前练习课程名
  },

  onLoad: function (options) {

    //设置当前页标题
    wx.setNavigationBarTitle({
      title: '课程练习'
    })
    console.log(options)
    var that = this;
    wx.request({
      url: 'https://www.iwchuang.cn/ichuang/listTestExercise.action',
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log(res)
        that.setData({
          class_id: res.data.rows[0].post_id,
          class_name: res.data.rows[0].post_name,
        })

      },
      fail:function(res){
        console.log('失败')
      }
    }),
    wx.request({
      url: 'https://www.iwchuang.cn/ichuang/listTestExerciseQuestion.action' ,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log(res)
        console.log('res.data.rows.length' + res.data.rows.length)
        var i = that.data.i
        if (i < res.data.rows.length - 1) {
          var i = that.data.i
          that.setData({
            questionbody: res.data.rows[i].question,
            A: res.data.rows[i].choice_A,
            B: res.data.rows[i].choice_B,
            C: res.data.rows[i].choice_C,
            D: res.data.rows[i].choice_D,
            Ans: res.data.rows[i].answer
          })
        } else {
          wx.showToast({
            title: '当前章节题目老师未上传',
            duration: 2000
          })
        }
        wx.hideToast()
        console.log(that.data.person)
      },
      fail: function (res) {
        console.log(".....fail.....");
      },
      complete: function () {
        // complete
        // console.log('onload方法结束');
      }
    })
    this.refresh();
    console.log("refresh调用成功")
    wx.showModal({
      title: '提示：',
      showCancel: false,
      content: '本次考核不能更改答案，请谨慎选择',
      success: function () {
      }
    })
    if (that.data.bindcount == 0) {
      this.countDown();
    }

  },
  //倒计时
  countDown: function () {
    let that = this;
    let choose = this.data.choose;
    let countDownNum = that.data.countDownNum; //获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () { //这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })

        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
          console.log(choose)
          var grade = that.data.count;
          console.log(grade);
          var finalanswer = that.data.finalanswer;
          wx.showModal({
            title: '提示：',
            showCancel: false,
            content: '考核时间结束，点击确定查看分数',
            success: function (res) {
              if (res.confirm) {
              
                wx.request({
                  url: 'https://www.iwchuang.cn/ichuang/addTestExerciseResult.action',
                  method: 'POST',
                  data: JSON.stringify({
                    assessment_name: that.data.class_name,
                    assessment_id:that.data.class_id,
                    member_name: app.globalData.username,
                    member_id: app.globalData.sno,
                    score: that.data.count,
 
                  }),
                  header: {
                    'content-type': 'application/json' // 默认值
                    // 'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
                  },
                  success(res) {
                    console.log('成功')
                    console.log(res)
                  },
                  fail(res) {
                    console.log('失败')
                  }
                })
                wx.redirectTo({
                  url: 'getresult/getresult?json=' + JSON.stringify(choose) + '&grade=' + JSON.stringify(grade) + '&fianlanswer=' + JSON.stringify(finalanswer),
                })
              }
            }
          })
        }
      }, 1000)
    })
  },

  /**
   * 下一题
   */
  refresh: function (e) {
    console.log('finalanswer' + this.data.finalanswer);
    var that = this;
    var i = this.data.i;
    that.setData({
      i: i + 1
    })
    wx.request({
      url: 'https://www.iwchuang.cn/ichuang/listCourseExerciseQuestion.action?exercise_id=' + that.data.class_id,
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success: function (res) {
        console.log(res)
        console.log('res.data.rows.length' + res.data.rows.length)
        var i = that.data.i
        console.log(i)
        if (i <= res.data.rows.length - 1) {
          var i = that.data.i
          that.setData({
            questionbody: res.data.rows[i].question,
            A: res.data.rows[i].choice_A,
            B: res.data.rows[i].choice_B,
            C: res.data.rows[i].choice_C,
            D: res.data.rows[i].choice_D,
            Ans: res.data.rows[i].answer,
            countj: true,
          })
        } else {
          console.log("执行结束")
          let choose = that.data.choose;
          let grade = that.data.count;
          let finalanswer = that.data.finalanswer;
          clearInterval(that.data.timer);//清楚定时器
          console.log(choose);
          console.log(grade);
          console.log(finalanswer);
          wx.showModal({
            title: '提示：',
            showCancel: false,
            content: '完成考核，点击提交',
            success: function (res) {
              if (res.confirm) {
            
                wx.request({
                  url: 'https://www.iwchuang.cn/ichuang/addTestExerciseResult.action',
                  method: 'POST',
                  data: JSON.stringify({
                    assessment_name: that.data.class_name,
                    assessment_id: that.data.class_id,
                    member_name: app.globalData.username,
                    member_id: app.globalData.sno,
                    score: that.data.count,
           
                  }),
                  header: {
                    'content-type': 'application/json' // 默认值
                    // 'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
                  },
                  success(res) {
                    console.log('成功')
                    console.log(res)
                  },
                  fail(res) {
                    console.log('失败')
                  }
                })
                wx.redirectTo({
                  url: 'getresult/getresult?json=' + JSON.stringify(choose) + '&grade=' + JSON.stringify(grade) + '&fianlanswer=' + JSON.stringify(finalanswer),
                })
              }
            }
          })
        }
        wx.hideToast()
        console.log(that.data.person)
      },
      fail: function (res) {
        console.log(".....fail.....");
      },
      complete: function () {
        // complete
        console.log('练习信息请求完毕');
      }


    })

  },
  /**
   * 选择
   */
  disp: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
    var num = e.currentTarget.dataset.num;
    console.log('num值' + num);
    var count = e.currentTarget.dataset.count;
    var bindcount = e.currentTarget.dataset.bindcount;
    var rightcount = e.currentTarget.dataset.rightcount;
    var errorcount = e.currentTarget.dataset.errorcount;

    if (this.data.countj) {
      if (id == num) {
        let choose = this.data.choose;
        choose.push(id);
        console.log(this.data.choose);

        let Ans = this.data.Ans;
        let finalanswer = this.data.finalanswer;
        finalanswer.push(num);
        console.log(this.data.finalanswer)

        this.setData({
          show: '正确！',
          count: count + 5,
          countj: false,
          bindcount: bindcount + 1,
          rightcount: rightcount + 1,
        })
      } else {
        let choose = this.data.choose;
        choose.push(id);
        console.log(this.data.choose);

        let finalanswer = this.data.finalanswer;
        finalanswer.push(num);
        console.log(this.data.finalanswer)

        this.setData({
          show: '错误！' + '答案：' + num,
          count: count - 2,
          countj: false,
          bindcount: bindcount + 1,
          errorcount: errorcount + 1,
        })
      }
    }
  },
  onUnload: function () {
    clearInterval(this.data.timer);//清楚定时器
  }
})