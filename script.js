// computer actions

function computerPlay() {
   const choices = ['rock', 'paper', 'scissors'];
   let choice = choices[Math.floor(Math.random() * choices.length)];
   return choice;
}

const input = document.querySelector('.choiceInput');
const para = document.querySelector('p');
const pick = document.querySelector('.submit');

pick.addEventListener('click', () => {
   let x = document.querySelector('.choiceInput').value.toLowerCase();
});

// Determining who is the winner

function battle(playerSelection, computerSelection) {
   // phrases
   let winPhrase = `You won! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
   } beats ${
      computerSelection[0].toUpperCase() +
      computerSelection.slice(1).toLowerCase()
   }!`;

   let losePhrase = `You lost! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
   } loses to ${
      computerSelection[0].toUpperCase() +
      computerSelection.slice(1).toLowerCase()
   }!`;

   // switch case
   switch ((playerSelection, computerSelection)) {
      case ('rock', 'paper'):
         para.textContent = winPhrase;
         break;
      case ('rock', 'scissors'):
         para.textContent = losePhrase;
         break;
      case ('paper', 'scissors'):
         para.textContent = winPhrase;
         break;
      case ('paper', 'rock'):
         para.textContent = losePhrase;
         break;
      case ('scissors', 'paper'):
         para.textContent = winPhrase;
         break;
      case ('scissors', 'rock'):
         para.textContent = losePhrase;
         break;
   }
}
