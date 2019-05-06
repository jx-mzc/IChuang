var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp();     // 取得全局App
Page({
  data: {
    course_name:'',//课程名
    photo:"",//教师头像
    teachername:"",//教师姓名
    id: "",//教师编号
    intro:"",//教师介绍
    tabs: ["老师介绍", "课程目录","课程练习"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    thissrc:"",//切换后的适配地址
    pages: 1,//分页页数
    rows: 10,//每页行数
    courseChapers:[],//课程目录列表
    courseExcise:[],//课程练习列表

  },
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '学习',
    })
    console.log(options)
    var teacher_id = JSON.parse(options.json)
    var course_name = JSON.parse(options.course_name)
    console.log(this.data.course_name)
    this.setData({
      id: teacher_id,
      course_name: course_name
    })
    //请求获取教师信息
    wx.request({
      url: app.globalData.url+'getTeacher.action?id='+that.data.id, 
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'application/x-www-from-urlencoded;charset=utf-8',
      },
      success:function(res){
        console.log(res)
        that.setData({
          teachername: res.data.Teacher.name,
          id: res.data.Teacher.id,
          intro: res.data.Teacher.introduction,
          photo: res.data.Teacher.photo,
        })
      },
      fail:function(res){
        console.log("失败")
      },
      complete: function () {
        // complete
        console.log('教师信息请求完毕');
      }
    })
    //请求获取课程信息
    wx.request({
      url: app.globalData.url +'listCourseChapter.action?page=' + that.data.pages + '&rows=' + that.data.rows + '&course_name' + that.data.course_name,
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
        if (res.data.rows.length != 0) {
          for (var i = 0; i <= res.data.rows.length - 1; i++) {
            that.data.courseChapers.push({ name: res.data.rows[i].name, video_path: res.data.rows[i].video_path});
            var courseChapers = that.data.courseChapers
            that.setData({//赋值给本地
              courseChapers: courseChapers
            })
          }
        } else if (res.data.rows.length == 0) {
          wx.showToast({
            title: '信息加载完毕',
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
        console.log('课程信息请求完毕');
      }
    })

    //请求获取课程练习信息
    wx.request({
      
      url: app.globalData.url +'listCourseExercise.action?page=' + that.data.pages + '&rows=' + that.data.rows,
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
        if (res.data.rows.length != 0) {
          for (var i = 0; i <= res.data.rows.length - 1; i++) {
            that.data.courseExcise.push({ name: res.data.rows[i].course_name, id: res.data.rows[i].id });
            var courseExcise = that.data.courseExcise
            that.setData({//赋值给本地
              courseExcise: courseExcise
            })
          }
        } else if (res.data.rows.length == 0) {
          wx.showToast({
            title: '信息加载完毕',
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
        console.log('课程练习信息请求完毕');
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  choose:function(e){
    console.log(e)

    
    var id = e.currentTarget.id;
    console.log(id);
    console.log(this.data.courseChapers[id].video_path);
    this.setData({
      thissrc: this.data.courseChapers[id].video_path,
    })
    console.log(this.data.thissrc);
  },
  show:function(e){
    console.log(e);
  },
 lianxi:function(e){
   console.log(e)
   var id = e.currentTarget.id;
   console.log(id)
   var name = this.data.courseExcise[id].id;
  //  var course_name = this.data.courseExcise[id].id;
   console.log(name)
   wx.navigateTo({
     url: 'lianxi/lianxi?id=' + JSON.stringify(name) + '&course_name=' + JSON.stringify(this.data.course_name),
     
   })
 }
});