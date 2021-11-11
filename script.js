const developerName = "Afaz ul Haque";

let numberArray = [
  {
    value: 1,
    color: "#6F98A8",
  },
  {
    value: 2,
    color: "#2B8EAD",
  },
  {
    value: 3,
    color: "#2F454E",
  },
  {
    value: 4,
    color: "#2B8EAD",
  },
  {
    value: 5,
    color: "#2F454E",
  },
  {
    value: 6,
    color: "#BFBFBF",
  },
  {
    value: 7,
    color: "#BFBFBF",
  },
  {
    value: 8,
    color: "#6F98A8",
  },
  {
    value: 9,
    color: "#2F454E",
  },
];

document.getElementById("developer-name").innerHTML = developerName;

function getNumberGrid() {
  let text = "";
  for (let i = 0; i < numberArray.length; i++) {
    text += `<div class="number-card" style="background-color: ${numberArray[i].color}">
      <p class="number-center">${numberArray[i].value}</p>
    </div>`;
  }

  document.getElementById("number-box").innerHTML = text;
}

function shuffle() {
  numberArray.sort(() => Math.random() - 0.5);

  getNumberGrid();
}

function sort() {
  numberArray.sort((a, b) => a.value - b.value);

  getNumberGrid();
}

getNumberGrid();
