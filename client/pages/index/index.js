//index.js
//获取应用实例
const app = getApp()
const url = "https://www.linsl2018.top:7220/list"
Page({
  data: {
    list: [],
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
    var filename = e.currentTarget.dataset.filename
    wx.navigateTo({
      url:"/pages/detail/detail?" + "filename=" + filename
    })
  }
})
