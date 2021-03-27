const container = document.querySelector(".container");

const colors = [
    "#ffbe76",
    "#130f40",
    "#009432",
    "#ED4C67",
    "#0652DD",
    "#FFC312",
    "#34ace0",
    "#ff793f",
    "#3B3B98",
    "#f1f2f6",
    "#d63031"
]

const squaresNumber = 400;

for(let i = 0; i <squaresNumber; i++){

    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", () => {
        setColorToElement(square);
    });

    square.addEventListener("mouseout", () => {
        removeColorFromElement(square);
    });

}

setColorToElement = (element) => {
    const currentColor = getRandomColor();
    element.style.background = currentColor;
    element.style.boxShadow = `0 0 2px ${currentColor}, 0 0 10px ${currentColor}`;
}

removeColorFromElement = (element) => {
    element.style.background = "#576574";
    element.style.boxShadow = `0 0 2px #000`;
}

getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}
