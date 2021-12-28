const getUserChoice = userInput => {
    userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
          return userInput;
       } else {
          console.log ('Error');
        }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return '!!!BANG!!! User WINS!!!';
  }

  if (userChoice === computerChoice) {
      return 'Tie game!';
  }

  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'You Won!';
    }
  }

  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'You Won!';
    }
  }

  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You Won!';
    }
  }

};

const playGame = () => {
  const userChoice = getUserChoice ('bomb');
  const computerChoice = getComputerChoice ();

  console.log (determineWinner(userChoice, computerChoice));

}

playGame();