let color = [
    ["red", "blue", "green"], ["white", "black", "orange"]
];
console.log(color);
for (i = 0; i <= color.length; i++) {
    console.log(i, color[i], color[i].length);
    for (j = 0; j < color.length; j++) {
        console.log(j, color[i][j]);
    }
}
