//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    listblog: [{
      tid:123, title: 'foo',
    }, {
      tid:345, title: 'bar'
    }]
  },
  show_detail: function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.tid)
  }
})
