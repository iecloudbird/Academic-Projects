function getComputerChoice() {
    let result = "";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        result = "rock";

    } else if (randomNumber === 2) {
        result = "paper";
    } else {
        result = "scissors";
    }
    console.log("Computer's choice is : " + result);
    return result;
}
function getHumanChoice() {
    let userInput = prompt("Enter your choice (Rock, Paper or Scissors): ").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        console.log("Human's choice is: " + userInput);
        return userInput;
    } else {
        console.log("Invalid input. Please try again.");
        return getHumanChoice(); // Recursively ask until a valid input is provided
    }

}



function playGame() {
    console.log("Welcome to Rock-Paper-Scissors game. Enjoy the game ! ")

    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie !")
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win ! Rock beats Scissors !")
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            console.log("You win ! Paper beats Rock !")
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            console.log("You win ! Scissors beats Paper !")
        } else {
            console.log("You lose ! " + computerChoice + " beats " + humanChoice + " !");
            computerScore += 1;
        }
    }


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("The total scores are :" + "\n\t\tHuman Scored : " + humanScore + "\n\t\tComputer Scored: " + computerScore);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer is the overall winner.");
    } else {
        console.log("It's an overall tie!");
    }
}

playGame()