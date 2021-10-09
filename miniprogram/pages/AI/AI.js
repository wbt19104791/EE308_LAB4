
Page({
    
   play: function(param){
    wx.redirectTo({
 
      url: '/pages/choose/choose',
 
      })
  },
    onReady:function(){
    this.throw()
  },
   throw: function (e) {
      var that = this;
        var dice1 = parseInt(Math.random() * 6).toFixed(0);  
        var dice2 = parseInt(Math.random() * 6).toFixed(0);  
        var dice3 = parseInt(Math.random() * 6).toFixed(0); 
        var dice4 = parseInt(Math.random() * 6).toFixed(0); 
        var dice5 = parseInt(Math.random() * 6).toFixed(0);
        var dice6 = parseInt(Math.random() * 6).toFixed(0); 
        // 根据随机产生的数字 修改data里面的值
        that.setData({
          dice1: dice1,
          dice2: dice2,
          dice3: dice3,
          dice4: dice4,
          dice5: dice5,
          dice6: dice6,
        })}})