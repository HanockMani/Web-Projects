let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const messageBox = document.querySelector("#msg");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resetButton = document.querySelector("#reset-button");

const resetGame = () =>{
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    messageBox.innerText = "Make Your Move";
    messageBox.style.backgroundColor = "#4A628A";
    document.body.style.backgroundColor = "white";
};

const checkWin = () => {
    if(playerScore >=5){
        alert("You Win!");
        resetGame();
        
    }
    else if(computerScore >=5){
        alert("You Lost.");
        resetGame();
    }
};

const getComputerChoice = () =>{
    const choices = ["rock", "paper", "scissor"];
    const generatedIndex = Math.floor(Math.random()*3);
    return choices[generatedIndex];
};

const displayMessage = (playerPoint, playerChoice, computerChoice) => {
    if(playerPoint == true){
        playerScore++;
        playerScoreDisplay.innerText = playerScore;
        messageBox.innerText = `Player gets a Point! Players ${playerChoice} beats ${computerChoice}`;
        messageBox.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
        messageBox.innerText = `Computer gets a Point! Computers ${playerChoice} beats ${computerChoice}`;
        messageBox.style.backgroundColor = "red";
    }
};

const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();

    if(playerChoice === computerChoice){
        messageBox.innerText = "Game Tie! Play Again!!";
        messageBox.style.backgroundColor = "#4A628A";
    }
    else {
        let playerPoint = true;

        if(playerChoice === "rock"){
           playerPoint = computerChoice === "scissor" ? true : false;
        }
        else if (playerChoice === "paper"){
           playerPoint = computerChoice === "rock" ? true : false;
        }
        else{
           playerPoint = computerChoice === "paper" ? true : false;
        }

        displayMessage(playerPoint, playerChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute('id');
        playGame(playerChoice);
        checkWin();
    });    
});

resetButton.addEventListener('click', () =>{
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    messageBox.innerText = "Make Your Move";
    messageBox.style.backgroundColor = "#4A628A";
});