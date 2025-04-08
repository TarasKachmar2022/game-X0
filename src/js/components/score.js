import { STATE } from './../components/state';

const scorePlayerName1El = document.querySelector('.score__name1');
const scorePlayerName2El = document.querySelector('.score__name2');
const scorePlayer1El = document.querySelector('.score__player1');
const scorePlayer2El = document.querySelector('.score__player2');
const scoreDrawEl = document.querySelector('.score__draw');

export function showScore() {
  scorePlayerName1El.textContent = STATE.firstPlayerName;
  scorePlayer1El.textContent = STATE.scorePlayerFirst;
  scoreDrawEl.textContent = STATE.scoreDraw;
  scorePlayerName2El.textContent = STATE.secondPlayerName;
  scorePlayer2El.textContent = STATE.scorePlayerSecond;
}

export function updateScore(update, STATE) {
  if (update === 'firstPlayer') {
    STATE.scorePlayerFirst += 1;
  } else if (update === 'secondPlayer') {
    STATE.scorePlayerSecond += 1;
  } else if (update === 'draw') {
    STATE.scoreDraw += 1;
  }
}
