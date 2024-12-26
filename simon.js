let gameSeq = [];
let userSeq =[];
let btns = ["red","green","blue","yellow"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

//start the game 

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;
        //to add flash 
        levelUp();
    }
});

//flash button

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //choose  a random btn
    let rdmidx = Math.floor(Math.random()*3);
    let rdmclr = btns[rdmidx];
    let rdmbtn = document.querySelector(`.${rdmclr}`);
    gameSeq.push(rdmclr);
    console.log(gameSeq);

    btnflash(rdmbtn);
}
function checkAns(idx){
    //let idx = level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }

    }else{
        h2.innerHTML=`game over ....your score is <b>${level}</b>     <br> press any key to restart`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },3000);
        restart();
    }

}

// flash function

function pressbtn(){
    let btn = this;
    btnflash(btn);
    userClr = btn.getAttribute("id");
    userSeq.push(userClr);


    checkAns(userSeq.length-1);

}
//select all btns
let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",pressbtn);
}

function restart(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}