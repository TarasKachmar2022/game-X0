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
    markup += `<div class="line" data-line="${i}"></div>`;
  }

  for (let i = 1; i < 9; i += 1) {
    penMarkup += `<img
    class="pen"
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

  console.log(e.currentTarget);
  console.log(target);

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

  console.log(history0);
  console.log(historyx);

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
  if (historyx.length + history0.length >= 5) {
    const isWinnerX = wins.some(item =>
      item.every(id => historyx.includes(id))
    );

    const isWinner0 = wins.some(item =>
      item.every(id => history0.includes(id))
    );

    console.log(isWinnerX);
    console.log(isWinner0);

    if (isWinnerX) {
      // const result = wins.find(item => {
      //   item.every(id => historyx.includes(id));
      //   return item.length;
      // });
      console.log(result);
      console.log('win');
      winnerEl.textContent = 'Winner';
    }
  }
}

// function victory() {}

// function draw() {}

// function loss() {}
