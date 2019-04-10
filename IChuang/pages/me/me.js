// pages/me/me.js
Page({
  data:{
    num:0
  },
  //获取微信用户信息
  getMyInfo:function(e){
    let info = e.detail.userInfo;
    this.setData({
      isLogin:true,  //确认登录状态
      sec:info.avatarUrl,  //更新图片来源
      nickName:info.nickName  //更新昵称
    })
  }
})