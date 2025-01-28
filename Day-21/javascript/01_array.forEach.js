let arr = [1, 2, 3, 4, 5];

// let govind = function (el){
//     console.log(el);
// }
// arr.forEach(govind);

arr.forEach(function (el) {
    console.log(el);
});

let arr1 = [
    {
        name: "govind",
        result: 91
    },
    {
        name: "hari",
        result: 90
    },
    {
        name: "satish",
        result: 80
    }];
//  console.log(arr1);
arr.forEach((student) => {
    console.log(student);
});