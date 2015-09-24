'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = move || getInput();
    return(playerMove);
}

function getComputerMove(move) {
   var computerMove = move || randomPlay();
   return (computerMove);
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === "rock") && (computerMove === "rock")) {
        winner = "tie";
    }
     else if(playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    }
    else if(playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    }
    else if(playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else if(playerMove === "paper" && computerMove === "paper") {
        winner = "tie";
    }
    else if(playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    }
    else if(playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    }
    else if(playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    else if(playerMove === "scissors" && computerMove === "scissors") {
        winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

    if (winner === "player") {
        playerWins += 1;
    }
    else if (winner === "computer")  {
        computerWins +=1;
    }

    else if (winner === "tie") {
        playerWins +=1;
        computerWins +=1;
    }

    console.log('Player chose ' + playerMove + ' ' + 'while Computer chose ' + computerMove);
    console.log(winner + ' ' + 'is the winner!');
    console.log('The score is currently ' + playerWins + ' for the player and ' + computerWins + ' for the computer.' );
}
}
playToFive();