let sum = 50;  //globel scope;

function letsum(g, h) {
    let sum = g + h; //function scope;
    console.log(sum);
}
// let a=prompt("enter value of g");
// let b=prompt("enter value of h");
letsum(10, 20);
console.log(sum);

