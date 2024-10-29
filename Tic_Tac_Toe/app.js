let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newGameButton = document.querySelector("#new-game-button");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");

let turnO = true; 

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
}); 

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value !="" && pos2Value !="" && pos3Value !=""){
            if(pos1Value === pos2Value &&pos2Value === pos3Value && pos1Value === pos3Value ){
                
                showWinner(pos1Value);
            }
        }
    }
};

const showWinner = (winner) => {
    message.innerText = `Player ${winner} has WON!`;
    messageContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    messageContainer.classList.add("hide");
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);   