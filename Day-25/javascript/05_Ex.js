function savedata(data, success, failure) {
    let internetspeed = Math.floor(Math.random() * 10) + 1;

    if (internetspeed > 4) {
        success();
    } else {
        failure();
    }
};

savedata(
    "Malam Govind",
    () => {
        console.log("success : your data-1 was saved.");
        savedata(
            "Family",
            () => {
                console.log("success :data-2  was saved.");
                savedata(
                    "govind",
                    () => {
                        console.log("success : data-3 saved.");
                        console.log("your all data saved.- congraculation")
                    },
                    () => {
                        console.log("failure : data-3 was not saved.");
                    }
                )
            },
            () => {
                console.log("failure :data-2 not saved.");
            }
        )
    },
    () => {
        console.log("failure : weak connection, data not saved.");
    }
)