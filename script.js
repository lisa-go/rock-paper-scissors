    function getComputerChoice () {
        const choices = ["Rock","Paper","Scissors"];
        let random = Math.floor(Math.random()*choices.length);
        return (random,choices[random]);
    }



function playRound(playerSelection, computerSelection) {
   if (computerSelection === "Rock" && playerSelection === "Scissors") {
    console.log ("You Lose! Rock beats Scissors");
   }
        else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        console.log ("You Lose! Scissors beats Paper");
        }
        else if (computerSelection === "Paper" && playerSelection === "Rock") {
        console.log ("You Lose! Paper beats Rock");
        }

        else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        console.log ("You Win! Scissors beats Paper");
        }
        else if (computerSelection === "Rock" && playerSelection === "Paper") {
        console.log ("You Win! Paper beats Rock");
        }
        else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        console.log ("You Win! Rock beats Scissors");
        }

            else {
            console.log ("Tie!");
            }
console.log (computerSelection)

}

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));