const startGameBtn = document.getElementById("start-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const displayWinner = document.getElementById("display-winner");
const displayComputerChoice = document.getElementById("display-computer");
const displayPlayerChoice = document.getElementById("display-player");

const ROCK = "ROCK";
const SCISSOR = "SCISSOR";
const PAPER = "PAPER";
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = "DRAW";
const PLAYER_WIN = "PLAYER";
const COMPUTER_WIN = "COMPUTER";
let playerSelection;

function getPlayerChoice(playerSelection) {
  if (
    playerSelection !== ROCK &&
    playerSelection !== PAPER &&
    playerSelection !== SCISSOR
  ) {
    alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  console.log("Player Choice = ", playerSelection);
  const setPlayerImage = playerImage();

  function playerImage() {
    if (playerSelection === ROCK) {
      return '<img src="./images/granite.png" />';
    } else if (playerSelection === PAPER) {
      return '<img src="./images/toilet-paper.png"/>';
    } else {
      return '<img src="./images/scissors.png" />';
    }
  }
  displayPlayerChoice.innerHTML = setPlayerImage;
  const computerChoice = getComputerChoice();
  console.log("Computer Choice = ", computerChoice);
  const winner = getWinner(playerSelection, computerChoice);
  let setComputerImage = computerImage();
  function computerImage() {
    if (computerChoice === ROCK) {
      return '<img src="./images/granite.png" />';
    } else if (computerChoice === PAPER) {
      return '<img src="./images/toilet-paper.png"/>';
    } else {
      return '<img src="./images/scissors.png" />';
    }
  }
  displayComputerChoice.innerHTML = setComputerImage;
  displayWinner.innerHTML = winner;
  // if (winner === "PLAYER") {
  //   displayPlayerWinner.innerHTML = "WINNER";
  // } else if (winner === "COMPUTER") {
  //   displayComputerWinner.innerHTML = "WINNER";
  // }
  // // else {
  // //   displayPlayerWinner.innerHTML = "DRAW";
  // //   displayComputerWinner.innerHTML = "DRAW";
  // // }
  console.log(winner);
}

function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.37) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return SCISSOR;
  } else {
    return PAPER;
  }
}

function getWinner(pChoice, cChoice) {
  if (pChoice === cChoice) {
    return DRAW;
  } else if (
    (pChoice === SCISSOR && cChoice === PAPER) ||
    (pChoice === ROCK && cChoice == SCISSOR) ||
    (pChoice === PAPER && cChoice === ROCK)
  ) {
    return PLAYER_WIN;
  } else {
    return COMPUTER_WIN;
  }
}

// startGameBtn.addEventListener("click", function () {
//   console.log("Game starting...");
//   const playerChoice = getPlayerChoice();
//   console.log("Player Choice = ", playerChoice);
//   const computerChoice = getComputerChoice();
//   console.log("Computer Choice = ", computerChoice);
//   const winner = getWinner(playerChoice, computerChoice);
//   console.log(winner);
// });

rockBtn.addEventListener("click", function () {
  getPlayerChoice(ROCK);
});

paperBtn.addEventListener("click", function () {
  getPlayerChoice(PAPER);
});

scissorBtn.addEventListener("click", function () {
  getPlayerChoice(SCISSOR);
});
