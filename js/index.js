const canvas = document.querySelector(".canvas");

for (let i = 1; i <= 16 * 16; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", `square square-${i}`);
  canvas.appendChild(square);
}

const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mouseover", function () {
    squares[i].classList.add("black");
  });
}
