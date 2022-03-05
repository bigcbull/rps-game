
const gameMoves = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
};

const checkArray = ["Rock", "Paper", "Scissors"];

const rockBtn = document.getElementById("playrock");
const paperBtn = document.getElementById("playpaper");
const scissorsBtn = document.getElementById("playscissors");

const myscoreP = document.getElementById("myscore");
const computerscoreP = document.getElementById("computerscore");

const scoreHeader = document.getElementById("score");
const resultHeader = document.getElementById("result");


let myScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomNum = Math.floor( Math.random()*3 + 1 );
    return gameMoves[randomNum];
}

function playRound(playerSelection) {

    computerSelection = computerPlay();

    if (myScore < 5 && computerScore < 5) {
        if (computerSelection === playerSelection) {
            scoreHeader.textContent = `DRAW! 😬`;
        } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
            computerScore += 1;
            computerscoreP.textContent = computerScore;
            scoreHeader.textContent = `You lost this round.. 😰`;
        } else if (computerSelection === "Rock" && playerSelection === "Paper") {
            myScore += 1;
            myscoreP.textContent = myScore;
            scoreHeader.textContent = `You won this round! 😎`;
        } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
            myScore += 1;
            myscoreP.textContent = myScore;
            scoreHeader.textContent = `You won this round! 😎`;
        } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
            computerScore += 1;
            computerscoreP.textContent = computerScore;
            scoreHeader.textContent = `You lost this round.. 😰`;
        } else if (computerSelection === "Paper" && playerSelection === "Rock") {
            computerScore += 1;
            computerscoreP.textContent = computerScore;
            scoreHeader.textContent = `You lost this round.. 😰`;
        } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
            myScore += 1;
            myscoreP.textContent = myScore;
            scoreHeader.textContent = `You won this round! 😎`;
        }
    } if (myScore === 5) {
        scoreHeader.textContent = ``;
        resultHeader.classList.add("won");
        resultHeader.textContent = `You scored ${myScore} and won the game 😄`;
    } if (computerScore === 5) {
        scoreHeader.textContent = ``;
        resultHeader.classList.add("lost");
        resultHeader.textContent = `You lost the game 😔`;
    }

}


rockBtn.addEventListener("click", function() {

    playRound(rockBtn.value);
    
});

paperBtn.addEventListener("click", function() {

    playRound(paperBtn.value);
    
});

scissorsBtn.addEventListener("click", function() {

    playRound(scissorsBtn.value);
    
});