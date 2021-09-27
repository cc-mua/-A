// pages/Compound/Compound.js
var principal=10000,rate=0.03,year=5,sum=11592.74;
Page({
    principalNum:function(e){
        principal=parseInt(e.detail.value);
        if(principal==null){
            principal=10000;
        }
    },
    rateNum:function(e){
        rate=parseInt(e.detail.value);
        if(rate==null){
            rate=0.03;
        }
    },
    yearNum:function(e){
        year=parseInt(e.detail.value);
        if(year==null){
            year=5;
        }
    },
    calc:function(){

        for(var i = 1; i <= year; i++){
            sum=sum*(1+rate);
        }
         sum=sum.toFixed(2);

        this.setData({
            sum:sum,
            year:year
        });
    }
})