const buttonRock =  document.querySelector( "#btnRock" );
const buttonPaper = document.querySelector( "#btnPaper" );
const buttonScissors = document.querySelector( "#btnScissors");
const showSelection = document.querySelector("#showSelection");
const showComputer = document.querySelector("#computerSelection");
const showResult = document.querySelector( "#showResult" );
buttonRock.addEventListener( "click", rockSelected );
buttonPaper.addEventListener( "click", paperSelected );
buttonScissors.addEventListener( "click", scissorsSelected );

var winsCounter = 0;
var losesCounter = 0;
var drawsCounter = 0;

function showCounters(){
    const spanWins =  document.querySelector( "#wins" );
    const spanLoses =  document.querySelector( "#loses" );
    const spanDraws =  document.querySelector( "#draws" );
    spanWins.textContent = winsCounter;
    spanLoses.textContent = losesCounter;
    spanDraws.textContent = drawsCounter;
}

function checkButton(){
    alert("You press a button");
}

function rockSelected(){    
    let choice = "Rock";
    playerSelectionByButton(choice);
}

function paperSelected(){    
    let choice = "Paper";
    playerSelectionByButton(choice);
}

function scissorsSelected(){    
    let choice = "Scissors";
    playerSelectionByButton(choice);
}
//Function for the computer to have a random choice 
function getComputerChoice(){
    // Array with the possible choices
    const choices = [ "Rock", "Paper", "Scissors" ];
    //Uses Math.floor and Math.random for get the random choice
    ComputerChoice = choices[ Math.floor( Math.random()  * choices.length ) ];
    showComputer.textContent = `The computer selected ${ComputerChoice}`;
    return ComputerChoice;
}
// Function to ask the user for a choice
function playerSelection(){
    let playerChoice = prompt("Write Rock, Paper or Scissors");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        return "Invalid choice";
    }  
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1);
    return playerChoice;
}

function playerSelectionByButton( choice ){
    
    if(choice === "Rock"){
        showSelection.textContent = "You select Rock.";
    }
    else if(choice === "Paper"){
        showSelection.textContent = "You select Paper.";
    }
    else if(choice === "Scissors"){
        showSelection.textContent = "You select Scissors.";
    }
    else{
        showSelection.textContent = "";
    }
    playRound( choice )
}

//Function to plays a single round of Rock Paper Scissors
function playRound( playerChoice ){
    //let playerChoice = playerSelectionByButton();
    //let playerChoice = playerSelection();
    let computerChoice = getComputerChoice();
    let messageWin = `You Win! ${playerChoice} beats ${computerChoice}`;
    let messageLose = `You Lose! ${computerChoice} beats ${playerChoice}`;
    //Nested win conditions
    if(playerChoice !== computerChoice){
        if(computerChoice === "Rock" && playerChoice === "Paper"){
            winsCounter += 1;
            showCounters();
            return showResult.textContent = messageWin;
        }
        if(computerChoice === "Rock" && playerChoice === "Scissors"){
            losesCounter +=1;
            showCounters();
            return showResult.textContent = messageLose;
        } 
        if(computerChoice === "Paper" && playerChoice === "Scissors"){
            winsCounter += 1;
            showCounters();
            return showResult.textContent = messageWin;
        }
        if(computerChoice === "Paper" && playerChoice === "Rock"){
            losesCounter += 1;
            showCounters();
            return showResult.textContent = messageLose;
        }
        if(computerChoice === "Scissors" && playerChoice === "Rock"){
            winsCounter += 1;
            showCounters();
            return showResult.textContent = messageWin;
        }
        if(computerChoice === "Scissors" && playerChoice === "Paper"){
            losesCounter += 1;
            showCounters();
            return showResult.textContent = messageLose;
        }  
    } 
    else{
        drawsCounter += 1;
        showCounters(); 
        return showResult.textContent = `Tie! ${computerChoice} is the same ${playerChoice}`;
    }  
} 

//Function to play a game of 5 rounds
function game()
{
    //Counter for the loop 
    let i = 0;
    let score = 0;
    let roundResult;
    while(i < 5){
        roundResult = playRound();
        alert(roundResult);
        
        if(roundResult.includes("You Win!")){
            score += 1;
        }
        i++;
        alert(`Your score is ${score}`);
    }
    score >= 3 ? alert(`You win the game! Your score was ${score}.`) : alert(`You lose the game! Your score was ${score}.`)
}
