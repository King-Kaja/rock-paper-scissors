let score = 0;
let comScore = 0;

function getComputerChoice() {

  let rand_num = Math.floor(Math.random() * 3)
  let choice;

  if(rand_num == 0){
    choice = "Rock";
  }
  else if (rand_num == 1) {
    choice = "Scissors"
  }
  else {
    choice = "Paper"
  }

  return choice;
}

function result(playerSelection, computerSelection) {

  let result = "placeholder text"
  const scoreElem = document.querySelector('.Score');


  if(playerSelection == computerSelection){
    result = "It's a Draw!"
  }
  else if ((playerSelection == "Rock" && computerSelection == "Scissors")
          || (playerSelection == "Paper" && computerSelection == "Rock")
          || (playerSelection == "Scissors" && computerSelection == "Paper")
        ){
    result = `You Win! ${playerSelection} beats ${computerSelection}`
    score++;
    scoreElem.textContent = `Your Score: ${score} Computer Score:  ${comScore}`;
  }
  else{
    result = `You Lose! ${computerSelection} beats ${playerSelection}`
    comScore++;
    scoreElem.textContent = `Your Score: ${score} Computer Score:  ${comScore}`;
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase()
  + playerSelection.toLowerCase().slice(1);

  return result (playerSelection, computerSelection);
}

function game(choice){
  const resElem = document.querySelector('.Result');
  resElem.textContent = playRound(choice,getComputerChoice());
  const winElem = document.querySelector('.Winner');
  if (score == 5){
    winElem.textContent = "Congrats you win the game!"
  }
  else if (comScore == 5){
    winElem.textContent = "Game Over! Computer wins!"
  }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    game(button.name);
  });
});
