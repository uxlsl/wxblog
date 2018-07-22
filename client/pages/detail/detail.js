
const app = getApp()
const url = "http://www.linsl2018.top:7220/static/"
var md = `*人生苦短，我用Python!*`

Page({
  data: {
    md:md,
    filename:null
  },
  onLoad: function(options) {
    console.log('onLoad-query:' + options.filename)
    this.setData({filename:options.filename})
  },
  onReady: function() {
    this.query()
  },
  query: function() {
    var that = this
    wx.request({
      url: url + that.data.filename,
      success: function(res) {
        console.log(res.data)
        that.setData({md:res.data})
      }
    })
  },
})