// let's start by storing our HTML in variables
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result-display");
//here we are using the querySelectorALL because we DON'T plan to add other buttons!!!
const possibleChoices = document.querySelectorAll("button");
//LET's store user choice ( :'DDD) so the scope is GLOBAL
let userChoice;
let computerChoice;
let result;

//Here We set the event listener
possibleChoices.forEach((possibleChoice) =>
    //with this function we can define that when we click a button we are changing the value of UserChoice
    possibleChoice.addEventListener("click", (event) => {
        userChoice = event.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        //DON'T FORGET TO CALL THE FUNCTION LIKE I DID
        genComputerChoice();
        getResult();
    })
);
//let's get itttt! Part 1 Works!
//Now PART 2 : Computer Choices.

function genComputerChoice() {
    //here we are generating a number between 0 and 2 that represent a choice
    const randomNumber = Math.floor(Math.random() * 3);
    //then we actually have to assign the number to a choice
    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    if (randomNumber === 1) {
        computerChoice = "paper";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}
//of course i could have used the switch lol
//We finally got to this point, we only have to declare a winner!
//Part 3 : THE RESULT
//Maybe the easiest part, For sure the most annoying, we have to check every pairing with an if statement.

function getResult() {
    if (computerChoice === userChoice) {
        result = "Issa draw";
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You Lost :(";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You Lost :(";
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You Lost :(";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "CUT THEM ASSES IN 2, YOU WON";
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "SMASHED IT LIKE A ROLLING STONE BOIII, YOU WON";
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "WRAPPED IT, YOU WON WITH THAT PAPER!";
    }
    resultDisplay.innerHTML = result;
}