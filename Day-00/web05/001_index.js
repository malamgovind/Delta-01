document.querySelector('.two').style.display = 'none';
document.querySelector('.three').style.display = 'none';
document.querySelector('.four').style.display = 'none';
document.querySelector('.five').style.display = 'none';
document.querySelector('.six').style.display = 'none';
document.querySelector('.seven').style.display = 'none';



let btn1 = document.querySelector('.button-001');
let btn2 = document.querySelector('.button-002');

btn1.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})


btn2.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'block';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})

let btn3 = document.querySelector('.button-003');
let btn4 = document.querySelector('.button-004');

btn3.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})


btn4.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'block';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})

let btn5 = document.querySelector('.button-005');
let btn6 = document.querySelector('.button-006');

btn5.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})


btn6.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'block';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})

let btn7 = document.querySelector('.button-007');
let btn8 = document.querySelector('.button-008');

btn7.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})


btn8.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
})

let btn9 = document.querySelector('.button-009');
let btn10 = document.querySelector('.button-010');

btn9.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'block';
    document.querySelector('.seven').style.display = 'none';
})

btn10.addEventListener("mouseover", function changebuttonposition() {

    const button = document.querySelector('.button-010');
    const newTop = Math.random() * (window.innerHeight - 50);
    const newLeft = Math.random() * (window.innerWidth - 100);


    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;

    // const button = document.getElementsByClassName('button-010');
    // button.addEventListener('mouseover',changebuttonposition);
})

let btn11 = document.querySelector('.button-011');

btn11.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'block';
})