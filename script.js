function getComputerChoice() {
    let compChoice = "";
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            compChoice = "Rock";
            break;
        case 2:
            compChoice = "Paper";
            break;
        case 3:
            compChoice = "Scissors";
    }
    return compChoice
}


let playerWins = 0;
let computerWins = 0;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsDesc = document.querySelector('#results');

function playRound(playerSelection, computerSelection) {
    let roundOutcome = 0;
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            roundOutcome = 1;
        }
        else if (computerSelection == 'Scissors') {
            roundOutcome = 2;
        }
        else {
            roundOutcome = 3;
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            roundOutcome = 4;
        }
        else if (computerSelection == 'Scissors') {
            roundOutcome = 5;
        }
        else {
            roundOutcome = 6;
        }
    }
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            roundOutcome = 7;
        }
        else if (computerSelection == 'Paper') {
            roundOutcome = 8;
        }
        else {
            roundOutcome = 9;
        }
    }
    if (roundOutcome % 3 == 0) {
        resultsDesc.textContent = "Tie!" + " Player Score: " + playerWins.toString() + ", Computer Score: " + computerWins.toString();
    }
    else if (roundOutcome % 2 == 0) {
        playerWins++;
        resultsDesc.textContent = "You Win! " + playerSelection + " beats " + computerSelection + "; Player Score: " + playerWins.toString() + ", Computer Score: " + computerWins.toString();
    }
    else {
        computerWins++;
        resultsDesc.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + "; Player Score: " + playerWins.toString() + ", Computer Score: " + computerWins.toString();
    }

    if (playerWins == 5) {
        resultsDesc.textContent = "Game Win! Congratulations! Refresh the page to start a new game!";
    }
    else if (computerWins == 5) {
        resultsDesc.textContent = "Game Lose. Try again! Refresh the page to start a new game!";
    }
    else if (playerWins == 5 && computerWins == 5) {
        resultsDesc.textContent = "Tie! Try again! Refresh the page to start a new game!";
    }
}

rockButton.addEventListener('click',  () => playRound('Rock', getComputerChoice()), false);
paperButton.addEventListener('click', () => playRound('Paper', getComputerChoice()), false);
scissorsButton.addEventListener('click', () => playRound('Scissors', getComputerChoice()), false);