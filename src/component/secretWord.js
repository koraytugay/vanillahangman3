export default function(hangmanGame) {
  const secretWordContainer = document.querySelector('#secret-word-container');
  secretWordContainer.innerHTML = '';

  for (const letter of hangmanGame.isGameOver() ? hangmanGame.targetWord : hangmanGame.getTargetWordMasked()) {
    const targetLetterSpan = document.createElement('span');
    targetLetterSpan.innerText = letter;
    secretWordContainer.appendChild(targetLetterSpan);
  }
}
