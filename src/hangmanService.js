import words from './words.js';

export default class {
  targetWord = words[Math.floor(Math.random() * words.length)];
  attempts = [];

  constructor() {
    // if you want to cheat..
    // console.log(this.targetWord);
  }

  attempt(attempt) {
    if ([...'abcdefghijklmnopqrstuvwxyz'].includes(attempt)) {
      if (!this.isGameOver() && !this.isGameWon()) {
        !this.attempts.includes(attempt) && this.attempts.push(attempt);
      }
    } else {
      throw new Error("Attempt failed.");
    }
  }

  getBadGuessCount() {
    return this.attempts.filter(attempt => !this.targetWord.includes(attempt)).length;
  }

  isGameOver() {
    return this.getBadGuessCount() === 10;
  }

  isGameWon() {
    return [...this.targetWord].filter(value => !this.attempts.includes(value)).length === 0;
  }

  getTargetWordMasked() {
    return [...this.targetWord].map(letter => this.attempts.includes(letter) ? letter : '_');
  }
}
