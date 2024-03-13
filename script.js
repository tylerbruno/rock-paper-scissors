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


let score = 0;
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === computer) {
        console.log(`You Tie! ${playerSelection} equals ${computerSelection}. Score: ${score}`);
    } else if (player === "rock" && computer === "scissors") {
        score++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}. Score: ${score}`);
    } else if (player === "rock" && computer === "paper") {
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}. Score: ${score}`);
    } else if (player === "paper" && computer === "rock") {
        score++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}. Score: ${score}`);
    } else if (player === "paper" && computer === "scissors") {
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}. Score: ${score}`);
    } else if (player === "scissors" && computer === "rock") {
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}. Score: ${score}`);
    } else if (player === "scissors" && computer === "paper") {
        score++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}. Score: ${score}`);
    }
}


function playGame() {
    for (i = 0; i < 5; i++) {
        let playerPick = prompt("Please pick Rock, Paper, or Scissors");
        playRound(playerPick, getComputerChoice());
    }

}

playGame();

