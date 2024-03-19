let playerScore = 0;
let computerScore = 0;
const playRock = document.getElementById('rock');
playRock.addEventListener('click', () => {
    const playerChoice = 'Rock';
    const computerChoice = getComputerChoice();
    playAround(playerChoice, computerChoice);
})

const playPaper = document.getElementById('paper');
playPaper.addEventListener('click', () => {
    const playerChoice = 'Paper';
    const computerChoice = getComputerChoice();
    playAround(playerChoice, computerChoice);
})

const playScissors = document.getElementById('scissors');
playScissors.addEventListener('click', () => {
    const playerChoice = 'Scissors';
    const computerChoice = getComputerChoice();
    playAround(playerChoice, computerChoice);
})

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playAround(playerChoice, computerChoice) {
    let result = '';
    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        result = 'It\'s a tie!';
    } else if (playerChoice.toLowerCase() === 'rock') {
        if (computerChoice.toLowerCase() === 'paper') {
            result = 'You lose! Paper beats Rock.';
        } else {
            result = 'You win! Rock beats Scissors.';
        }
    } else if (playerChoice.toLowerCase() === 'paper') {
        if (computerChoice.toLowerCase() === 'scissors') {
            result = 'You lose! Scissors beats Paper.';
        } else {
            result = 'You win! Paper beats Rock.';
        }
    } else {
        if (computerChoice.toLowerCase() === 'rock') {
            result = 'You lose! Rock beats Scissors.';
        } else {
            result = 'You win! Scissors beats Paper.';
        }
    }

    document.getElementById('result').innerHTML = result;
    if (result.includes('You win!')) {
        playerScore++;
        document.getElementById('playerScore').innerHTML = `Player Score: ${playerScore}`;
    } else if (result.includes('You lose!')) {
        computerScore++;
        document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`;
    }

    if (playerScore === 5) {
        alert('Congratulations! You win!');
        cleanup();
    } else if (computerScore === 5) {
        alert('Better luck next time!');
        cleanup();
    }
}

function cleanup() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').innerHTML = `Player Score: ${playerScore}`;
    document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`;
    document.getElementById('result').innerHTML = 'First player to 5 wins. Click one.';
}