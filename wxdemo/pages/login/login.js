// pages/login/login.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {      imgSrc:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002DbpNa1zRNqa.jpg?max_age=2592000",
    animationData:null
  },
  submit({detail}){
     //定义动画
    var animation = wx.createAnimation({
        duration:2000,
        timingFunction:"ease-in",
        transformOrigin:'0 0 0'
     })

    animation.rotate(15).scale(0.5,0.5).step() 
   
   this.setData({
     animationData:animation.export()
   })



    //判断
     if(!detail.value.username||!detail.value.pwd){
      //  wx.showToast({
      //      title:'不能为空',
      //      icon:'loading',
      //      image:'/static/images/girl.png'
      //    })
      
      // wx.showModal({
      //   title: '警告',
      //   content: '输入了吗',
      //   confirmText:'yes',
      //   success(res){
      //       console.log(res)
      //   }
      // })

      wx.showActionSheet({
        itemList: ['哈哈','嘻嘻'],
        success(res){
          console.log(res)
        }
      })
       return;
     }
     wx.showLoading({
       title: 'nono登录中....',
       mask: true
     })

     //发送请求(向后台请求)
     wx.request({
       data: detail.value,
       method: 'POST',
       url: app.globalData.url+'/api/login',
       success(res){
          console.log(res);
          //存储
          wx.setStorage({
            key: "user",
            data: detail.value.username
          })
        //跳转
        wx.reLaunch({
          url: '/pages/user/user'
        })

       }
     })

  },
  chooseImg(){
    var _this=this;
    wx.chooseImage({
      success: function(res) {
        console.log(res.tempFilePaths)
        _this.setData({
          imgSrc: res.tempFilePaths
        })
      },
    })
  },
  getSys(){
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
      },
    })
  },
  getNet(){
    wx.getNetworkType({
      success(res){
        console.log(res.networkType)
      }
    })
  },
  call(){
    wx.makePhoneCall({
      phoneNumber: '15881272563',
    })
  },
  vibrate(){
    wx.vibrateLong({
      success(){
        console.log("震动啦")
      }
    })
  }



  
})