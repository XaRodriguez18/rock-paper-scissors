console.log("Hello World");
getComputerChoice();

function getComputerChoice() {
    const compChoiceInt = Math.floor(Math.random() * 3);
    console.log(compChoiceInt);
    
    if (compChoiceInt == 0) {
        return "Rock";
    } else if (compChoiceInt == 1) {
        return "Paper";
    } else if (compChoiceInt == 2) {
        return "Scissor";
    } else {
        console.log("Error");
    }
    
}