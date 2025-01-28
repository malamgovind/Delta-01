let url = "https://catfact.ninja/fact";

let btn = document.querySelector("#one");
btn.addEventListener("click", async () => {
    console.log(" fact button was clicked!");
    let result = await getFacts();
    console.log(result);
    let p = document.querySelector("#fact01");
    p.innerHTML = result;
})
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch (e) {
        console.log("error :", e);
        return "No fact found!";
    }
}

// getFacts();

let btn2 = document.querySelector(".govind");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async () => {
    console.log("image button was click!");
    let link = await getimage();
    console.log("URL:", link);
    let img = document.querySelector(".photo");
    img.setAttribute("src", link);
    let govind = document.getElementById("tach");
    govind.style.border = `3px solid black`;
    govind.style.borderRadius = `10px`;
});

async function getimage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
        // console.log(res.data.message);
    }
    catch (e) {
        console.log("error - ", e);
    }
};

let url3 = "https:icanhazdadjoke.com/";
let btn3 = document.querySelector(".header");


btn3.addEventListener("click", async () => {
    console.log("button was clicked!!!!");
    let header01 = await getjokes();
    console.log(header01);
    // let yes = document.querySelector("#joke");
    // yes.innertext = header01;
    let paragraph = document.getElementById("joke");
    paragraph.innerText = header01;
})

async function getjokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url3, config);
        // console.log(res.data.joke);
        return res.data.joke;
    }
    catch (e) {
        console.log("error - ", e);
    }

};

let url4 = "http://universities.hipolabs.com/search?name=";
let btn4 = document.querySelector("#detail");

// let contry = "nepal";

btn4.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    console.log(` ${country} college list!`);

    let colArr = await getcolleges(country);
    //    console.log("college name list:",colArr);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector(".list");
    for (col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getcolleges(country) {
    try {
        let res = await axios.get(url4 + country);
        return res.data;
    } catch (e) {
        console.log("error -", e);
        return [];
    }
};