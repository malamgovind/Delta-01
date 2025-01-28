//---------------- resolve() & reject() -----------------

function savedata(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      console.log("internetspeed speed was :", internetspeed);
      resolve("success : data was saved.");
      // console.log("data - 1 => saved.");
      // console.log(savedata);
    } else {
      reject(console.log("fadilure : weak connection."));
      // reject("faild week conection.");
    }
  });
}


//  let userdata = prompt("enter you data.");
//  console.log("user data :" , userdata); 
// console.log(savedata( userdata));

//-------------------------------------- then() & catch() --------------

// let request = savedata("Malam Govind");
// request
// .then ( () => {
//     console.log("promise was resoved.");
//     console.log(request);
// })
// .catch ( () => {
//  console.log("promise was rejected.");
// })

// savedata("Malam Govind")
//   .then ( () => {
//     console.log(resolve);
//     // console.log("promise was resoved.");
//     // console.log(savedata);
//      savedata("parth")
//      .then ( () => {
//       console.log("data - 2 => saved.");
//      })
//   })
//   .catch ( () => {
//     // console.log("promise was rejected.");
//     console.log(reject);
//   });


//------------------------------------------------ promise chainig => improved version ------------------------


savedata("Govind")
  .then((result) => {
    console.log("data-1 : success full your data saved.");
    console.log("result of promises :", result);
    return savedata("pathu");
  })
  .then((result) => {
    console.log("data-2 : success full your data saved.");
    // console.log(savedata);
    console.log("result of promises :", result);

    return savedata("sweet heart");
  })
  .then((result) => {
    console.log("data-3 : was success full saved.");
    console.log("result of promises :", result);
    console.log("congratulation");
  })
  .catch((error) => {
    console.log("error of promises :", error);
    console.log("week conection- try again.");
  });