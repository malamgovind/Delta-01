function sum(a, b) {
    return a + b;
}
let a = sum(4, 6);
console.log(a);

function isadult(age) {
    if (age >= 18) {
        return "age is adult:";
    }
    else {
        return "age not a adult:";
    }
}
let govind = isadult(prompt("enter a value of age:"));
console.log(govind);