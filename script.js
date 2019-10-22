//Now the actual game

let computerPlay = function() {
  let options = ["rock", "paper", "scissors"];
  let choice = Math.floor(3 * Math.random());
  return options[choice]
}


let decideWinner = function(user, comp) {
  if (user == 'rock') {
    switch (comp) {
      case 'scissors':
        return (0);
        break;
      case 'paper':
        return (1);
        break;
      default:
        return (-1);
        break;
    }
  }
  if (user == 'paper') {
    switch (comp) {
      case 'scissors':
        return (1);
        break;
      case 'rock':
        return (0);
        break;
      default:
        return (-1);
        break;
    }
  }
  if (user == 'scissors') {
    switch (comp) {
      case 'scissors':
        return (-1);
        break;
      case 'paper':
        return (0);
        break;
      default:
        return (1);
        break;
    }
  }
}


let game = function(userChoice, gameOver) {
  var humanScore = document.querySelector('#user');
  var computerScore = document.querySelector('#comp');
  let userScore = parseInt(humanScore.textContent, 10);
  let compScore = parseInt(computerScore.textContent, 10);
  var userChoiceImg = document.querySelector('#userChoiceImg');
  let compChoiceImg = document.querySelector('#compChoiceImg');
  let compChoice = computerPlay();
  var mainText = document.querySelector('#game');
  let resetBtn = document.querySelector('.resetBtn');

  userChoiceImg.src = "images/" + userChoice.value + ".png";
  compChoiceImg.src = "images/" + compChoice + ".png";

  switch (decideWinner(userChoice.value, compChoice)) {
    case 0:
      userScore++;
      humanScore.textContent = userScore;
      break;
    case 1:
      compScore++;
      computerScore.textContent = compScore;
      break;
    default:
      break;
  }
  if (userScore == 3) {
    //console.log("Eli wins!");
    mainText.textContent = "Player wins!"
    gameOver = true;
    resetBtn.classList.toggle('hide');
  } else if (compScore == 3) {
    //console.log("Computer wins!");
    mainText.textContent = "Computer wins!"
    gameOver = true;
    resetBtn.classList.toggle('hide');
  }
  console.log(gameOver);
  return (gameOver);
}

let main = function() {
  let gameOver = false;
  var humanScore = document.querySelector('#user');
  var computerScore = document.querySelector('#comp');
  var userChoiceImg = document.querySelector('#userChoiceImg');
  let compChoiceImg = document.querySelector('#compChoiceImg');
  var mainText = document.querySelector('#game');
  let resetBtn = document.querySelector('.resetBtn');

  const buttons = document.querySelectorAll('.btnDiv button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (!gameOver) {
        gameOver = game(button, gameOver);
      }
    });
  });

  resetBtn.addEventListener('click', (e) => {
    resetBtn.classList.toggle('hide');
    humanScore.textContent = '0';
    computerScore.textContent = '0';
    userChoiceImg.src = '';
    compChoiceImg.src = '';
    mainText.textContent = 'Rock Paper Scissors!';
    gameOver = false;
  });
}

main();
