// pages/Converter/Converter.js
Page({

  InchConverter:function(e){
    var temp;
    temp=e.detail.value;
    this.setData({
        resultCM : temp * 2.54
    })
  },

  CMConverter:function(e){
    var temp;
    temp=e.detail.value;
    this.setData({
        resultInch : temp * 0.393
    })
  }
    
})