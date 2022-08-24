let container = document.querySelector(".sketch");

function createGrid(row, col) {
  container.style.setProperty("--grid-row", row);
  container.style.setProperty("--grid-col", col);

  for (i = 0; i < row * col; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cells";
  }
}

createGrid(32, 32)
