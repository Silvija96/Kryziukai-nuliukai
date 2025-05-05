const crossEl = document.querySelector(".cross");
const zeroEl = document.querySelector(".zero");
const btnAllEl = document.querySelectorAll(".btn");
const resultEl = document.querySelector(".result");
const startEl = document.querySelector(".start-btn");

let choosedWeapon = "";
let usedBtnX = [];
let usedBtnY = [];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startEl.addEventListener("click", () => {
  usedBtnX = [];
  usedBtnY = [];
  choosedWeapon = "";
  resultEl.textContent = "";
  resultEl.classList.remove("active");
  startGame();
});

crossEl.addEventListener("click", () => {
  choosedWeapon = "X";
});

zeroEl.addEventListener("click", () => {
  choosedWeapon = "O";
});

btnAllEl.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML !== "") {
      return;
    }

    if (choosedWeapon === "X") {
      btn.innerHTML = '<img src="/img/cross.svg" alt="X">';
      usedBtnX.push(index);
      choosedWeapon = "O";
      checkWin();
      return;
    }
    if (choosedWeapon === "O") {
      btn.innerHTML = '<img src="/img/zero.svg" alt="O">';
      usedBtnY.push(index);
      choosedWeapon = "X";
      checkWin();
      return;
    }
  });
});

function startGame() {
  btnAllEl.forEach((btn) => {
    btn.innerHTML = "";
  });
}

function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (winningCombinations[i].every((index) => usedBtnX.includes(index))) {
      resultEl.classList.add("active");
      resultEl.textContent = "X is winner";
      return;
    }
    if (winningCombinations[i].every((index) => usedBtnY.includes(index))) {
      resultEl.classList.add("active");
      resultEl.textContent = "O is winner";
      return;
    }
  }
}