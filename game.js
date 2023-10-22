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

  if(playerSelection == computerSelection){
    result = "It's a Draw!"
  }
  else if ((playerSelection == "Rock" && computerSelection == "Scissors")
          || (playerSelection == "Paper" && computerSelection == "Rock")
          || (playerSelection == "Scissors" && computerSelection == "Paper")
        ){
    result = `You Win! ${playerSelection} beats ${computerSelection}`
  }
  else{
    result = `You Lose! ${computerSelection} beats ${playerSelection}`
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase()
  + playerSelection.toLowerCase().slice(1);

  return result (playerSelection, computerSelection);
}

function game(){
  console.log(playRound(prompt(),getComputerChoice()));
  console.log(playRound(prompt(),getComputerChoice()));
  console.log(playRound(prompt(),getComputerChoice()));
  console.log(playRound(prompt(),getComputerChoice()));
  console.log(playRound(prompt(),getComputerChoice()));
}
