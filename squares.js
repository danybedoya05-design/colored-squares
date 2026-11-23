
const squareArea = document.getElementById("squarearea");
const addButton = document.getElementById("add");
const changeButton = document.getElementById("change");

let topSquare = null;
let highestZ = 1;

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function addSquare() {
    const square = document.createElement("div");

    const width = Math.floor(Math.random() * 11) + 45;
    const height = Math.floor(Math.random() * 11) + 45;

    square.style.width = width + "px";
    square.style.height = height + "px";
    square.style.backgroundColor = randomColor();
    square.style.position = "absolute";

    square.style.left = Math.floor(Math.random() * 300) + "px";
    square.style.top = Math.floor(Math.random() * 300) + "px";

    square.style.zIndex = highestZ++;

    square.addEventListener("click", function () {
        if (topSquare === square) {
            square.remove();
            topSquare = null;
        } else {
            square.style.zIndex = highestZ++;
            topSquare = square;
        }
    });

    squareArea.appendChild(square);
}

function changeColors() {
    const squares = squareArea.querySelectorAll("div");

    squares.forEach(function (square) {
        square.style.backgroundColor = randomColor();
    });
}

addButton.addEventListener("click", addSquare);
changeButton.addEventListener("click", changeColors);

window.addEventListener("load", function () {
    for (let i = 0; i < 10; i++) {
        addSquare();
    }

    topSquare = null;
});

