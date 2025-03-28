import { STATE } from './../components/state';
import { localState } from './../game/local-mode';

const scorePlayerName1El = document.querySelector('.score__name1');
const scorePlayerName2El = document.querySelector('.score__name2');
const scorePlayer1El = document.querySelector('.score__player1');
const scorePlayer2El = document.querySelector('.score__player2');
const scoreDrawEl = document.querySelector('.score__draw');

export function score() {
  scorePlayerName1El.textContent = STATE.user.local.firstCurrentPlayer;
  scorePlayer1El.textContent = localState.scorePlayer1;
  scoreDrawEl.textContent = localState.draw;
  scorePlayerName2El.textContent = STATE.user.local.secondCurrentPlayer;
  scorePlayer2El.textContent = localState.scorePlayer2;
}
