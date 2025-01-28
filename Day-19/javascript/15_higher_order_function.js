function letfunction(govind, n) {// higher order function;
    for (i = 1; i <= n; i++) {
        govind();
    }
}
let govind1 = function () {
    console.log("Malam Govind:");
}

letfunction(govind1, prompt("enter value of n:"));