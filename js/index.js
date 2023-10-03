const canvas = document.querySelector(".canvas");

for (let i = 1; i <= 16 * 16; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", `square square-${i}`);
  canvas.appendChild(square);
}

const squares = document.querySelectorAll(".square");

const drawButton = document.querySelector(".button-draw");
const eraseButton = document.querySelector(".button-erase");

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
