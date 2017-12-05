// pages/focus/focus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"啦啦啦",
    imgUrls: [   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',     'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    items:[
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' }
    ],
    movies:['日本','美国','韩国','香港'],
    idx:1,
    country: [{ name: "中国" }, { name: "北美" }, { name: "日本" }],
    date:"2017-12-12",
    years:[12,13,14,15,16,17],
    months:[1,3,5,7,8,10,12]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  handlelower(){
    console.log("到底了")
  },
  handleChange({detail}){
    console.log(detail)
  },
  handleSubmit({detail}){
    console.log(detail)    
  },
  handleUser({detail}){
    this.setData({
      msg:detail.value
    })
  },
  checkboxChange(e){
     console.log(e.detail.value)
  },
  handleregion({detail}){
    console.log(detail)
    this.setData({
      region:detail.value
    })   
  },
  handlemovie({ detail }){
    console.log(detail)
    this.setData({
      idx: detail.value
    }) 
  },
  handleCountry(){

  },
  handledate({ detail }){
    console.log(detail)
  },
  bindChange(e) {
    const val = e.detail.value
    console.log(val)
  },
  handleradio({ detail }){
    console.log(detail)
  },
  handleslider({ detail }){
    console.log(detail)  
  },
  handleswitch({ detail }){
    console.log(detail)    
  }
})