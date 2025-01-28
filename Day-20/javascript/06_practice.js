const square = (n) => {
    console.log("value of square");
    return (n * n);
}
console.log(square(prompt("Enter value of square")));

let id = setInterval(
    () => {
        console.log("hellow world");
    }, 2000);
// console.log(printname());
setTimeout(() => {
    clearInterval(id);
    console.log("setinterval cleared.");
}, 10000);