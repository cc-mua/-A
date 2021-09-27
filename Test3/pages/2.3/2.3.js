// pages/2.3/2.3.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    tapPikachu:function(){
        let audio=wx.createInnerAudioContext()
        audio.src="/audio/pikachu.mp3"
        audio.play()
    }

   
})