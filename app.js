/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if they lost
- Let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter an number between ${min} and ${max}`, 'red');
  }

  // Check if it's winning number
  if (guess === winningNum) {
    // Game Over - won

    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game Over - lost

      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

    } else {
      //  Game Continues - answer wrong

      // Change border color to red when you lose
      guessInput.style.borderColor = 'red';

      // Clear input feature
      guessInput.value = '';

      // Tell user this is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});


// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;

  // Change border color to green when you win
  guessInput.style.borderColor = color;

  // Set text color
  message.style.color = color;


  // Set message when user wins
  setMessage(msg);

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}


// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

