//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude, longitude);

      }
     })
  },

})
