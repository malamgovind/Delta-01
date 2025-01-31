let greet = "hellow";//globle scope;
function changegreet() {
    let greet = "namaste"; //function scope;
    // console.log(greet); //not defined
    function innergreet() {
        console.log(greet); //lexical scope;
    }
    innergreet();
}
console.log(greet);
changegreet();