// var i=1;
// setInterval(function(){
//     document.writeln(i++)
// },1000)
 
// function timer(){
//     document.write("saad")
// }
// setInterval





// var minutes = 0;
// var seconds = 0;
// var miliseconds = 0;
// var getmin =document.getElementById('min')
// var getsec =document.getElementById('sec')
// var getmsec =document.getElementById('msec')

// setInterval(function(){
//     miliseconds++
//     getmsec.innerHTML=miliseconds
//     if(miliseconds>=100){
//         seconds++
//         getsec.innerHTML =seconds
//         miliseconds = 0
//     }
//     else if(seconds>=60){
//         minutes++
//         getmin.innerHTML=minutes
//         seconds=0
//     }
// },10)
























var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var gethour=document.getElementById('hour')
var getmin=document.getElementById('min')
var getsec=document.getElementById('sec')
var getmsec=document.getElementById('msec')
var interval;

function start(){
    interval= setInterval(function(){
        msec++
        getmsec.innerHTML=msec
        if(msec>=100){
            sec++
            getsec.innerHTML=sec
            msec=0
        }else if(sec>=60){
            min++
            getmin.innerHTML=min
            sec=0
        }else if(min>=60){
            hour++
            gethour.innerHTML=hour
            min=0
        }
        
    },10)
    document.getElementById("start").disabled=true

}

function stop(){
    clearInterval(interval)
 document.getElementById("start").disabled=false

}

function reset(){
    hour=0
    min=0
    msec=0
    sec=0
    gethour.innerHTML=hour
    getmin.innerHTML=min
    getmsec.innerHTML=msec
    getsec.innerHTML=sec
}