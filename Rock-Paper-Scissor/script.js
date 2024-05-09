const toggleDarkMode = document.querySelector("#toggle-dark");
const stoneBtn = document.getElementById("stone-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const playerWindow = document.getElementById("player-window");
const computerWindow = document.getElementById("computer-window");
const displayWinner = document.getElementById("display-winner");

const STONE = "STONE";
const SCISSOR = "SCISSOR";
const PAPER = "PAPER";
const DRAW = "DRAW";

toggleDarkMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.37) {
    return STONE;
  } else if (randomValue < 0.67) {
    return SCISSOR;
  } else {
    return PAPER;
  }
}

function getPlayerChoice(playerSelection) {
  const playerChoice = playerSelection;
  const computerChoice = getComputerChoice();

  function playerImage() {
    if (playerSelection === STONE) {
      return '<img src="./images/granite.png"/>';
    } else if (playerSelection === PAPER) {
      return '<img src="./images/toilet-paper.png"/>';
    } else {
      return '<img src="./images/scissors.png"/>';
    }
  }
  const setPlayerImage = playerImage();
  playerWindow.innerHTML = setPlayerImage;

  function computerImage() {
    if (computerChoice === STONE) {
      return '<img src="./images/granite.png"/>';
    } else if (computerChoice === PAPER) {
      return '<img src="./images/toilet-paper.png"/>';
    } else {
      return '<img src="./images/scissors.png"/>';
    }
  }

  const setComputerImage = computerImage();
  computerWindow.innerHTML = setComputerImage;

  const winner = getWinner(playerChoice, computerChoice);
  displayWinner.innerHTML = winner;
}

function getWinner(pChoice, cChoice) {
  console.log("player choice = ", pChoice);
  console.log("computer choice = ", cChoice);
  if (pChoice === cChoice) {
    return DRAW;
  } else if (
    (pChoice === STONE && cChoice === SCISSOR) ||
    (pChoice === PAPER && cChoice === STONE) ||
    (pChoice === SCISSOR && cChoice === PAPER)
  ) {
    return "Player Win";
  } else {
    return "Computer Win";
  }
}

stoneBtn.addEventListener("click", () => {
  getPlayerChoice(STONE);
});

paperBtn.addEventListener("click", () => {
  getPlayerChoice(PAPER);
});

scissorBtn.addEventListener("click", () => {
  getPlayerChoice(SCISSOR);
});
