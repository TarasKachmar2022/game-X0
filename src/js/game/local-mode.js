import penImage from './../../images/svg/cursor/icon-pen.svg';

import { createGameMarkup } from '../components/create-game-markup';
import { WINS } from '../components/win-config';
import { victoryAnimation } from '../components/victory-animation';
import { victory, draw, loss } from '../components/result';

const bodyEl = document.querySelector('body');
const fieldThumbEl = document.querySelector('.field__thumb');
const scoreEl = document.querySelector('.score');
const fieldEl = document.querySelector('.field');
const clickSound = document.getElementById('click__sound');

fieldEl.addEventListener('click', onClick);

const localState = {
  scorePlayer1: 0,
  scorePlayer2: 0,
  playerName1: '',
  playerName2: '',
  currentPlayer: '',
  player: 'X',
  historyx: [],
  history0: [],
};

export function showGameMarkup() {
  const mainWrapEl = document.querySelector('.main__wrap');

  bodyEl.classList.add('cursor-pen');
  mainWrapEl.classList.add('main__wrap--active');
  scoreEl.classList.add('score--active');
  fieldEl.classList.add('field--active');

  const { markup, penMarkup } = createGameMarkup(penImage);

  fieldThumbEl.insertAdjacentHTML('beforebegin', penMarkup);
  fieldEl.innerHTML = markup;
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

  target.textContent = localState.player;
  const id = Number(target.dataset.id);

  if (localState.player === 'X') {
    localState.historyx.push(id);
  } else {
    localState.history0.push(id);
  }

  // console.log(history0);
  // console.log(historyx);

  localState.player = localState.player === 'X' ? '0' : 'X';

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
  localState.historyx = [];
  localState.history0 = [];
  player = 'X';
}

export function checkWins() {
  const winnerEl = document.querySelector('.winner');

  let winnerXIdx = 0;
  let winner0Idx = 0;

  if (localState.historyx.length + localState.history0.length >= 5) {
    const isWinnerX = WINS.some(item =>
      item.every(id => localState.historyx.includes(id))
    );

    const isWinner0 = WINS.some(item =>
      item.every(id => localState.history0.includes(id))
    );

    // console.log(isWinnerX);
    // console.log(isWinner0);
    const playerX = 'Taras';
    const player0 = 'Oksana';

    if (isWinnerX) {
      winnerXIdx = WINS.findIndex(item =>
        item.every(id => localState.historyx.includes(id))
      );

      victoryAnimation(playerX, winnerXIdx);
      fieldEl.removeEventListener('click', onClick);
      console.log(playerX, winnerXIdx);

      // console.log('win');
      // winnerEl.textContent = 'Winner PlayerX';
    } else if (isWinner0) {
      winner0Idx = WINS.findIndex(item =>
        item.every(id => localState.history0.includes(id))
      );
      victoryAnimation(player0, winner0Idx);
      fieldEl.removeEventListener('click', onClick);
      console.log(player0, winner0Idx);

      // winnerEl.textContent = 'Winner Player0';
    } else if (localState.historyx.length + localState.history0.length === 9) {
      // reset();
      draw();
    }
  }
}
