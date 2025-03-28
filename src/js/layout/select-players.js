import { STATE } from './../components/state';
import { showSelectMode } from './select-mode';
import { createSelectPlayersModalMarkup } from '../components/create-modal-markup';
import {
  showAddPlayerModal,
  showDeletePlayerModal,
} from './add-delete-player-modal';
import { showGameMarkup } from './../game/local-mode';
import { closeModal } from './../components/modal';

const modalEl = document.querySelector('.modal');
const backBtnEl = document.querySelector('.js-select-player-back-btn');

// const createPlayerModalEl = document.querySelector('.backdrop--small');
// let { firstCurrentPlayer, secondCurrentPlayer } = STATE.user.local;

modalEl.addEventListener('click', selectPlayersEvent);

function selectPlayersEvent(e) {
  e.preventDefault();

  const { player } = e.target.dataset;
  let { firstCurrentPlayer, secondCurrentPlayer } = STATE.user.local;

  if (e.target.classList.contains('js-select-player-back-btn'))
    showSelectMode();
  if (player === 'add') {
    console.log('add');
    showAddPlayerModal();
  }
  if (player === 'delete') {
    console.log('delete');
    showDeletePlayerModal();
  }
  if (e.target.classList.contains('js-start-game'))
    onStartGameBtnClick(firstCurrentPlayer, secondCurrentPlayer);
  // console.log(e.target.classList.contains('js-start-game'));

  // if (e.target.classList.contains('js-first-select')) createFirstSelectMarkup();
  // if (e.target.classList.contains('js-second-select'))
  //   createSecondSelectMarkup();
  // console.dir(e.target);
}

export function createFirstSelectMarkup() {
  const select1El = document.getElementById('player1');

  const { players } = STATE.user.local;

  let markup = '';

  players.forEach(player => {
    markup += `<option value="${player.playerName}">${player.playerName}</option>`;
  });

  select1El.innerHTML = markup;

  const secondPlayerSelectEl = document.querySelector('.js-second-select');

  select1El.addEventListener('change', selectFirstPlayerChange);

  function selectFirstPlayerChange(e) {
    const { value } = e.target;
    STATE.user.local.firstCurrentPlayer = value;
    let { firstCurrentPlayer } = STATE.user.local;

    const secondPlayerOptionsArr = [...secondPlayerSelectEl.options];

    const canceledOption = secondPlayerOptionsArr.find(
      option => option.disabled
    );

    if (canceledOption) {
      canceledOption.disabled = false;
    }

    const findedOption = secondPlayerOptionsArr.find(
      option => option.value === firstCurrentPlayer
    );

    findedOption.disabled = true;
  }
}

export function createSecondSelectMarkup() {
  const select2El = document.getElementById('player2');

  const { players } = STATE.user.local;

  let markup = '';

  players.forEach(player => {
    markup += `<option value="${player.playerName}">${player.playerName}</option>`;
  });

  select2El.innerHTML = markup;

  const firstPlayerSelectEl = document.querySelector('.js-first-select');

  select2El.addEventListener('change', selectSecondPlayerChange);

  function selectSecondPlayerChange(e) {
    const { value } = e.target;
    STATE.user.local.secondCurrentPlayer = value;
    let { secondCurrentPlayer } = STATE.user.local;

    const firstPlayerOptionsArr = [...firstPlayerSelectEl.options];

    const canceledOption = firstPlayerOptionsArr.find(
      option => option.disabled
    );

    if (canceledOption) {
      canceledOption.disabled = false;
    }

    const findedOption = firstPlayerOptionsArr.find(
      option => option.value === secondCurrentPlayer
    );

    findedOption.disabled = true;
  }
}

function onStartGameBtnClick(firstCurrentPlayer, secondCurrentPlayer) {
  const firstPlayerMessageEl = document.querySelector(
    '.select-player__player1-message'
  );
  const secondPlayerMessageEl = document.querySelector(
    '.select-player__player2-message'
  );

  if (firstCurrentPlayer === '' || firstCurrentPlayer === 'Виберіть гравця') {
    firstPlayerMessageEl.classList.add('show');
  } else {
    firstPlayerMessageEl.classList.remove('show');
  }

  if (secondCurrentPlayer === '' || secondCurrentPlayer === 'Виберіть гравця') {
    secondPlayerMessageEl.classList.add('show');
  } else {
    secondPlayerMessageEl.classList.remove('show');
  }

  if (
    firstCurrentPlayer &&
    firstCurrentPlayer !== 'Виберіть гравця' &&
    secondCurrentPlayer &&
    secondCurrentPlayer !== 'Виберіть гравця'
  ) {
    showGameMarkup();
    closeModal();
  }
}

export function showSelectPlayersModalMarkup() {
  modalEl.innerHTML = createSelectPlayersModalMarkup();
}
