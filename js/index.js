const canvas = document.querySelector(".canvas");

function setGrid(cellNumber = 16) {
  for (let i = 1; i <= cellNumber * cellNumber; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", `square square-${i}`);
    canvas.appendChild(square);
  }
}

function drawBlack() {
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("black");
    });
  }
}

function eraseCell() {
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.remove("black");
    });
  }
}

const drawButton = document.querySelector(".button-draw");
const eraseButton = document.querySelector(".button-erase");
const resizeButton = document.querySelector(".button-resize");

resizeButton.addEventListener("click", () => {
  const size = prompt(
    "How big (X x X) should the grid be? Please stay below 100!"
  );

  if (size > 100) {
    alert("You entered a number avoe 100. Please try again.");
  } else {
    console.log(size);

    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }

    setGrid(size);

    const stylesheet = document.styleSheets[0];
    let elementRules;

    for (let i = 0; i < stylesheet.cssRules.length; i++) {
      if (stylesheet.cssRules[i].selectorText === ".square") {
        elementRules = stylesheet.cssRules[i];
      }
    }

    elementRules.style.setProperty(
      "flex-basis",
      `calc(var(--canvas-width) / ${size})`
    );
  }
});

drawButton.addEventListener("click", drawBlack);

eraseButton.addEventListener("click", eraseCell);
