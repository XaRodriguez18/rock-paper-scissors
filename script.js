/* Step 1 */
console.log("Hello World");

/* Step 2 */
function getComputerChoice() {
    const compChoiceInt = Math.floor(Math.random() * 3);
    
    if (compChoiceInt == 0) {
        var compChoice = "rock"
        return compChoice;
    } else if (compChoiceInt == 1) {
        var compChoice = "paper"
        return compChoice;
    } else if (compChoiceInt == 2) {
        var compChoice = "scissors"
        return compChoice;
    } else {
        console.log("Error");
    }
}

/* Step 3 */
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
        return humanChoice;
    } else {
        alert("Please choose a correct option.")
    }
}

/* Step 4 */


/* Step 5 */






function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    let alertMessage = "";
    var finalMessage = "";

    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        const humanSelection =  getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        alert(alertMessage);
        roundsPlayed += 1
    }

    var finalMessage = getFinalMessage(humanScore, computerScore);
    alert(finalMessage);

    

    

    function playRound(humanChoice, compChoice) {
        let humanWon = undefined;
       
        if (humanChoice === compChoice) {
           humanWon = undefined;
        } else if (
           (humanChoice === "rock" && compChoice === "paper") ||
           (humanChoice === "paper" && compChoice === "scissors") ||
           (humanChoice === "scissors" && compChoice === "rock")
        ) {
           humanWon = false;
        } else if (
           (humanChoice === "rock" && compChoice === "scissors") ||
           (humanChoice === "paper" && compChoice === "rock") ||
           (humanChoice === "scissors" && compChoice === "paper")
        ) {
           humanWon = true;
        }
       
        
       
        if (humanWon === undefined) {
           alertMessage = `Draw \n\nScore:\nYou: ${humanScore} | Computer ${computerScore}`;
        } else if (humanWon === true) {
           humanScore += 1;
           alertMessage = `You win! ${humanChoice} beats ${compChoice}. \n\nScore:\nYou: ${humanScore} | Computer ${computerScore}`;
        } else if (humanWon === false) {
           computerScore += 1;
           alertMessage = `You lose! ${compChoice} beats ${humanChoice} \n\nScore:\nYou: ${humanScore} | Computer ${computerScore}`;
        }
       
    }

    function getFinalMessage() {
        if (humanScore > computerScore) {
            finalMessage = `Victory. \n\nScore:\nYou: ${humanScore} | Computer ${computerScore}`;
        } else if (humanScore < computerScore) {
            finalMessage = `Defeat. \n\nScore:\nYou: ${humanScore} | Computer ${computerScore}`;
        } else if (humanScore === computerScore) {
            finalMessage = `Draw. \n\nScore:\nYou: ${humanScore} | Computer ${computerScore}`;
        }
        return finalMessage;
    }
}

while (true) {
    playGame();

    let restart = confirm('Press "OK" to restart.');
    if (restart === false) {
        break;
    }
}