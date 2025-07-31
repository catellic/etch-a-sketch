let size = 16;

const gridSel = document.querySelector(`.grid`);
const newGridBtn = document.querySelector(`.new-grid`);
const clearBtn = document.querySelector(`.clear`);

function retrieveSizeFromUsr() {
  let input;

  while (Number.isInteger(parseFloat(input)) == false) {
    input = prompt("Please choose new size");
    if (input == null) {
      break;
    } else if (input > 100) {
      alert(`Please input a number lower than 100!`);
      break;
    } else {
      return input;
    }
  }
}

function createGrid(size) {
  squareItemSize = 100 / size;
  
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");

    div.textContent = `-`;
    div.classList.add("grid-item");
    div.id = `${i + 1}`;
    div.style.width = `${squareItemSize}%`;
    div.style.flex = `1 1 ${squareItemSize}%`;
    gridSel.appendChild(div);
  }
}

document.addEventListener(`DOMContentLoaded`, () => {
  createGrid(16);
});

newGridBtn.addEventListener(`click`, () => {
  size = retrieveSizeFromUsr();
  if (size > 0) {
    gridSel.replaceChildren();
    createGrid(size);
  }
});

gridSel.addEventListener("click", (e) => {
  if (e.target.classList.contains("grid-item")) {
    e.target.classList.toggle("selected");
  }
});

clearBtn.addEventListener(`click`, () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.classList.remove("selected");
  });
});