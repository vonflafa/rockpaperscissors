/*getComputerChoice
Generate a random number
Transform the number to a value: rock, scissors, paper
output one of the previous values
*/

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
  function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    /*
    Old code for a previous version of the exercise
    const TIE = "It's a TIE!"
    const WIN =  "You WIN! " + playerSelection + " beats " + computerSelection + ".";
    const LOSE = "You LOSE! " + computerSelection + " beats " + playerSelection + ".";
    const ERROR = "Something went wrong!";*/

    if (playerSelection === "paper") {
      if (computerSelection === "Paper") {
        return 0;
      } else if (computerSelection === "Scissors"){
        return 1;
      }else {
        return 2;
      }
    } else if (playerSelection === "rock") {
      if(computerSelection === "Rock") {
        return 0;
      } else if (computerSelection === "Paper") {
        return 1;
      } else {
        return 2;
      }
    } else if (playerSelection === "scissors") {
      if(computerSelection === "Scissors") {
        return 0;
      } else if (computerSelection === "Rock") {
        return 1;
      } else {
        return 2;
      }
    } else {
      return NaN;
    }
  }

  function game () {
    let result = 0;
    let playerCounter = 0;
    let computerCounter = 0;
    let playerChoice = null;
    let computerChoice = null;

    for (let i = 0; i <= 4; i++) {
      playerChoice = prompt("Paper, rock or scissors?");
      computerChoice = getComputerChoice();
        result = playRound (playerChoice, computerChoice);
        if (result === 0) {
            console.log ("This is a TIE!");
        } else if (result === 1) {
            console.log("Player WINS! " + playerChoice + " beats " + computerChoice);
            playerCounter++;
        }else if (result === 2) {
            console.log("Computer WINS! " + computerChoice + " beats " + playerChoice);
            computerCounter++;
        } else {
          console.log("This round is not valid, something went wrong");
        }
    }
    if (playerCounter > computerCounter) {
        console.log("Player wins " + playerCounter + " to " + computerCounter + "!");
    } else if (playerCounter < computerCounter) {
        console.log("Computer wins " + computerCounter + " to " + playerCounter + "!");
    } else {
        console.log("Something went wrong");
    }
  }
