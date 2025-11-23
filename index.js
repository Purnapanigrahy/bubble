let score = 0
let no 
var trimer
function bubble(){
    let bubble = "";
    for (let i = 1;i <= 250;i++ ){
        bubble += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#bottom").innerHTML = bubble;
}
function hit(){
    no = Math.floor(Math.random()*10)
    document.querySelector(".scorebox").innerHTML = no;
}  
function trimer(){
    trimer = 60;
    let seteinerval = setInterval(function(){
        if (trimer > 0){
            trimer--;
        }
        else{
            clearInterval(seteinerval)
            document.querySelector("#bottom").innerHTML = `<h1>game over</h1><h1>your score ${score}</h1>`;
        }
        document.querySelectorAll(".scorebox")[1].innerHTML = trimer;
    },1000)
}  
function score_increse(){
    score += 10
    document.querySelectorAll(".scorebox")[2].innerHTML = score;
}
function event_add(){
    document.querySelector("#bottom") .addEventListener("click",function(cl){
    if (cl.target.textContent == no){
        score_increse();
        bubble();
        hit()}})
}
bubble()
hit()
trimer()
event_add()