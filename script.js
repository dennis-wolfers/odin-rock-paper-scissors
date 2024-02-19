function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playAround(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return 'It\'s a tie!';
    } else if (playerChoice.toLowerCase() === 'rock') {
        if (computerChoice.toLowerCase() === 'paper') {
            return 'You lose! Paper beats Rock.';
        } else {
            return 'You win! Rock beats Scissors.';
        }
    } else if (playerChoice.toLowerCase() === 'paper') {
        if (computerChoice.toLowerCase() === 'scissors') {
            return 'You lose! Scissors beats Paper.';
        } else {
            return 'You win! Paper beats Rock.';
        }
    } else {
        if (computerChoice.toLowerCase() === 'rock') {
            return 'You lose! Rock beats Scissors.';
        } else {
            return 'You win! Scissors beats Paper.';
        }
    }
}

// play best of five rounds
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt('Do you choose "Rock", "Paper", or "Scissors"?');
        const computerChoice = getComputerChoice();
        const result = playAround(playerChoice, computerChoice);
        console.log(result);
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return 'You win!';
    } else if (playerScore < computerScore) {
        return 'You lose!';
    } else {
        return 'It\'s a tie!';
    }
}

console.log(playGame());