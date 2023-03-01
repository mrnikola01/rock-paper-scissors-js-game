let playerScore = 0;
let opponentScore = 0;
let gameRounds = 0;

const options = ["Rock", "Paper", "Scissors"];

const firstButton = document.querySelector(".game-button-1");
const secondButton = document.querySelector(".game-button-2");
const thirdButton = document.querySelector(".game-button-3");

const playerChoiceText = document.querySelector(".player-choice");
const opponentChoiceText = document.querySelector(".opponent-choice");

const playerResult = document.querySelector(".player-result");
const opponentResult = document.querySelector(".opponent-result");

const resultText = document.querySelector(".result-text");

// let randomOpponentChoice = getOpponentChoice();

function randomOpponentChoiceFirst() {
  let opponentChoice = Math.floor(Math.random() * options.length);
  playRound(0, opponentChoice);
}

function randomOpponentChoiceSecond() {
  let opponentChoice = Math.floor(Math.random() * options.length);
  playRound(1, opponentChoice);
}

function randomOpponentChoiceThird() {
  let opponentChoice = Math.floor(Math.random() * options.length);
  playRound(2, opponentChoice);
}

firstButton.addEventListener("click", randomOpponentChoiceFirst);
secondButton.addEventListener("click", randomOpponentChoiceSecond);
thirdButton.addEventListener("click", randomOpponentChoiceThird);

function playRound(playerChoice, opponentChoice) {
  if (playerChoice == 0 && opponentChoice == 1) {
    playerChoiceText.textContent = "Your choice: Rock";
    opponentChoiceText.textContent = "Opponent choice: Paper";

    opponentScore++;
    opponentResult.textContent = "Opponent result " + opponentScore;
    resultText.textContent = "You lose! The opponent win with Paper.";
  } else if (playerChoice == 0 && opponentChoice == 2) {
    playerChoiceText.textContent = "Your choice: Rock";
    opponentChoiceText.textContent = "Opponent choice: Scissors";

    playerScore++;
    playerResult.textContent = "Your result " + playerScore;
    resultText.textContent = "You win against the opponent with Rock!";
  } else if (playerChoice == 0 && opponentChoice == 0) {
    playerChoiceText.textContent = "Your choice: Rock";
    opponentChoiceText.textContent = "Opponent choice: Rock";
    resultText.textContent = "It is a draw this time!";
  } else if (playerChoice == 1 && opponentChoice == 0) {
    playerChoiceText.textContent = "Your choice: Paper";
    opponentChoiceText.textContent = "Opponent choice: Rock";

    playerScore++;
    playerResult.textContent = "Your result " + playerScore;
    resultText.textContent = "You win against the opponent with Paper.";
  } else if (playerChoice == 1 && opponentChoice == 2) {
    playerChoiceText.textContent = "Your choice: Paper";
    opponentChoiceText.textContent = "Opponent choice: Scissors";

    opponentScore++;
    opponentResult.textContent = "Opponent result " + opponentScore;
    resultText.textContent = "You lose! The opponent win with Scissors.";
  } else if (playerChoice == 1 && opponentChoice == 1) {
    playerChoiceText.textContent = "Your choice: Paper";
    opponentChoiceText.textContent = "Opponent choice: Paper";
    resultText.textContent = "It is a draw this time!";
  } else if (playerChoice == 2 && opponentChoice == 0) {
    playerChoiceText.textContent = "Your choice: Scissors";
    opponentChoiceText.textContent = "Opponent choice: Rock";

    opponentScore++;
    opponentResult.textContent = "Opponent result " + opponentScore;
    resultText.textContent = "You lose! The opponent win with Rock.";
  } else if (playerChoice == 2 && opponentChoice == 1) {
    playerChoiceText.textContent = "Your choice: Scissors";
    opponentChoiceText.textContent = "Opponent choice: Paper";

    playerScore++;
    playerResult.textContent = "Your result " + playerScore;
    resultText.textContent = "You win against the opponent with Scissors.";
  } else if (playerChoice == 2 && opponentChoice == 2) {
    playerChoiceText.textContent = "Your choice: Scissors";
    opponentChoiceText.textContent = "Opponent choice: Scissors";
    resultText.textContent = "It is a draw this time!";
  }
  gameRounds++;
}
