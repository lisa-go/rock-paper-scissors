
    //...... selecting DOM parent ......//
const container = document.querySelector("#container");

    //...... creating results text ......//
const results = document.createElement("div");
results.classList.add("results");
container.appendChild(results);

    //...... creating score text ......//
const score = document.createElement("div");
score.classList.add("score");
container.appendChild(score);

    //...... creating final result text ......//
const finalResult = document.createElement("div");
finalResult.classList.add("finalResult");
container.appendChild(finalResult);


    //...... generating random computer selection ......//
function getComputerChoice () {
        const choices = ["rock","paper","scissors"];
        let random = Math.floor(Math.random()*choices.length);
        return (random,choices[random]);
    }

    //...... determining winner of each combination of choices ......//
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

    //...... start score count ......//
let playerScore = 0;
let computerScore = 0;

    //...... score counting ......//
function game() {
    computerSelection = getComputerChoice();
        
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
        

        //...... ending game at score 5 ......//
    if (playerScore >= 5) {
        finalResult.textContent = "You Win! Press Any Key to Restart!";
        endGame ();
        restartGame ();
    }

    else if (computerScore >= 5) {
        finalResult.textContent = "You Lose! Press Any Key to Restart!";
        endGame ();
        restartGame ();
    }

    else {
        finalResult.textContent = "";
    }
    }

    //...... end game function disables further button press inputs ......//
function endGame () {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function restartGame () {
    addEventListener('keypress', () => {
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
        playerScore = 0;
        computerScore = 0;
        results.textContent = "";
        finalResult.textContent = "";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore; 
    });
}

    //...... determine player selection as button pressed ......//
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
    



