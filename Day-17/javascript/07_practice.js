let favmovie = "avatar";
let guess = prompt("guess my favorite movie");
while (guess != favmovie) {
    guess = prompt("wrong guess. please try again");
}
console.log(favmovie);