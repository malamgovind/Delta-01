h1 = document.querySelector("h1");

function ChangeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        nextColorChange();
    }, delay);
}

ChangeColor("red", 1000, () => {
    ChangeColor("orange", 1000, () => {
        ChangeColor("green", 1000, () => {
            ChangeColor("yellow", 1000, () => {
                ChangeColor("blue", 1000);
            });
        });
    });
});

// callback nesting -> callback hell........