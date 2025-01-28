let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(...arr);
let name1 = [..."MalamGovind"];
console.log(name1);
console.log("spread with arr");
console.log(...arr);
const data = {
    name: "malamgovind",
    age: 18
};
const newdata = { ...data };
console.log(newdata);
let newarr = { ...arr };
console.log(newarr);
let one = { ...newarr };
console.log(one);