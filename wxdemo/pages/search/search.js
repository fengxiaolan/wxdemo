// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002DbpNa1zRNqa.jpg?max_age=2592000',
    name: '9420',
    author: '许巍',
    src: 'http://dl.stream.qqmusic.qq.com/C400000kbQ6l3srzE5.m4a?vkey=3BD98B6E159FA11C64C83C19C484BAEBE392BFD71B342B689C8DC2DED2EC6AF4DA7EBFCD459DC0D712201E64C3C7935113166DDE8F0BCC0A&guid=939597480&uin=0&fromtag=66',
  controls: [{
    id: 1,
    iconPath: '/static/images/boy.png',
    position: {
      left: 20,
      top: 200,
      width: 50,
      height: 50
    },
    clickable: true
  }],
  markers: [{
    iconPath: "/static/images/girl.png",
    id: 0,
    latitude: 30.623360,
    longitude: 104.076328,
    width: 40,
    height:40,
    callout:{
      content:"国际大厦中心",
       color:"#f00",
        fontSize:20,
         borderRadius:5,
          bgColor:"#eee",
          display:'ALWAYS'
    }
  }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  takePhote() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success(res) {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  handlecontrol(e){
    console.log(e.controlId)
    var _this=this;
    wx.getLocation({  //获取当前位置(点击控制)
      success(res) {
        _this.setData({
          'markers[0].latitude':res.latitude,
          'markers[0].longitude': res.longitude,
        });
        console.log(res.accuracy)
      },
    })
  },
  openMap(){
    wx.openLocation({
      latitude: 30.623360,
      longitude: 104.076328,
      name:"国际中心",
      address:"商业中心",
      success(res){
        console.log(res)
      }

    })
  }

})