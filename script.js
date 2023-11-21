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

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");

    return playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            return 1;
        }
        else if (computerSelection == 'Scissors') {
            return 2;
        }
        else {
            return 3;
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            return 4;
        }
        else if (computerSelection == 'Scissors') {
            return 5;
        }
        else {
            return 6;
        }
    }
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            return 7;
        }
        else if (computerSelection == 'Paper') {
            return 8;
        }
        else {
            return 9;
        }
    }
    else {
        return 10;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        playerRoundChoice = getPlayerChoice();
        computerRoundChoice = getComputerChoice();
        roundOutcome = playRound(playerRoundChoice, computerRoundChoice)

        if (roundOutcome % 3 == 0) {
            alert("Tie!");
        }
        else if (roundOutcome == 10) {
            alert("Please enter valid selection! Computer wins round, starting new round...");
            computerWins++;
        }
        else if (roundOutcome % 2 == 0) {
            alert("You Win! " + playerRoundChoice + " beats " + computerRoundChoice);
            playerWins++;
        }
        else {
            alert("You Lose! " + computerRoundChoice + " beats " + playerRoundChoice);
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        alert("Player wins the game!" + "\nPlayer Score: " + playerWins.toString() + "\nComputer Score: " + computerWins.toString());
    }
    else if (playerWins < computerWins) {
        alert("Computer wins the game." + "\nPlayer Score: " + playerWins.toString() + "\nComputer Score: " + computerWins.toString());
    }
    else {
        alert("Game Tie!");
    }
}

game();