"use strict";

let playerSelection = "";
let computerSelection = "";



game(playerSelection, computerSelection);

function game(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?").trim().toLowerCase();
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 0) {
            console.log("Invalid Player Input, restart game");
            break;
        } else {
            if (roundResult === 1) {
                console.log("You Win! Rock beats Scissors!");
                playerScore += 1;
            }
            if (roundResult === 2) {
                console.log("You Win! Paper beats Rock!");
                playerScore += 1;
            }
            if (roundResult === 3) {
                console.log("You Win! Scissors beats Paper!");
                playerScore += 1;
            }
            if (roundResult === 4) {
                console.log("You Lose! Rock beats Scissors!");
                computerScore += 1;
            }
            if (roundResult === 5) {
                console.log("You Lose! Paper beats Rock!")
                computerScore += 1;
            }
            if (roundResult === 6) {
                console.log("You Lose! Scissors beats Paper!");
                computerScore += 1;
            }
            if (roundResult === 7) {
                console.log("Tie!");
                playerScore += 1;
                computerScore += 1;
            }
        }
    }

    if (playerScore > computerScore) {
        console.log(`You Win! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You Lose! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    } else {
        console.log(`Tie! Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }

    console.log("Reload page to play again!");
}

// Generates random number between 0-2 and assigns the number to "rock", "paper" or "scissors"
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    let choice = "";
    console.log(choiceNum);
    switch(choiceNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            choice = "error";
            break;
    }

    return choice;
}

/* 
    Plays round of "Rock Paper Scissors"
    Returns number values in conjunction with outcome of the game, as follows:
    0. Player entered invalid input
    1. Player beats Computer with Rock
    2. Player beats Computer with Paper
    3. Player beats Computer with Scissors
    4. Computer beats Player with Rock
    5. Computer beats Player with Paper
    6. Computer beats Player with Scissors
    7. Tie
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return 0;
    } else if (playerSelection === computerSelection) {
        return 7;
    } else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return 1;
        }
        if (playerSelection === "paper" && computerSelection === "rock") {
            return 2;
        }
        if (playerSelection === "scissors" && computerSelection === "paper") {
            return 3;
        }
        if (computerSelection === "rock" && playerSelection === "scissors") {
            return 4;
        }
        if (computerSelection === "paper" && playerSelection === "rock") {
            return 5;
        }
        if (computerSelection === "scissors" && playerSelection === "paper") {
            return 6;
        }
    }
}