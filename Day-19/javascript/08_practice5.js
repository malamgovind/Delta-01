function sumgame(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
let govind = sumgame(prompt("Enter the value of sumgame:"));
console.log(govind);
