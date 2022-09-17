const canvas = document.querySelector(".canvas");
const canvasSize = parseInt(canvas.dataset.size); // initial size

resizeGrid(canvasSize); // resize grid to initialise size from 0

// Generate grid cells
for (let i = 0; i != canvasSize; i++) {
  for (let j = 0; j != canvasSize; j++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
  }
}

function resizeGrid(size) {
  canvas.dataset.size = size;
  let root = document.documentElement;
  root.style.setProperty("--grid-size", size);
}
