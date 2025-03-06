import penImage from './images/svg/cursor/icon-pen.svg';

const fieldThumbEl = document.querySelector('.field__thumb');
const fieldEl = document.querySelector('.field');
const clickSound = document.getElementById('click__sound');
const winnerEl = document.querySelector('.winner');

fieldEl.addEventListener('click', onClick);

let player = 'X';
let historyx = [];
let history0 = [];

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
  [7, 5, 3],
  [9, 5, 1],
];
console.log(typeof wins);
console.log(typeof historyx);

function createMarkup() {
  let markup = '';
  let penMarkup = '';

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }

  for (let i = 1; i < 9; i += 1) {
    markup += `<div class="line js-line" data-line="${i}"></div>`;
  }

  for (let i = 1; i < 9; i += 1) {
    penMarkup += `<img
    class="pen js-pen"
    data-pen="${i}"
    src="${penImage}"
    alt="pen"
    width="100"
    height="100"
    />`;
  }

  fieldThumbEl.insertAdjacentHTML('beforebegin', penMarkup);
  fieldEl.innerHTML = markup;
}

createMarkup();

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

  if (historyx.length + history0.length === 9) {
    reset();
  }

  clickSound.play().catch(error => {
    console.error('Не вдалося відтворити звук:', error);
  });

  checkWins();
}

function reset() {
  createMarkup();
  historyx = [];
  history0 = [];
  player = 'X';
}

function checkWins() {
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
    // console.log(isWinnerX);
    const playerX = 'Taras';
    const player0 = 'Oksana';

    if (isWinnerX) {
      winnerXIdx = wins.findIndex(item =>
        item.every(id => historyx.includes(id))
      );
      victory(playerX, winnerXIdx);
      console.log(playerX, winnerXIdx);

      // console.log('win');
      winnerEl.textContent = 'Winner PlayerX';
    } else if (isWinner0) {
      winner0Idx = wins.findIndex(item =>
        item.every(id => history0.includes(id))
      );
      victory(player0, winner0Idx);
      console.log(player0, winner0Idx);
    }
  }
}
// console.log(penEl);
const lineEl = document.querySelectorAll('.js-line');
const penEl = document.querySelectorAll('.js-pen');
function victory(player, idx) {
  // console.log(idx);
  const lineArr = [...lineEl];
  const penArr = [...penEl];

  const selectLine = lineArr.find(
    el => Number(el.dataset.line) === Number(idx + 1)
  );

  const selectPen = penArr.find(
    el => Number(el.dataset.pen) === Number(idx + 1)
  );

  selectLine.classList.add('active');
  selectPen.classList.add('active');
  fieldEl.removeEventListener('click', onClick);
}

function draw() {}

function loss() {}
