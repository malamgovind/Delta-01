const bc = document.querySelector('.contener');
document.querySelector('.one').style.display = 'block';
document.querySelector('.two').style.display = 'none';
document.querySelector('.three').style.display = 'none';
document.querySelector('.four').style.display = 'none';
document.querySelector('.five').style.display = 'none';
document.querySelector('.six').style.display = 'none';
document.querySelector('.seven').style.display = 'none';
document.querySelector('.eight').style.display = 'none';
document.querySelector('.nine').style.display = 'none';
bc.style.background = "linear-gradient(to right, rgba(0, 168, 204, 0.5), rgba(223, 189, 0, 0.5), rgba(54, 38, 199, 0.5))";

let btn = document.querySelector('#play');

btn.addEventListener("click", function () {
    const bc = document.querySelector('.contener');
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'block';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    bc.style.background = "none";
})

let box = document.querySelector('#one_img');

box.addEventListener('animationend', function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'block';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    updatelodingbar();
})



const lodingbar = document.querySelector('.loading-bar');
const counter = document.querySelector('.counter');
let number = 0;

function updatelodingbar() {
    if (number <= 100) {
        lodingbar.style.width = number + "%";
        counter.textContent = "Loading" + number + "%";
        number++;
        setTimeout(updatelodingbar, 40);
        if (number >= 100) {
            login();
        }
    }
}
function login() {
    setTimeout(() => {
        document.querySelector('.one').style.display = 'none';
        document.querySelector('.two').style.display = 'none';
        document.querySelector('.three').style.display = 'none';
        document.querySelector('.four').style.display = 'block';
        document.querySelector('.five').style.display = 'none';
        document.querySelector('.six').style.display = 'none';
        document.querySelector('.seven').style.display = 'none';
        document.querySelector('.eight').style.display = 'none';
        document.querySelector('.nine').style.display = 'none';
        yr();
    }, 300);
}

const btn2 = document.querySelector('#okay');

btn2.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    go();
}
)

function yr() {
    const color1 = document.querySelector('.contener');
    color1.style.background = "linear-gradient(to right, rgba(0, 168, 204, 0.4), rgba(223, 189, 0, 0.4), rgba(54, 38, 199, 0.4))";
}

function go() {
    const color2 = document.querySelector('.contener');
    color2.style.background = 'none';
}
// const div5 = document.querySelector('.five');
// div5.style.background = "linear-gradient(to right, rgba(0, 168, 204, 0.5), rgba(223, 189, 0, 0.5), rgba(54, 38, 199, 0.5))";
const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');
const facebook = document.querySelector('#Facebook');
const guest = document.querySelector('#Guest');
let google = document.querySelector('#Google');

function toggleButtons() {
    if (checkbox1.checked && checkbox2.checked) {
        // Enable the buttons
        facebook.disabled = false;
        guest.disabled = false;
        google.disabled = false;
    } else {
        // Disable the buttons
        facebook.disabled = true;
        guest.disabled = true;
        google.disabled = true;
    }
}

// Add event listeners for the checkboxes
checkbox1.addEventListener('change', toggleButtons);
checkbox2.addEventListener('change', toggleButtons);



const login01 = document.querySelector('#Facebook');

login01.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'block';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    bc2();
})

// const div6 = document.querySelector('.six');
// div6.style.background = "linear-gradient(to right, rgba(0, 168, 204, 0.5), rgba(223, 189, 0, 0.5), rgba(54, 38, 199, 0.5))";

function bc2() {
    bc.style.background = "rgb(58, 61, 63)";
    // bc.style.background = "rgb(127, 127, 213)";
    // const div6 = document.querySelector('.six');
    // div6.style.background = "transparent";
    // div6.style.background = "linear-gradient(to right, rgba(0, 168, 204, 0.3), rgba(223, 189, 0, 0.3), rgba(54, 38, 199, 0.3))";
}

const login02 = document.querySelector('.new-btn');

login02.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'block';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    bc3();
})

function bc3() {
    bc.style.background = "rgb(58, 61, 63)";
}

const login03 = document.querySelector('.seven .log-in');

login03.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'block';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
})

const close01 = document.querySelector('#close01');
const close02 = document.querySelector('#close02');

close01.addEventListener("click", close);
close02.addEventListener("click", close);

function close() {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    bc4();
}

function bc4() {
    bc.style.background = "none";
}

const glogin02 = document.querySelector('#btn-two');

google.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'block';
    document.querySelector('.nine').style.display = 'none';
    bc5();
})

function bc5() {
    bc.style.background = "rgb(58, 61, 63)";
    glogin02.style.background = "none";
}

const gclose01 = document.querySelector('.x-mark01');
gclose01.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    colora();
});

function colora() {
    bc.style.background = 'none';
}

glogin02.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'block';
    bc6();
})

function bc6() {
    bc.style.background = "rgb(58, 61, 63)";
    glogin03.style.background = "none";
}

const gclose02 = document.querySelector('.x-mark02');
gclose02.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'block';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'none';
    document.querySelector('.nine').style.display = 'none';
    colora();
});

const glogin03 = document.querySelector('#btn-three');

glogin03.addEventListener("click", function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.three').style.display = 'none';
    document.querySelector('.four').style.display = 'none';
    document.querySelector('.five').style.display = 'none';
    document.querySelector('.six').style.display = 'none';
    document.querySelector('.seven').style.display = 'none';
    document.querySelector('.eight').style.display = 'block';
    document.querySelector('.nine').style.display = 'none';
    bc5();
}); 