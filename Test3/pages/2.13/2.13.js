// pages/2.13/2.13.js
var num=60;
var timerID;
Page({
    data:{
        hidden:true,
        btnDisabled:false,
        num:num
    },
    onLoad:function(options){
        var that=this;
        setTimeout(()=>{
            that.show()
        },1000)
    },
    show:function(){
        var that=this;
        that.setData({
            hidden:false
        })
    },
    Start:function(){
        var that=this;
        that.setData({
            btnDisabled:true
        })
        timerID=setInterval(()=>{
            that.timer()
        },1000)
    },
    Stop:function(){
        clearInterval(timerID)
        if(this.btnDisabled){
            num=60;
            this.setData({
                num:num
            })
        }
        this.setData({
           btnDisabled:false
        })
    },
    timer:function(){
        var that=this;
        console.log(num)
        if(num>0){
            that.setData({
                num:num--
            })
        }else{
            that.setData({
                num:0
            })
        }
        console.log(num)
    }
})
// 1. log中输出的数与显示不符，显示稍慢了一个数
// 2. 无法实现按两下停止计时就重置的功能