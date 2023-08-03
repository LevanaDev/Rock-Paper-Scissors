//Function for the computer to have a random choice 
function getComputerChoice(){
    // Array with the possible choices
    const choices = [ "Rock", "Paper", "Scissor" ];
    //Uses Math.floor and Math.random for get the random choice
    ComputerChoice = choices[ Math.floor( Math.random()  * choices.length ) ];
    return ComputerChoice;
}
// Function to ask the user for a choice
function playerSelection(){
    let playerChoice = prompt("Write Rock, Paper or Scissor");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissor"){
        return "Invalid choice"
    }  
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1);
    return playerChoice;
}
//Function to plays a single round of Rock Paper Scissors
function playRound(){
    let playerChoice = playerSelection();
    let computerChoice = getComputerChoice();
    let messageWin = `You Win! ${playerChoice} beats ${computerChoice}`;
    let messageLose = `You Lose! ${computerChoice} beats ${playerChoice}`;
    //Nested win conditions
    if(playerChoice !== computerChoice){
        if(computerChoice === "Rock" && playerChoice === "Paper"){
            return messageWin;
        }
        if(computerChoice === "Rock" && playerChoice === "Scissor"){
            return messageLose;
        } 
        if(computerChoice === "Paper" && playerChoice === "Scissor"){
            return messageWin;
        }
        if(computerChoice === "Paper" && playerChoice === "Rock"){
            return messageLose;
        }
        if(computerChoice === "Scissor" && playerChoice === "Rock"){
            return messageWin;
        }
        if(computerChoice === "Scissor" && playerChoice === "Paper"){
            return messageLose;
        }  
    } 
    else{
        return `Tie! ${computerChoice} is the same ${playerChoice}`;
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
