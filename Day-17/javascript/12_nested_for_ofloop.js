let nam = [["govid", "pathu", "parth"], ["avinash", "hitesh", "anirudh"]];
console.log(nam);
for (let i = 0; i <= nam.length; i++) {
    console.log(i, nam[i]);
}
for (my of nam) {
    for (print of my) {
        console.log(print);
    }

}