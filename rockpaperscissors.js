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
    const TIE = "It's a TIE!"
    const WIN =  "You WIN! " + playerSelection + " beats " + computerSelection + ".";
    const LOSE = "You LOSE! " + computerSelection + " beats " + playerSelection + ".";
    const ERROR = "Something went wrong!";
    if (playerSelection === "paper") {
      if (computerSelection === "Paper") {
        return TIE;
      } else if (computerSelection === "Scissors"){
        return LOSE;
      }else {
        return WIN;
      }
    } else if (playerSelection === "rock") {
      if(computerSelection === "Rock") {
        return TIE;
      } else if (computerSelection === "Paper") {
        return LOSE;
      } else {
        return WIN;
      }
    } else if (playerSelection === "scissors") {
      if(computerSelection === "Scissors") {
        return TIE;
      } else if (computerSelection === "Rock") {
        return LOSE;
      } else {
        return WIN;
      }
    } else {
      return ERROR;
    }
  }