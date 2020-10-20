const roll = document.getElementById("roll");
const start = document.getElementById("start");
const hold = document.getElementById("hold");
const image = document.getElementById("image");
let playerOneWrapper = document.getElementById("playerOneWrapper");
let playerTwoWrapper = document.getElementById("playerTwoWrapper");

let playerOne = document.getElementById("playerOne");
let playerOneRoll = document.getElementById("rollOne");
let scoreOne = document.getElementById("scoreOne");

let playerTwo = document.getElementById("playerTwo");
let playerTwoRoll = document.getElementById("rollTwo");
let scoreTwo = document.getElementById("scoreTwo");

let playerScoreOne = 0;
let playerScoreTwo = 0;
let turnCounter = 0;

start.addEventListener("click", () => {

    alert("Welcome to Gimme 20 where the first player to reach 20 wins!");
    alert("Each player can roll the dice as many times as they like but roll a 1 and the score goes back to zero!");
    alert("So you may want to hold that score when you're feeling like a 1 is around the corner.");
    alert("Ready? Let's go!");

    turnCounter = Math.floor(Math.random() * 2) + 1;
    start.style.visibility = "hidden";
    roll.style.visibilty = "visible";
    hold.style.visibility = "visible";

    if (turnCounter == 1) {
        alert("Player One goes first!");
        playerOneWrapper.style.backgroundColor = "white";
        playerOneWrapper.style.color = "rgba(44, 54, 54, 0.836)";
        playerOneTurn();
        playerOne.textContent = "Player One's turn";
    }
    else {
        alert("Player Two goes first!");
        playerTwoWrapper.style.backgroundColor = "white";
        playerTwoWrapper.style.color = "rgba(44, 54, 54, 0.836)";
        playerTwoTurn();
        playerTwo.textContent = "Player Two's turn";
    }
})


roll.addEventListener("click", () => {
    hold.disabled = false;
    if (turnCounter % 2 == 1){
        playerOneTurn();
    } else {
        playerTwoTurn();
    }
})


hold.addEventListener("click", () => {
    if (turnCounter % 2 == 1) {
        scoreOne.textContent = parseInt(scoreOne.textContent) + playerScoreOne;
        playerScoreOne = 0;
        rollOne.textContent = 0;

        if (parseInt(scoreOne.textContent) >= 20){
            alert("Oh, nice! You hit 20! Player One wins!");
            gameIsWon();
        }

        playerOne.textContent = "Player One";
        playerTwo.textContent = "Player Two's turn";

        playerOneWrapper.style.backgroundColor = "rgba(67, 61, 80, 0.808)";
        playerOneWrapper.style.color = "rgba(255, 255, 255, 0.61)";

        playerTwoWrapper.style.backgroundColor = "white";
        playerTwoWrapper.style.color = "rgba(44, 54, 54, 0.836)";

        hold.disabled = true;
    } else {
        scoreTwo.textContent = parseInt(scoreTwo.textContent) + playerScoreTwo;
        playerScoreTwo = 0;
        rollTwo.textContent = 0;

        if (parseInt(scoreTwo.textContent) >= 20){
            alert("Oh, nice! You hit 20! Player Two wins!");
            gameIsWon();
        }

        playerOne.textContent = "Player One's turn";
        playerTwo.textContent = "Player Two";

        playerOneWrapper.style.backgroundColor = "white";
        playerOneWrapper.style.color = "rgba(44, 54, 54, 0.836)";

        playerTwoWrapper.style.backgroundColor = "rgba(67, 61, 80, 0.808)";
        playerTwoWrapper.style.color = "rgba(255, 255, 255, 0.61)";

        hold.disabled = true;
    }
    turnCounter++;
})


const playerOneTurn = () => {
    playerTwo.textContent = "Player Two";
    playerOne.textContent = "Player One's turn";

    playerOneWrapper.style.backgroundColor = "white";
    playerOneWrapper.style.color = "rgba(44, 54, 54, 0.836)";
    
    let dice = Math.floor(Math.random() * 6) + 1;
    rollOne.textContent = dice;
    image.src = "./img/dice" + dice + ".png";

    if (dice !== 1) {
        playerScoreOne += dice;
        rollOne.textContent = playerScoreOne;

    } else {
        alert(`Sorry, Player One, you rolled a 1 and your score goes back to 0. Turn over...`);

        playerOneWrapper.style.backgroundColor = "rgba(67, 61, 80, 0.808)";
        playerOneWrapper.style.color = "rgba(255, 255, 255, 0.61)";

        playerTwoWrapper.style.backgroundColor = "white";
        playerTwoWrapper.style.color = "rgba(44, 54, 54, 0.836)";

        rollOne.textContent = 0;
        playerTwo.textContent = "Player Two's turn";
        playerOne.textContent = "Player One";
        playerScoreOne = 0;
        scoreOne.textContent = 0;
        turnCounter++;
    }
}

const playerTwoTurn = () => {
    playerOne.textContent = "Player One";
    playerTwo.textContent = "Player Two's turn";

    playerTwoWrapper.style.backgroundColor = "white";
    playerTwoWrapper.style.color = "rgba(44, 54, 54, 0.836)";

    let dice = Math.floor(Math.random() * 6) + 1;
    rollTwo.textContent = dice;
    image.src = "./img/dice" + dice + ".png";

    if (dice !== 1) {
        playerScoreTwo += dice;
        rollTwo.textContent = playerScoreTwo;
    } else {
        alert(`Sorry, Player Two, you rolled a 1 and your score goes back to 0. Turn over...`);

        playerOneWrapper.style.backgroundColor = "white";
        playerOneWrapper.style.color = "rgba(44, 54, 54, 0.836)";

        playerTwoWrapper.style.backgroundColor = "rgba(67, 61, 80, 0.808)";
        playerTwoWrapper.style.color = "rgba(255, 255, 255, 0.61)";

        rollTwo.textContent = 0;
        playerOne.textContent = "Player One's turn";
        playerTwo.textContent = "Player Two";
        playerScoreTwo = 0;
        scoreTwo.textContent = 0;
        turnCounter++
    }
}

const gameIsWon = () => {
    playerOne = 0;
    playerOneRoll = 0;
    scoreOne = 0;
    scoreOne.textContent = 0;

    playerTwo = 0;
    playerTwoRoll = 0;
    scoreTwo = 0;
    scoreTwo.textContent = 0;

    playerScoreOne = 0;
    playerScoreTwo = 0;
    turnCounter = 0;

    roll.style.visibility = "hidden";
    hold.style.visibility = "hidden";
    start.style.visibility = "visible";

    playerOneWrapper.style.backgroundColor = "rgba(67, 61, 80, 0.808)";
    playerOneWrapper.style.color = "rgba(255, 255, 255, 0.61)";

    playerTwoWrapper.style.backgroundColor = "rgba(67, 61, 80, 0.808)";
    playerTwoWrapper.style.color = "rgba(255, 255, 255, 0.61)";

    playerOne.textContent = "Player One";
    playerTwo.textContent = "Player Two";

}