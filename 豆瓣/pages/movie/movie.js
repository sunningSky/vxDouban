// pages/movie/movie.js
// var API_URL ="http://t.yushu.im/v2/movie/subject/";
var API_URL = 'https://douban.uieee.com/v2/movie/subject/'

Page({
  data:{
      movies:[]
  },
  onLoad:function(params){
    var that=this;
    wx.request({
      url: API_URL+params.id,
      data:{

      },
      header:{
        // 'content-type': "application/json"
        'content-type':"json"
      },
      success(res){
        // console.log(res.data);
        that.setData({
          movies:res.data
        });
      }
    })
  }
});