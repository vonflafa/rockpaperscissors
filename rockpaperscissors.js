/*getComputerChoice
Generate a random number
Transform the number to a value: rock, scissors, paper
output one of the previous values
*/
let computerCounter = 0;
let playerCounter = 0;
const resultBox = document.querySelector(".resultBox");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

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
  function game (playerChoice) {
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    resultBox.textContent = "";

      if (result === 0) {
        //console.log ("This is a TIE!");
        //resultBox.textContent = "This is a TIE!";

      } else if (result === 1) {
        //console.log("Player WINS! " + playerChoice + " beats " + computerChoice);
        //resultBox.textContent = `Player WINS! ${playerChoice} beats ${computerChoice}`;
        playerCounter++;
        playerScore.textContent = `${playerCounter}`;

        //playerCounter++;
        //playerScore.textContent = `${playerCounter}`;
      } else if (result === 2) {
        //console.log("Computer WINS! " + computerChoice + " beats " + playerChoice);
        //resultBox.textContent =  `Computer WINS! ${computerChoice} beats ${playerChoice}`;
        computerCounter++;
        computerScore.textContent = `${computerCounter}`;
        //computerCounter++;
        //computerScore.textContent = `${computerCounter}`;
      }

      
      globalResult();
  }
      
    function globalResult () {

      if (computerCounter === 5) {
        resultBox.textContent = `Computer WINS the match! Final SCORE: ${computerCounter} - ${playerCounter}`;
        computerCounter = 0;
        playerCounter = 0;
        computerScore.textContent = `${computerCounter}`;
        playerScore.textContent = `${playerCounter}`;


      }
      else if (playerCounter === 5) {
        resultBox.textContent = `Congratulation!!! You WIN!  Final SCORE: ${computerCounter} - ${playerCounter}`;
        computerCounter = 0;
        playerCounter = 0;
        computerScore.textContent = `${computerCounter}`;
        playerScore.textContent = `${playerCounter}`;


      }
  }

  const btns = document.querySelector(".btns");
  btns.addEventListener("click", (e) => game(e.target.dataset.name));
  //game();