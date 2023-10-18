let etchContainer = document.querySelector("#etchContainer");
let generateButton = document.querySelector("#generateButton");
let gridAmount = 64;
let selectedColor = 'black';
let colorSelector = document.querySelector('#colorSelector');

function selectColor() {
selectedColor = colorSelector.value;
}
colorSelector.addEventListener('input', selectColor);


function generateGrid(entered) {
  for (i = 0; i < entered; i++) {
    let gridRow = document.createElement("div");
    gridRow.id = "gridRow";
    etchContainer.appendChild(gridRow);
    for (c = 0; c < entered; c++) {
      let gridCell = document.createElement("div");
      gridCell.id = "gridCell";
      gridRow.appendChild(gridCell);
      gridCell.addEventListener("mouseover", (event) => {
        gridCell.style.backgroundColor = selectedColor;
      });
    }
  }
}

function getGridAmount() {
  gridAmount = document.querySelector("#gridAmount").value;
  console.log(gridAmount);
}

function deleteGrid() {
    let etchContainer = document.querySelector("#etchContainer");
    while (etchContainer.firstChild) {
      etchContainer.removeChild(etchContainer.firstChild);
    }
  }
  

generateButton.addEventListener("click", function () {
  getGridAmount();
  deleteGrid();
  generateGrid(gridAmount);
});

// Initial grid generation
generateGrid(gridAmount);


