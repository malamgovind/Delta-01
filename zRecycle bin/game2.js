let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "blue"];
const highest = {
    name:'none',
    score:0
};

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let playerName;

document.addEventListener("keypress", function (event) {
    if (started == false) {
        console.log("game is started");
        started = true;
        playerName = prompt('enter your name');
        console.log(playerName);
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`#${randcolor}`);
    gameSeq.push(randcolor);
    gameflash(randbtn);
    console.log(gameSeq);
}

function checkAns(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (index === level - 1) {
            userSeq = [];
            setTimeout(()=>{
                levelUp();
            },1000);
            console.log(`level ${level} complet`);
        }
    } else {
        gameover();
    }
}

function gameover() {
    console.log("game over");
    h2.innerText = `game over (press any key for restart)`;
    score();
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

function score() {
    let score = level - 1;
    if(highest.score < score){
        highest.name = playerName;
        highest.score = score;
        alert("congratualtions you have highest record");
    }
    console.log(`your score level is ${score}\n\n`);
    console.log("Highest Record");
    console.log("Player Name : ", highest.name)
    console.log("Highest Score : ", highest.score);
}

function btnPress(event) {
    if(gameSeq.length === 0){
        alert("please start game first !!");
        return;
    }

    let btn = event.target;
    userflash(btn);
    const usercolor = event.target.id;

    userSeq.push(usercolor);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
