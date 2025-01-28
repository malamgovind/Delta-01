// // async function greet() {
// // //    return "govind";
// // }

// // // greet();

async function greet() {
    throw new Error("404 not found!!");
    return "govind";
}

greet()
    .then((result) => {
        console.log("promises was resoved");
        console.log("result was : ", result);
    })
    .catch((err) => {
        console.log("promises was rejected with err : ", err.message);
    });

let demo = () => {
    return 5;
};