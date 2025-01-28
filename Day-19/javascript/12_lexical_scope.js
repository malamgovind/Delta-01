function outercode() {
    let x = 10;
    let y = 20;
    function innercode() { // fuction scope;
        // let a=100;
        console.log(x);
        console.log(y);
    }
    // console.log(a); //block scope;
    innercode();
}
outercode();