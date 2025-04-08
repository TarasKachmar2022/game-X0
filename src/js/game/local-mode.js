import penImage from './../../images/svg/cursor/icon-pen.svg';

import { STATE } from './../components/state';
import { createGameMarkup } from '../components/create-game-markup';
import { updateScore, showScore } from './../components/score';
import { WINS } from '../components/win-config';
import { victoryAnimation } from '../components/victory-animation';
import { victory, draw, loss } from '../components/result';

const bodyEl = document.querySelector('body');
const fieldThumbEl = document.querySelector('.field__thumb');
const scoreEl = document.querySelector('.score');
const fieldEl = document.querySelector('.field');
const clickSound = document.getElementById('click__sound');

fieldEl.addEventListener('click', onClick);

// export const localState = {
//   scorePlayer1: 0,
//   scorePlayer2: 0,
//   draw: 0,
//   currentPlayer: '',
//   player: 'X',
//   // historyPlayer1: [],
//   // historyPlayer2: [],
// };

export function showGameMarkup() {
  const mainWrapEl = document.querySelector('.main__wrap');

  bodyEl.classList.add('cursor-pen');
  mainWrapEl.classList.add('main__wrap--active');
  scoreEl.classList.add('score--active');
  fieldEl.classList.add('field--active');

  const { markup, penMarkup } = createGameMarkup(penImage);

  fieldThumbEl.insertAdjacentHTML('beforebegin', penMarkup);
  fieldEl.innerHTML = markup;
  showScore();
}
// console.log(typeof wins);
// console.log(typeof historyx);

function onClick(e) {
  const { target } = e;

  // console.log(e.currentTarget);
  // console.log(target);

  if (target.textContent) {
    return;
  }

  target.textContent = STATE.symbol;
  const id = Number(target.dataset.id);

  if (STATE.symbol === 'X') {
    STATE.historyPlayer1.push(id);
  } else {
    STATE.historyPlayer2.push(id);
  }

  // console.log(history0);
  // console.log(historyx);

  STATE.symbol = STATE.symbol === 'X' ? '0' : 'X';

  // if (historyx.length + history0.length === 9) {
  //   reset();
  // }

  clickSound.play().catch(error => {
    console.error('Не вдалося відтворити звук:', error);
  });

  checkWins();
}

function reset() {
  // showGameMarkup();
  STATE.historyPlayer1 = [];
  STATE.historyPlayer2 = [];
  STATE.symbol = 'X';
}

export function checkWins() {
  const winnerEl = document.querySelector('.winner');

  let winnerPlayer1Idx = 0;
  let winnerPlayer2Idx = 0;

  if (STATE.historyPlayer1.length + STATE.historyPlayer2.length >= 5) {
    const isWinner1 = WINS.some(item =>
      item.every(id => STATE.historyPlayer1.includes(id))
    );

    const isWinner2 = WINS.some(item =>
      item.every(id => STATE.historyPlayer2.includes(id))
    );

    // console.log(isWinnerX);
    // console.log(isWinner0);

    if (isWinner1) {
      const firstPlayerName = STATE.firstPlayerName;
      // const scorePlayerFirst = STATE.user.local.scorePlayerFirst;

      winnerPlayer1Idx = WINS.findIndex(item =>
        item.every(id => STATE.historyPlayer1.includes(id))
      );

      victoryAnimation(winnerPlayer1Idx);
      fieldEl.removeEventListener('click', onClick);
      console.log(winnerPlayer1Idx);
      victory(firstPlayerName, 'firstPlayer', STATE);
      updateScore('firstPlayer', STATE);
      showScore();
      // console.log('win');
      // winnerEl.textContent = 'Winner PlayerX';
    } else if (isWinner2) {
      const secondPlayerName = STATE.secondPlayerName;

      winnerPlayer2Idx = WINS.findIndex(item =>
        item.every(id => STATE.historyPlayer2.includes(id))
      );
      victoryAnimation(winnerPlayer2Idx);
      fieldEl.removeEventListener('click', onClick);
      console.log(winnerPlayer2Idx);
      updateScore('secondPlayer', STATE);
      showScore();
      victory(secondPlayerName, 'secondPlayer', STATE);
      // winnerEl.textContent = 'Winner Player0';
    } else if (
      STATE.historyPlayer1.length + STATE.historyPlayer2.length ===
      9
    ) {
      // reset();
      updateScore('draw', STATE);
      showScore();
      draw(STATE);
    }
  }
}
