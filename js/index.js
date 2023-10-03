const canvas = document.querySelector(".canvas");

for (let i = 1; i <= 16 * 16; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", `square square-${i}`);
  canvas.appendChild(square);
}

const squares = document.querySelectorAll(".square");

const drawButton = document.querySelector(".button-draw");
const eraseButton = document.querySelector(".button-erase");
const resizeButton = document.querySelector(".button-resize");

drawButton.addEventListener("click", () => {
  console.log("clicked");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.add("black");
    });
  }
});

eraseButton.addEventListener("click", () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].classList.remove("black");
    });
  }
});

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

    for (let i = 1; i <= size * size; i++) {
      const square = document.createElement("div");
      square.setAttribute("class", `square square-${i}`);
      canvas.appendChild(square);
    }

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
