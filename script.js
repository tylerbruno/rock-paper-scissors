function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


let playerScore = 0;
let computerScore = 0;
let isWinner = false;
const results = document.querySelector("#results");
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    const result = document.createElement("p");
    const playerScoreElement = document.querySelector("#playerScore");
    const computerScoreElement = document.querySelector("#computerScore");


    if (player === computer) {
        result.textContent = `You Tie! ${playerSelection} equals ${computerSelection}.`;
        results.appendChild(result);
    } else if (player === "rock" && computer === "scissors") {
        playerScoreElement.textContent = `Player Score: ${++playerScore}`;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        results.appendChild(result);
    } else if (player === "rock" && computer === "paper") {
        computerScoreElement.textContent = `Computer Score: ${++computerScore}`;
        result.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
        results.appendChild(result);
    } else if (player === "paper" && computer === "rock") {
        playerScoreElement.textContent = `Player Score: ${++playerScore}`;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        results.appendChild(result);
    } else if (player === "paper" && computer === "scissors") {
        computerScoreElement.textContent = `Computer Score: ${++computerScore}`;
        result.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
        results.appendChild(result);
    } else if (player === "scissors" && computer === "rock") {
        computerScoreElement.textContent = `Computer Score: ${++computerScore}`;
        result.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
        results.appendChild(result);
    } else if (player === "scissors" && computer === "paper") {
        playerScoreElement.textContent = `Player Score: ${++playerScore}`;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        results.appendChild(result);
    }


    if (playerScore === 5 && isWinner !== true) {
        const winner = document.createElement("p");
        winner.textContent = "Player wins!"
        results.appendChild(winner);
        isWinner = true;
    } else if (computerScore === 5 && isWinner !== true) {
        const winner = document.createElement("p");
        winner.textContent = "Computer wins!"
        results.appendChild(winner);
        isWinner = true;
    }
}


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});




/**
 * 
 * function playGame() {
    for (i = 0; i < 5; i++) {
        let playerPick = prompt("Please pick Rock, Paper, or Scissors");
        playRound(playerPick, getComputerChoice());
    }

}

playGame();
 */

