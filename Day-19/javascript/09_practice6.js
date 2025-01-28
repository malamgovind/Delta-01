let str = ["i", "am", "malam", "govind"];
function malam(name) {
    let result = "";
    for (let i = 0; i <= str.length; i++) {
        result = result + str[i];
    }
    return result;
}
console.log(malam(str));