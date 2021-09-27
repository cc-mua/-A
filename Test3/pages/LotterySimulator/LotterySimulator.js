// pages/LotterySimulator/LotterySimulator.js
var rand=[];  
function createRand(){
    for(var i=0; i<6; i++){
        var r =Math.round((Math.random()*33));
        rand.push(r);
        console.log(rand[i]);
    }
    var r=Math.round(Math.random()*16);
    rand.push(r);
    console.log(rand[6]);
}

Page({
    
    newRand(e){
        createRand();
        this.setData({
            rand:rand
        })
    }
})