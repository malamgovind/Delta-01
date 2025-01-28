h1 = document.querySelector("h1");

function ChangeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let Num = Math.floor(Math.random() * 10) + 1;
      if (Num > 5) {
        reject("promise rejected.!");
      }

      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed!");
    }, delay);
  });
};

async function demo() {
  try {
    await ChangeColor("red", 1000);
    await ChangeColor("orange", 1000);
    await ChangeColor("blue", 1000);
    await ChangeColor("green", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  let a = 10;
  console.log(a);
  console.log(a + 3);
};

console.log(demo());
// ChangeColor("red" , 1000)
// .then( () =>{
//     console.log("red color was completed@");
//     return ChangeColor("orange" , 1000);
// })
// .then( () =>{
//     console.log("orange color was completed@");
//     return ChangeColor("blue" , 1000);
// })
// .then( () =>{
//     console.log("blue color was completed@");
//     return ChangeColor("green" , 1000);
// })
// .then( () =>{
//     console.log("green color was completed@");
//     // return ChangeColor("orange" , 1000);
// })
// .catch( () => {
//     console.log("color was not chenged!!");
// });