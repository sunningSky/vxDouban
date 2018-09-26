// var API_URL = "http://t.yushu.im/v2/movie/search?q=";
var API_URL = 'https://douban.uieee.com/v2/movie/search?q='

Page({
  data: {
    movies: []
  },
  search:function(e){
    if(!e.detail.value){
      return;
    }
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    });

    var that = this;
    wx.request({
      url: API_URL + e.detail.value,
      data: {

      },
      header: {
        // 'content-type': "application/json"
        'content-type': "json"
      },
      success(res) {
        console.log(res.data);
        wx.hideToast();

        that.setData({
          movies: res.data.subjects
        });
      }
    });
  }
});