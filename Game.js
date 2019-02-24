alert('on github');
let userScore = 0;
let computerScore = 0;
const USERSCORE_SPAN = document.getElementById('user-score');
const COMPUTERSCORE_SPAN = document.getElementById('computer-score');
const SCOREBOARD_DIV = document.querySelector('.score-board');
const RESULT_P = document.querySelector('.result');
const ROCK_DIV = document.getElementById('r');
const PAPER_DIV = document.getElementById('p');
const SCISSORS_DIV = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  if (letter === 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  userScore++;
  USERSCORE_SPAN.innerHTML = userScore;
  COMPUTERSCORE_SPAN.innerHTML = computerScore;
  RESULT_P.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}, you win!`;
}

function lose(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  computerScore++;
  USERSCORE_SPAN.innerHTML = userScore;
  COMPUTERSCORE_SPAN.innerHTML = computerScore;
  RESULT_P.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)} ${smallCompWord}, computer wins!`;
}

function draw(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  RESULT_P.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} draws with ${convertToWord(computerChoice)} ${smallCompWord}, no one wins!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);

      break;

    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, computerChoice);

      break;

    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice, computerChoice);

  }
}

function main() {

  ROCK_DIV.addEventListener('click', function() {
    game('r');
  })

  PAPER_DIV.addEventListener('click', function() {
    game('p');
  })

  SCISSORS_DIV.addEventListener('click', function() {
    game('s');
  })

}

main();
