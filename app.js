const container = document.querySelector(".sketch");

const buttonSm = document.querySelector("#pen-sm");
const buttonMd = document.querySelector("#pen-md");
const buttonLg = document.querySelector("#pen-lg");

const buttonLgt = document.querySelector("#pen-lt");
const buttonDrk = document.querySelector("#pen-drk");
const buttonClr = document.querySelector("#pen-clr");

const erase = document.querySelector(".fa-eraser");

let currentColor = "";

// --------------GRID CREATION-------------- //

function createGrid(row, col) {
  container.style.setProperty("--grid-row", row);
  container.style.setProperty("--grid-col", col);

  for (i = 0; i < row * col; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cells";
  }
}

// --------------SIZE BUTTONS-------------- //

function changeSize() {
  buttonSm.addEventListener("click", function () {
    buttonSm.classList.add("active");
    buttonMd.classList.remove("active");
    buttonLg.classList.remove("active");
    eraseGrid();
    createGrid(52, 52);
    paint(currentColor);
  });

  buttonMd.addEventListener("click", function () {
    buttonMd.classList.add("active");
    buttonSm.classList.remove("active");
    buttonLg.classList.remove("active");
    eraseGrid();
    createGrid(28, 28);
    paint(currentColor);
  });

  buttonLg.addEventListener("click", function () {
    buttonLg.classList.add("active");
    buttonSm.classList.remove("active");
    buttonMd.classList.remove("active");
    eraseGrid();
    createGrid(16, 16);
    paint(currentColor);
  });
}

// --------------COLOR BUTTONS-------------- //

function paint(mode) {
  let gridCells = document.querySelectorAll(".cells");

  gridCells.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      if (mode === "light" || currentColor === "light" || currentColor === "") {
        e.target.classList.add("pen-color-light");
      } else if (mode === "dark" || currentColor === "dark") {
        e.target.classList.remove("pen-color-light");
        e.target.classList.add("pen-color-dark");
      } else if (mode === "rainbow" || currentColor === "rainbow") {
        const rainbow = [
          "#ff1453",
          "#ffc014",
          "#ffeb14",
          "#14ff4b",
          "#14c8ff",
          "#a114ff",
          "#ff14c0",
        ];
        const random = ~~(Math.random() * rainbow.length);
        e.target.style.backgroundColor = rainbow[random];

        e.target.classList.remove("pen-color-light");
      }
    });
  });
}

function changeColor() {
  buttonDrk.addEventListener("click", function () {
    buttonDrk.classList.add("active");
    buttonLgt.classList.remove("active");
    buttonClr.classList.remove("active");
    currentColor = "dark";
    paint("dark");
  });

  buttonLgt.addEventListener("click", function () {
    buttonLgt.classList.add("active");
    buttonDrk.classList.remove("active");
    buttonClr.classList.remove("active");
    currentColor = "light";
    paint("light");
  });

  buttonClr.addEventListener("click", function () {
    buttonClr.classList.add("active");
    buttonDrk.classList.remove("active");
    buttonLgt.classList.remove("active");
    currentColor = "rainbow";
    paint("rainbow");
  });
}

// --------------ERASE BUTTON-------------- //

erase.addEventListener("click", function () {
  eraseGrid();
  buttonMd.classList.add("active");
  buttonSm.classList.remove("active");
  buttonLg.classList.remove("active");
  createGrid(28, 28);
  paint(currentColor);
});

function eraseGrid() {
  let clear = document.querySelectorAll(".cells");
  clear.forEach((cell) => {
    cell.remove();
  });
}

// --------------START SKETCH-------------- //

function startSketch() {
  createGrid(28, 28); // 16x16, 28x28, 52x52
  paint("light");
  changeSize();
  changeColor();
}

startSketch();
