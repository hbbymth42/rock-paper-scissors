"use strict";

const playerSelection = prompt().trim().toLowerCase();
const computerSelection = getComputerChoice();

// Generates random number between 0-2 and assigns the number to "rock", "paper" or "scissors"
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    let choice = "";

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
    if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
        return 0;
    } else if (playerSelection === computerSelection) {
        return 7;
    } else {
        // enter remaining conditions here
    }
}