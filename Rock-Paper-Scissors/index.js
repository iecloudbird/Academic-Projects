let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    document.getElementById("roundResult").textContent = resultMessage;
    document.getElementById("score").textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

    checkGameWinner();
}

function checkGameWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
        const gameWinnerMessage = humanScore > computerScore ? "Congratulations! You are the overall winner!" : "Sorry! The computer is the overall winner.";
        document.getElementById("gameWinner").textContent = gameWinnerMessage;
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("score").textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
}

document.getElementById('rockButton').addEventListener('click', () => playRound('rock'));
document.getElementById('paperButton').addEventListener('click', () => playRound('paper'));
document.getElementById('scissorsButton').addEventListener('click', () => playRound('scissors'));
