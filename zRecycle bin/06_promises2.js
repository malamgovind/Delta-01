function savedata(data) {
    return new Promise ((resolve,reject) => {
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        if(internetspeed > 4) {
            resolve(console.log("success : data was saved."));
            console.log("internetspeed speed was :" , internetspeed);
            // console.log("data - 1 => saved.");
        }else {
            reject("fadilure : weak connection.");
           
        }
    })};




    savedata("Govind")
    .then( () => {
        console.log("data-1 : saved.");
    })
    .catch( () => {
        console.log(reject);
        // console.log("fail : week conection - try again.");
    });