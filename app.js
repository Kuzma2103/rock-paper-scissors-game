// Select the DOM
const scoreBoard = document.querySelector(".score-board");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

let userScore = 0;
let computerScore = 0;


// Computer choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    // Get the random number
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Convert letter to words
function convertTwoWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

// Functions for win draw and lose
function win(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertTwoWord(userChoice)} ${smallUserWord} beats ${convertTwoWord(computerChoice)} ${smallCompWord} . You Win!`;
    // Add green glow when win
    document.getElementById(userChoice).classList.add('green-glow');
    // Remove the green glow
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 500);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result.innerHTML = `${convertTwoWord(userChoice)} ${smallUserWord} equal ${convertTwoWord(computerChoice)} ${smallCompWord} . It's a draw!`;
    // Add grey glow when win
    document.getElementById(userChoice).classList.add('grey-glow');
    // Remove the rey glow
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('grey-glow');
    }, 500);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertTwoWord(userChoice)} ${smallUserWord} loses to ${convertTwoWord(computerChoice)} ${smallCompWord} . You Lost!`;
    // Add red glow when win
    document.getElementById(userChoice).classList.add('red-glow');
    // Remove the red glow
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 500);
}

// User choice
function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        // User wins combinations
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        // User lose combinations
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        // User and Computer is equal
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    // Add event listeners
    rock.addEventListener('click', function () {
        game("r");
    });

    paper.addEventListener('click', function () {
        game("p");
    });

    scissors.addEventListener('click', function () {
        game("s");
    });

}

main();




