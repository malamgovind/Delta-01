let gameSeq = [];
let userSeq = [];

const highest = {
    name: 'none',
    score: 0
}

let btns = ["yellow", "voilet", "purple", "blue"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let playerName;

document.addEventListener("keypress", function (event) {
    if (started == false) {
        console.log("game is started");
        started = true;
        playerName = prompt("enter your name")
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    // let time = 250;
    // let temp = level;
    // while (temp > 0) {
    //     if (time === 50) {
    //         break;
    //     }
    //     time -= 50
    //     temp--;
    // }
    // console.log(time);
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
    console.log("gameflash :", gameSeq[gameSeq.length - 1]);
}

function userflash(btn, color) {
    btn.classList.add(`${color}-userflash`);
    setTimeout(function () {
        btn.classList.remove(`${color}-userflash`);
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`#${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    // console.log(userSeq);
    gameflash(randbtn);
}

// orizanal randombutton --> store -> btn = copy(randombutton) 
// gameSeq = [yello, red, green,] // lenght
// userSeq = [yello, red, yello]

function checkAns(index, btn) {
    // console.log("currect level :",level);
    // console.log("we need ",  gameSeq.length - 1);
    // console.log("our level", level - 1);


    // if (gameSeq[gameSeq.length - 1] === userSeq[gameSeq.length - 1]) {
    // setTimeout(() => {
    //     levelUp();
    // }, 1000);
    // console.log(`level ${level} complet`);
    console.log("userflash :", userSeq[index]);
    if (userSeq[index] === gameSeq[index]) {
        userflash(btn, 'green');
        if (index === level - 1) {
            userSeq = [];
            setTimeout(() => {
                levelUp();
            }, 1000);
            console.log(`level ${level} complet`);
        }
    } else {
        userflash(btn, 'red');
        // console.log("game over");
        // h2.innerText = `game over (press any key for restart)`;
        // started = false;
        // level = 0;
        // document.querySelectorAll("btn");
        // btn.classList.add("wronge");
        // setTimeout( function() {
        //     btn.classList.remove("wronge");
        // },150 );
        setTimeout(() => {
            gameover();
        }, 1000);
    }
}
function gameover() {
    console.log("game over");
    h2.innerText = `game over your level is ${level} (press any key for restart)`;
    score();
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

function score() {
    let score = level - 1;
    if (highest.score < score) {
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
    if (gameSeq.length === 0) {
        alert("please start game first !!");
        return;
    }

    let btn = event.target;
    const usercolor = event.target.id;
    userSeq.push(usercolor);
    checkAns(userSeq.length - 1, btn);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
