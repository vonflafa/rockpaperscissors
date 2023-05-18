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