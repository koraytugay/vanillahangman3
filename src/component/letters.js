export default function(hangmanGame, redrawUi) {
  const lettersContainer = document.querySelector('#letters-container');
  lettersContainer.innerHTML = '';

  for (let letter of [...'abcdefghijklmnopqrstuvwxyz']) {
    const button = document.createElement('button');
    button.classList.add('guess-letter');
    Object.assign(button, {
      textContent: letter,
      disabled: hangmanGame.isGameOver() || hangmanGame.isGameWon() || hangmanGame.attempts.includes(letter)
    });
    button.addEventListener('click', () => {
      hangmanGame.attempt(letter);
      redrawUi();
    });
    lettersContainer.appendChild(button);
  }
}
