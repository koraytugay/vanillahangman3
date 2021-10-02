export default function(hangmanGame) {
  const images = `resources/images/`;
  const hangmanImage = document.querySelector("#hangman-image");

  Object.assign(hangmanImage, {
    src: hangmanGame.isGameWon() ? `${images}youwin.png` : `${images}${hangmanGame.getBadGuessCount()}.png`
  });
}
