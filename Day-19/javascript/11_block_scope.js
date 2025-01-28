let age = 20;
if (age >= 18) {
    let str = "age is adult.";
    console.log(str);  // block scope;
}
// console.log(str); //not use without block breket;

for (let i = 0; i <= 5; i++) {
    console.log(i); // block scope;
}
// console.log(i);  //not use without block breket;