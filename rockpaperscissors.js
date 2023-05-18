/*getComputerChoice
Generate a random number
Transform the number to a value: rock, scissors, paper
output one of the previous values
*/

function getComputerChoice () {
    let choice = Math.random() * 3;
    /*
    0 - 1 : Rock
    1 - 2 : Paper
    2 - 3 : Scissors */
    if (choice >=0 && choice <=1){
      return "Rock";
    } else if (choice > 1 && choice <=2) {
      return "Paper";
    }
    return "Scissors";
  }

  function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    /*const TIE = "It's a TIE!"
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
    for (let i = 0; i = 4; i++) {
        result = playRound (let playerChoice = prompt("Paper, rock or scissors?"), let computerChoice = getComputerChoice());
        if (result === 0) {
            console.log ("This is a TIE!");
        } else if (result === 1) {
            console.log("Player WINS! " + playerChoice + " beats " + computerChoice);
            playerCounter++;
        }else if (result === 2) {
            console.log("Computer WINS! " + computerChoice + " beats " + playerChoice);
            computerCounter++;
        }
    }
    if (playerCounter > computerCounter) {
        console.log("Player wins with a total score of " + playerCounter + "!");
    } else if (playerCounter < computerCounter) {
        console.log("Computer wins with a total score of " + computerCounter + "!");
    } else {
        console.log("Something went wrong");
    }
  }

  /* gioca un round
  se vince player dagli un punto
  se vince computer dagli un punto
  