   function getComputerChoice () {
        const choices = ["rock","paper","scissors"];
        let random = Math.floor(Math.random()*choices.length);
        return (random,choices[random]);
    }




function playRound(playerSelection, computerSelection) {
   if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log ("You Lose! Rock beats Scissors");
    return ("computerWin");
   }
        else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log ("You Lose! Scissors beats Paper");
        return ("computerWin");
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log ("You Lose! Paper beats Rock");
        return ("computerWin");
        }

        else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log ("You Win! Scissors beats Paper");
        return ("playerWin");
        }
        else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log ("You Win! Paper beats Rock");
        return ("playerWin");
        }
        else if (computerSelection === "scissors" && playerSelection === "rock") {
        console.log ("You Win! Rock beats Scissors");
        return ("playerWin");
        }

            else {
            console.log ("Tie!");
            return ("Tie!");
            }

}

let playerScore = 0;
let computerScore = 0;

function game() {

    for (let i = 0; i < 5; i++) {

        computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase("");
        if (playRound(playerSelection, computerSelection) === "playerWin") {
            playerScore++;}
            else if (playRound(playerSelection, computerSelection) === "computerWin") {
                computerScore++;
            }
            else if (playRound(playerSelection, computerSelection) === "Tie!") {
                i--;
            }

            console.log ("Player Score: " + playerScore + " Computer Score: " + computerScore) 
        }

    }

    


game ()