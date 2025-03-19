import penImage from './../../images/svg/cursor/icon-pen.svg';

import { createGameMarkup } from '../components/create-game-markup';
import { wins } from '../components/win-config';
import { victoryAnimation } from '../components/victory-animation';
import { victory, draw, loss } from '../components/result';

const bodyEl = document.querySelector('body');
const fieldThumbEl = document.querySelector('.field__thumb');
const scoreEl = document.querySelector('.score');
const fieldEl = document.querySelector('.field');
const clickSound = document.getElementById('click__sound');

fieldEl.addEventListener('click', onClick);

let player = 'X';
let historyx = [];
let history0 = [];

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

  target.textContent = player;
  const id = Number(target.dataset.id);

  if (player === 'X') {
    historyx.push(id);
  } else {
    history0.push(id);
  }

  // console.log(history0);
  // console.log(historyx);

  player = player === 'X' ? '0' : 'X';

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
  historyx = [];
  history0 = [];
  player = 'X';
}

export function checkWins() {
  const winnerEl = document.querySelector('.winner');

  let winnerXIdx = 0;
  let winner0Idx = 0;

  if (historyx.length + history0.length >= 5) {
    const isWinnerX = wins.some(item =>
      item.every(id => historyx.includes(id))
    );

    const isWinner0 = wins.some(item =>
      item.every(id => history0.includes(id))
    );

    // console.log(isWinnerX);
    // console.log(isWinner0);
    const playerX = 'Taras';
    const player0 = 'Oksana';

    if (isWinnerX) {
      winnerXIdx = wins.findIndex(item =>
        item.every(id => historyx.includes(id))
      );

      victoryAnimation(playerX, winnerXIdx);
      fieldEl.removeEventListener('click', onClick);
      console.log(playerX, winnerXIdx);

      // console.log('win');
      winnerEl.textContent = 'Winner PlayerX';
    } else if (isWinner0) {
      winner0Idx = wins.findIndex(item =>
        item.every(id => history0.includes(id))
      );
      victoryAnimation(player0, winner0Idx);
      fieldEl.removeEventListener('click', onClick);
      console.log(player0, winner0Idx);

      winnerEl.textContent = 'Winner Player0';
    } else if (historyx.length + history0.length === 9) {
      // reset();
      draw();
    }
  }
}
