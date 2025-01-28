function hello() {
    console.log("inside hello function");
    console.log("hello")
}

function demo() {
    console.log("calling function");
    hello();
}

console.log("calling demo function ");
demo();
console.log("done, ok!");