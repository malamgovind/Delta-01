let greet = "hellow";//globle scope;
function changegreet() {
    let greet = "namaste"; //function scope;
    console.log(greet);
    function innergreet() {
        console.log(greet); //lexical scope;
    }
    // innergreet(); //not defined
}
console.log(greet);
changegreet();