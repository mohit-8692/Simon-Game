let level = 0;
let start = false;

let gameseq = [];
let userseq = [];

let score = 0;

let btns = ["yellow", "green", "purple", "red"];

document.addEventListener("keypress", function()
{
    if(start == false)
    {
        console.log("game is start");
        start = true;

        levelup();
    }
});


function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn)
{
    btn.classList.add("greenflash");
    setTimeout(function(){
        btn.classList.remove("greenflash");
    }, 250);
}

let h2 = document.querySelector("h2");

function levelup()
{
    userseq = [];
    level++;
    h2.innerText= `Level ${level}`; 

    let randIndx = Math.floor(Math.random() *3);
    let randcolor = btns[randIndx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
    gameseq.push(randcolor);
    console.log(`game: ${gameseq}`);
}
function checkans(idx)
{
    if(userseq[idx] === gameseq[idx])
       {
        if(userseq.length == gameseq.length)
            setTimeout(levelup, 1000);
       }
    else{
        h2.innerHTML = `Game over! and your score is: ${level} <br> press any key to restart Game...` ;
            resetTo();
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            },500);
    }
}

function btnpress()
{
    // console.log(this);
    let btn = this;
    userflash(btn);    

    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    console.log(`user: ${userseq}`);
    checkans(userseq.length-1);
} 

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function resetTo()
{
    userseq = [];
    gameseq = [];
    start = false;
    score = level;
    if(level < score)
    {
        let h2 = document.querySelector("#score");
        h2.innerHTML = `<b>Highest Score is ${level}`;
    }
    else{
        let h2 = document.querySelector("#score");
        h2.innerHTML = `<b>Highest Score is ${score}`;
    }
    level = 0;
}


