var app = getApp();//获取全局的 getApp()函数可以用来获取到小程序实例
import until from '../../utils/util.js'

// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"今晚吃的饼子",
    name:"lala",
    obj:{
      game:"王者荣耀"
    },
    cid:"cd001",
    todos:[
      {
        name:"xiaolan",age:"22"
      },
      {
        name: "xiaoming", age: "29"
      }
    ],
    condition:true,
    company:"四川省"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  //参数就是另一个页面跳转过啦的query参数
    console.log(app.globalData.username)
    console.log(until)

    //取login传来的storage
    var _this=this;
    var user=wx.getStorage({
      key: 'user',
      success: function(res) {
         _this.setData({
            name:res.data
         })
      },
    })
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
     console.log("下拉操作，刷新")
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
  onPageScroll(){
    console.log("滚动就出现")
  },
  handleTap(){
    // console.log("handletap")
    // this.setData({
    //   msg:"明晚吃啥呢",
    //   "obj.game":"什么游戏"  (难道前双引号不得行，后单引号不得行)
    // })
    this.setData({
      msg: "明晚吃啥呢",
      'obj.game': "什么游戏",
      condition:false
    })
  },

  handleTap1(){
    wx.navigateTo({
      url: '/pages/logs/logs?username=123',
    })
  },
  handleCatch(e){
   console.log(e.target.dataset)
  }


})