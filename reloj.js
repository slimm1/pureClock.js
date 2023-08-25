'use strict'

var divR = document.getElementById('reloj');

setInterval(function(){
    var reloj = new Date(); 
    if(reloj.getMinutes() < 10 && reloj.getSeconds() < 10){
        divR.innerHTML = reloj.getHours() + ' : 0' + reloj.getMinutes() + ' : 0' + reloj.getSeconds();
    }
    else if(reloj.getMinutes() < 10 || reloj.getSeconds() < 10){
        if(reloj.getMinutes() < 10){
            divR.innerHTML = reloj.getHours() + ' : 0' + reloj.getMinutes() + ' : ' + reloj.getSeconds();
        }
        else if(reloj.getSeconds() < 10){
            divR.innerHTML = reloj.getHours() + ' : ' + reloj.getMinutes() + ' : 0' + reloj.getSeconds();
        }
    }
    else{
        divR.innerHTML = reloj.getHours() + ' : ' + reloj.getMinutes() + ' : ' + reloj.getSeconds();
    }
},1000);