let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data1 = await res.json();
        console.log("data 1 : ", data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data 2 :", data2.fact);


        let res3 = await fetch(url);
        let data3 = await res3.json();
        console.log("data 3 :", data3.fact);
    }
    catch (e) {
        console.log("error :", e);
    }
}

// getFacts();