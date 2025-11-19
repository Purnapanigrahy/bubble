function bubble(){
    let bubble = "";
    for (let i = 1;i <= 10;i++ ){
        bubble += `<a href=""><div class="bubble">${Math.floor(Math.random()*10)}</div></a>`;
    }
    document.querySelector("#bottom").innerHTML = bubble;
}
function hit(){
    let no = Math.floor(Math.random()*10)
    document.querySelector(".scorebox").innerHTML = no;
}  
function trimer(){
    let trimer = 60;
    let seteinerval = setInterval(function(){
        if (trimer > 0){
            trimer--;
        }
        else{
            clearInterval(seteinerval)
        }
        document.querySelectorAll(".scorebox")[1].innerHTML = trimer;
    },1000)
}  
var score = 0
function score_increse(){
    score += 10
    document.querySelectorAll(".scorebox")[2].innerHTML = score;
}


function call(){
    bubble()
    hit()
    trimer()
    score_increse()
}

call()
