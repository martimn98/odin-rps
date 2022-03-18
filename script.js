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

    for (let i = 0; i < 5; i++) {
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
    }

    if (score < 0) {
        console.log("The computer won the match!");
    }
    else if (score > 0) {
        console.log("You won the match!");
    }
    else console.log("You tied the match");
}

game();


// console.log(computerPlay());