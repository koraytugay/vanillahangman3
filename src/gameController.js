import HangmanGame from './hangmanService.js'
import hangmanImage from './component/hangmanImage.js';
import secretWord from './component/secretWord.js';
import letters from './component/letters.js'

document.querySelector('#new-game-button').addEventListener('click', () => {
  hangmanGame = new HangmanGame();
  redrawUi();
});

document.addEventListener('keydown', ({key}) => {
  try {
    hangmanGame.attempt(key);
    redrawUi();
  }
  catch (ignored) {
  }
});

function redrawUi() {
  secretWord(hangmanGame);
  hangmanImage(hangmanGame);
  letters(hangmanGame, redrawUi);
}

let hangmanGame = new HangmanGame();
redrawUi();
