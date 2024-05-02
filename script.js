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
var humanScore = 0;
var computerScore = 0;

/* Step 5 */
function playRound(humanChoice, compChoice) {
 let alerMessage = "";
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

 return humanWon;

}

const humanSelection =  getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);