console.log("Hello World");
getComputerChoice();
getHumanChoice();

function getComputerChoice() {
    const compChoiceInt = Math.floor(Math.random() * 3);
    console.log(compChoiceInt);
    
    if (compChoiceInt == 0) {
        var compChoice = "Rock"
        console.log(compChoice);
        return compChoice;
    } else if (compChoiceInt == 1) {
        var compChoice = "Rock"
        console.log(compChoice);
        return compChoice;
    } else if (compChoiceInt == 2) {
        var compChoice = "Rock"
        console.log(compChoice);
        return compChoice;
    } else {
        console.log("Error");
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    console.log(humanChoice);
}