function oddorevenfactory(requst) {
    if (requst == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (requst == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    }
    else {
        console.log("wrong number entered");
    }
}
let requst = "odd";
// oddorevenfactoty(requst);
