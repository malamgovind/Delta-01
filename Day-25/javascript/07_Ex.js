// h1 = document.querySelector("h1");

// function ChangeColor(color,delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();
//     }, delay);
// }

//   ChangeColor("red", 1000, () => {
//     ChangeColor("orange", 1000, () => {
//         ChangeColor("green", 1000, () => {
//             ChangeColor("yellow", 1000, () => {
//                 ChangeColor("blue", 1000);
//             });
//         });
//     });
//   });

h1 = document.querySelector("h1");

function ChangeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    })
};

ChangeColor("red", 1000)
    .then(() => {
        console.log("red color was completed@");
        return ChangeColor("orange", 1000);
    })
    .then(() => {
        console.log("orange color was completed@");
        return ChangeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue color was completed@");
        return ChangeColor("green", 1000);
    })
    .then(() => {
        console.log("green color was completed@");
        // return ChangeColor("orange" , 1000);
    })
    .catch(() => {
        console.log("color was not chenged!!");
    });