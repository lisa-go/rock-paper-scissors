   function getComputerChoice () {
        const choices = ["rock","paper","scissors"];
        let random = Math.floor(Math.random()*choices.length);
        return (random,choices[random]);
    }




function playRound(playerSelection, computerSelection) {
   if (computerSelection === "rock" && playerSelection === "scissors") {
    return ("computerWin");
   }
        else if (computerSelection === "scissors" && playerSelection === "paper") {
        return ("computerWin");
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
        return ("computerWin");
        }

        else if (computerSelection === "paper" && playerSelection === "scissors") {
        return ("playerWin");
        }
        else if (computerSelection === "rock" && playerSelection === "paper") {
        return ("playerWin");
        }
        else if (computerSelection === "scissors" && playerSelection === "rock") {
        return ("playerWin");
        }

            else {
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
            playerScore++;
            console.log ("You Win! " + playerSelection + " beats " + computerSelection);}
            else if (playRound(playerSelection, computerSelection) === "computerWin") {
                computerScore++;
                console.log ("You Lose! " + computerSelection + " beats " + playerSelection);
            }
            else if (playRound(playerSelection, computerSelection) === "Tie!") {
                i--;
                console.log ("Tie! " + playerSelection + " and " + computerSelection);
            }

            console.log ("Player Score: " + playerScore + " Computer Score: " + computerScore) 

        }
           }


game ()
