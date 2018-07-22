//index.js
//获取应用实例
const app = getApp()
const url = "http://localhost:5000/list"
Page({
  data: {
    list: [{
      tid:123, title: 'foo',
    }, {
      tid:345, title: 'bar'
    }]
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: url,
      success: function(res){
        console.log(res.data)
        that.setData({
          list:res.data
        })
      }
    }
    )
  },
  show_detail: function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.filename)
  }
})
