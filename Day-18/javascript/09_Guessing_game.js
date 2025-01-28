let max = prompt("enter the max number");
// console.log(max);
const random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess = prompt("guess the number:");
while (true) {
    if (guess == "quit") {
        console.log("uset quited.");
        break;
    }
    if (guess == random) {
        console.log("you are rught! congrats !! random number was:", random);
        break;
    }
    else {
        guess = prompt("your guess was wrong. plese try again.");
    }
}