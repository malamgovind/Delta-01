console.log(window);
console.dir(document.all);
//dir--directry...
//-------------document.getElementById("");
let govind = document.getElementById("password");
console.log(govind);
//-------------document.getElementsByClass("");
document.getElementById("feedback");
let class1 = document.getElementsByClassName("feedback");
console.log(class1);

// document.getElementById("flabel").innerHTML="Hari"

// document.getElementById("change").innerHTML="govind";

//-----------document.getElementByTag("");
document.getElementsByTagName("textarea");

//---------Query selectors..: allows us to any css selector
//1.selects first all element : document.queryselector('_');
//2.selects first element with id =myid : document.queryselector('#myid');
//3.selects first element with class =myclass : document.queryselector('.myclass');

document.querySelector('textarea');
document.querySelector('#change');
document.querySelector('.feedback');

//---------using properties & methods..
//1.innerText : shows the visible text contaned in a node
//2.textContent : shows all the full text
//3.innerHTML : shows the full markup

let Hari = document.querySelector('p');
console.dir(Hari);
let newHari = document.querySelector('p').innerText = "Malam Govind D.";
console.dir(newHari);

let para = document.querySelector('p');
console.dir(para);
let newpara = document.querySelector('p').innerHTML = "hi i am malam govind";
console.dir(newpara);

//---------manupulating style using classlist : obj.classlist..
//1.classList.add() to add new classes
//2.classList.remove() to remove classes
//3.classList.contains()to check if class exists
//4.classList.toggle() to tggle between add & remove

let govind3 = document.querySelector('.feedback');
console.log(govind3.classList);

// const toogle = () =>{
//     const box = document.querySelector('.box');

//     if(box.classList.contains('none')){
//          box.classList.remove('none');
//     }else{
//         box.classList.add('none');
//     }
// }

//--------Navigation.....
//1.parentElement 
//2.children

let div = document.querySelector('#govind');
console.log(div);
console.log(div.childElementCount);
console.log(div.parentElement);

//-----------onclick........

let btn = document.querySelector('.malam');
console.dir(btn);

// btn.onclick = function (){
//     console.log("this is onclick fuction..");
//     alert("button was clicked.");
// }
function malamg() {
    alert("hello malam govind.");
}
btn.onclick = malamg;

//---------onmouseenter....

btn.onmouseenter = function () {
    console.log("you entered a button");
}
//  console.log(btn);

//----------Event listener- ()addEventListener...........
//..... element.addEventListener(event,callback)

let btn2 = document.querySelector('#govindM');
console.log(btn2);

btn2.addEventListener("click", function () {
    console.log("button clicked.");
    alert("helo govind");
});

//-----------activity.............

let btn5 = document.querySelector(".todo");
let ul = document.querySelector("ul");
let inp = document.querySelector(".input");
// let li= document.querySelector("li");

btn5.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add(".todo");

    item.appendChild(delbtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});

// ul.addEventListener("click", function(event) {
//     console.dir(event.target);
//     consolke.log("clicked");
// });

let delbtns = document.querySelector(".todo");
for (delbtn of delbtns) {
    delbtn.addEventListener("click", function () {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
