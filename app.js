const container = document.querySelector(".sketch");

const buttonSm = document.querySelector("#pen-sm");
const buttonMd = document.querySelector("#pen-md");
const buttonLg = document.querySelector("#pen-lg");

const buttonLgt = document.querySelector("#pen-lt");
const buttonDrk = document.querySelector("#pen-drk");
const buttonClr = document.querySelector("#pen-clr");

// const eraser = document.querySelector("#eraser");
const erase = document.querySelector(".fa-eraser");




// --------------GRID CREATION-------------- //
function createGrid(row, col) {
  container.style.setProperty("--grid-row", row);
  container.style.setProperty("--grid-col", col);

  for (i = 0; i < row * col; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cells";
  }
}

// --------------COLOR CREATION-------------- //
function changeColor() {
  let dark = document.querySelector(".cells");
  dark.addEventListener("click", function (e) {
    dark.classList.add("pen-color-dark");
  });
}

// --------------SIZE BUTTONS-------------- //
buttonSm.addEventListener("click", function () {
  buttonSm.classList.add("active");
  buttonMd.classList.remove("active");
  buttonLg.classList.remove("active");
});

buttonMd.addEventListener("click", function () {
  buttonMd.classList.add("active");
  buttonSm.classList.remove("active");
  buttonLg.classList.remove("active");
});

buttonLg.addEventListener("click", function () {
  buttonLg.classList.add("active");
  buttonSm.classList.remove("active");
  buttonMd.classList.remove("active");
});

// --------------COLOR BUTTONS-------------- //
buttonDrk.addEventListener("click", function () {
  buttonDrk.classList.add("active");
  buttonLgt.classList.remove("active");
  buttonClr.classList.remove("active");
  erase.classList.remove("active-e");
});

buttonLgt.addEventListener("click", function () {
  buttonLgt.classList.add("active");
  buttonDrk.classList.remove("active");
  buttonClr.classList.remove("active");
  erase.classList.remove("active-e");
});

buttonClr.addEventListener("click", function () {
  buttonClr.classList.add("active");
  buttonDrk.classList.remove("active");
  buttonLgt.classList.remove("active");
  erase.classList.remove("active-e");
});

// --------------ERASE BUTTON-------------- //
erase.addEventListener("click", function () {
  erase.classList.add("active-e");
  eraseGrid();
});

function eraseGrid() {
  let clear = document.querySelectorAll(".cells");
  clear.forEach((item) => {
    item.style.backgroundColor = "#dbdbdb";
  });
}



createGrid(28, 28);

// 16x16, 28x28, 64x64

// function startGame() {
//     generateGrid();
//     startPainting('classic');
//     changeSize();
//     changeMode();
//     eraseListener();
//   }
// THEN CALL STARTGAME
