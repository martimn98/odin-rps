function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        return 'Rock';
    }
    else if (randNum === 1) {
        return 'Paper';
    }
    else if (randNum === 2) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === 'rock') {
        if (computer === 'paper') {
            return 'Lose';
        }
        else if (computer === 'scissors') {
            return 'Win';
        }
        else return 'Tie';
    }
    else if (player === 'paper') {
        if (computer === 'scissors') {
            return 'Lose';
        }
        else if (computer === 'rock') {
            return 'Win';
        }
        else return 'Tie';
    }
    else {
        if (computer === 'rock') {
            return 'Lose';
        }
        else if (computer === 'paper') {
            return 'Win';
        }
        else return 'Tie';
    }

}

function game() {

    let score = 0;

    // for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if (result === 'Win') {
        score++;
        console.log(`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!`);
    }
    else if (result === 'Lose') {
        score--;
        console.log(`You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}!`);
    }
    else console.log("It's a Tie!");
    // }

    // if (score < 0) {
    //     console.log("The computer won the match!");
    // }
    // else if (score > 0) {
    //     console.log("You won the match!");
    // }
    // else console.log("You tied the match");
}

const selectors = document.querySelectorAll('.selector');
const options = ['rock', 'paper', 'scissors'];
const scoreBoard = document.querySelector('.score');
const winnerDiv = document.querySelector('.winner');

let result;
let playerScore = 0;
let computerScore = 0;

function displayWinner(winner) {
    if (winner === 'Player') {
        winnerDiv.textContent = 'You win!'
    }
    else if (winner === 'Computer') {
        winnerDiv.textContent = 'You Lose'
    }
}



function endGame() {

    selectors.forEach(element => {

        element.removeEventListener('click', play);

    });
}

function updateScore(result) {
    if (result === 'Win') {
        playerScore++;
        if (playerScore === 5) {
            displayWinner('Player');
            endGame();
        }
    }
    else if (result === 'Lose') {
        computerScore++;
        if (computerScore === 5) {
            displayWinner('Computer');
            endGame();
        }
    }

    scoreBoard.textContent = `${playerScore} - ${computerScore}`;
}

function play(element) {
    // checks which option was selected
    outer: for (let i = 0; i < options.length; i++) {
        if (element.currentTarget.contains(options[i])) {
            result = playRound(options[i], computerPlay());
            updateScore(result);
            break outer;
        }
    }
}

selectors.forEach(element => {

    element.addEventListener('click', play);

});


// console.log(computerPlay());