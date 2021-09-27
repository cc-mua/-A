// pages/Calculator/Calculator.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag:false,
        Salary:0,
        Deduckt:0,
        Tax:114

    },

    salaryInput:function(e){
        this.setData({
            Salary:e.detail.value
        });
    },

    deducktInput:function(e){
        this.setData({
            Deduckt:e.detail.value
        });
    },

    mySubmit:function(e){
        var tax=0,afterDeduckt=0;
        this.setData({
            afterDeduckt:this.Salary-this.Deduckt
        });
        if(afterDeduckt<=0){
            return;
        }else if(0<afterDeduckt<=5000){
            this.setData({
                tax:0
            });
        }else if(5000<afterDeduckt<=8000){
            this.setData({
                tax:(afterDeduckt-Deduckt-5000)*0.03-0
            })
        }else if(8000<afterDeduckt<=17000){
            this.setData({
                tax:(afterDeduckt-5000)*0.1-210
            })
        }else if(17000<afterDeduckt<=30000){
            this.setData({
                tax:(afterDeduckt-5000)*0.2-1410
            })
        }else if(30000<afterDeduckt<=40000){
            this.setData({
                tax:(afterDeduckt-5000)*0.25-2660
            })
        }else if(40000<afterDeduckt<=60000){
            this.setData({
                tax:(afterDeduckt-5000)*0.3-4410
            })
        }else if(60000<afterDeduckt<=85000){
            this.setData({
                tax:(afterDeduckt-5000)*0.35-7160
            })
        }else if(afterDeduckt>85000){
            this.setData({
                tax:(afterDeduckt-5000)*0.45-15160
            })
        }
        this.setData({
            Tax:tax,
            flag:false
        });
    }
})