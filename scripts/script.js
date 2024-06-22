function getComputerChoice () {  
    let choiceNumber = Math.floor(Math.random() * 3);
    // Generates a random number that is less than 3: 0, 1, 2

    if (choiceNumber === 0) {
        return "rock";
    } else if (choiceNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    console.log("This is a game of rock-paper-scissors. You play against the computer.");
    let humanChoice = prompt("Please type \'rock\', \'paper\', or \'scissors\' to make your choice.");

    return humanChoice.toLowerCase();    
}



function playRound (humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log ("Computer chooses \'paper\'.");
        console.log("You lose! Paper beats rock.");
        return "computer";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log ("Computer chooses \'scissors\'.");
        console.log("You win! Rock beats scissors.");
        return "human";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log ("Computer chooses \'rock\'.");
        console.log("You win! Paper beats rock.");
        return "human";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log ("Computer chooses \'scissors\'.");
        console.log("You lose! Scissors beat paper.");
        return "computer";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log ("Computer chooses \'rock\'.");
        console.log("You lose! Rock beats scissors.");
        return "computer";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log ("Computer chooses \'paper\.");
        console.log ("You win! Scissors beat rock.");
        return "human";
    } else {
        console.log ("Invalid input. Please try again.");
    };
};

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const winner = playRound(humanChoice, computerChoice);
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computer++;
        }
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game.");
    } else if (humanScore < computerScore) {
        console.log("You have lost the game.")
    }
}

playGame();


