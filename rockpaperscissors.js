/*getComputerChoice
Generate a random number
Transform the number to a value: rock, scissors, paper
output one of the previous values
*/

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
  function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    /* 0 : TIE
       1 : player LOSES (computer WINS)
       2 : player WINS (computer LOSES)
    */

    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock")
    {
            return 1;
    } else if (
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "scissors")
        {
            return 2;
        }
    }
/* OLD WORKING VERSION of playRound

   if (playerSelection === "paper") {
      if (computerSelection === "paper") {
        return 0;
      } else if (computerSelection === "scissors"){
        return 1;
      }else {
        return 2;
      }
    } else if (playerSelection === "rock") {
      if(computerSelection === "rock") {
        return 0;
      } else if (computerSelection === "paper") {
        return 1;
      } else {
        return 2;
      }
    } else if (playerSelection === "scissors") {
      if(computerSelection === "scissors") {
        return 0;
      } else if (computerSelection === "rock") {
        return 1;
      } else {
        return 2;
      }
    }
  }
*/
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
    } else if (playerCounter === computerCounter) {
        console.log("We have  TIE or something went wrong with the inputs. Let's play again.");
        game();
    }
  }


  game();