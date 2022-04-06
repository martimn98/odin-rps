function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        updateComputer("Rock");
        return 'Rock';
    }
    else if (randNum === 1) {
        updateComputer("Paper");
        return 'Paper';
    }
    else if (randNum === 2) {
        updateComputer("Scissors");
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

    updateScoreBoard();
}

function updateScoreBoard(){
    scoreBoard.textContent = `${playerScore} - ${computerScore}`;
}

function updateComputer(result) {
    if(result === "Rock"){
        computerResult.src = rockPath
    }
    else if(result === "Paper") {
        computerResult.src = paperPath;
    }
    else if(result === "Scissors") {
        computerResult.src = scissorsPath;
    }

    computerResult.classList.add("gesture-icon");
    computerResult.classList.add("computer-result");
    computerResult.classList.remove("icon-placeholder");
    computerDiv.appendChild(computerResult);
}

function updateComputerColor(result) {
    if (result === 'Win') {
        computerDiv.style.background = "rgb(0,100,0,0.5)";
    }
    else if (result === 'Lose') {
        computerDiv.style.background = "rgb(100,0,0,0.5)";
    }
    else computerDiv.style.background = "rgb(100,100,0,0.5)";
}
function play() {
    // checks which option was selected, plays round and updates score
    outer: for (let i = 0; i < options.length; i++) {
        if (this.classList.contains(options[i])) {
            result = playRound(options[i], computerPlay());
            updateScore(result);
            updateComputerColor(result);
            break outer;
        }
    }
}

const selectors = document.querySelectorAll('.selector');
const options = ['rock', 'paper', 'scissors'];

const scoreBoard = document.querySelector('.score');
const winnerDiv = document.querySelector('.winner');
const computerDiv = document.querySelector(".computer-container");
const computerResult = document.createElement("img");
computerResult.classList.add("icon-placeholder");

const playAgain = document.getElementById("play-again");

const rockPath = "https://cdn-icons-png.flaticon.com/512/2165/2165597.png";
const paperPath = "https://cdn-icons-png.flaticon.com/512/2165/2165693.png";
const scissorsPath = "https://cdn-icons-png.flaticon.com/512/2165/2165608.png";

let result;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;


selectors.forEach(element => {

    element.addEventListener('click', play);

});



playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
    winnerDiv.textContent = "";
    computerDiv.removeChild(computerResult);
    computerDiv.style.background = "none";
    selectors.forEach(element => {

        element.addEventListener('click', play);

    });
});


// console.log(computerPlay());