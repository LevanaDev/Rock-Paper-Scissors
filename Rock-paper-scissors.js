//Function for the computer to have a random choice 
function getComputerChoice(){
    // Array with the possible choices
    const choices = [ "Rock", "Paper", "Scissor" ];
    //Uses Math.floor and Math.random for get the random choice
    ComputerChoice = choices[ Math.floor( Math.random()  * choices.length ) ];
    return ComputerChoice;
}

//Function to plays a single round of Rock Paper Scissors
function singleRound(){
    let playerChoice = playerSelection();
    let computerChoice = getComputerChoice();
    let messageWin = `You Win! ${playerChoice} beats ${computerChoice}`;
    let messageLose = `You Lose! ${computerChoice} beats ${playerChoice}`;
    if(playerChoice !== computerChoice){
        computerChoice === "Rock" && playerChoice === "Paper"
        ? console.log(messageWin) : 
        computerChoice === "Rock" && playerChoice === "Scissor" 
        ? console.log(messageLose) :
        computerChoice === "Paper" && playerChoice === "Scissor"
        ? console.log(messageWin)  :
        computerChoice === "Paper" && playerChoice === "Rock"
        ? console.log(messageLose)  :
        computerChoice === "Scissor" && playerChoice === "Rock"
        ? console.log(messageWin)  :
        computerChoice === "Scissor" && playerChoice === "Paper"
        ? console.log(messageLose)  :
        console.log(`Tie! ${computerChoice} is the same ${playerChoice}`);
    } 
    else{
        console.log(`Tie! ${computerChoice} is the same ${playerChoice}`);
    }

  
} 

function playerSelection(){
    let playerChoice = prompt("Write Rock, Paper or Scissor");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissor"){
        return "Invalid choice"
    }  
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1);
    return playerChoice;
}



/*
const roundResult = [ {
         Win: `You Win ${playerSelection} beats ${computerSelection}.`,
         Lose:`You lose! ${computerSelection} beats ${playerSelection}.`, 
         Tie: `Tie! ${computerSelection} is same ${playerSelection}`} ];
*/