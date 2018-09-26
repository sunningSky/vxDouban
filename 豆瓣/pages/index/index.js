// var API_URL="http://t.yushu.im/v2/movie/top250";
var API_URL ='https://douban.uieee.com/v2/movie/top250'

Page({
  data:{
    movies:[],
    title:"加载中。。"
  },

  onLoad:function(){
    var that=this;

    wx.showToast({
      title:"加载中...",
      icon:"loading",
      duration:10000
    });

    wx.request({
      url: API_URL,
      data: {
        
      },
      header: {
        // 'content-type': "application/json"
        'content-type': 'json'
      },
      success(res) {
        console.log(res.data)
        wx.hideToast();
        var data=res.data;

        that.setData({
          title:data.total,
          movies:data.subjects
        });
      }
    })
  }

})