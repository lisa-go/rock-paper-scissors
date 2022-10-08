const container = document.querySelector("#container");

const results = document.createElement("div");
results.classList.add("results");

container.appendChild(results);


const score = document.createElement("div");
score.classList.add("score");

container.appendChild(score);


const finalResult = document.createElement("div");
finalResult.classList.add("finalResult");

container.appendChild(finalResult);



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

        computerSelection = getComputerChoice();
        if (playerScore === 5) {
            finalResult.textContent = "You Win!";
            reset ();
        }

        if (computerScore === 5) {
            finalResult.textContent = "You Lose!";
            reset ();
        }

        else {
            finalResult.textContent = "";
        }
        
        if (playRound(playerSelection, computerSelection) === "playerWin") {
            playerScore++;
            results.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        }
            else if (playRound(playerSelection, computerSelection) === "computerWin") {
                computerScore++;
                results.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            }
            else if (playRound(playerSelection, computerSelection) === "Tie!") {
                results.textContent = "Tie! " + playerSelection + " and " + computerSelection;
            }
            score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore; 
        }


function reset () {
    playerScore = 0;
    computerScore = 0;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock";
    game ()

});
  
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper";
    game ()

});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    game ()

});
    



