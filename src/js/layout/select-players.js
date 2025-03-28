import { STATE } from './../components/state';
import { showSelectMode } from './select-mode';
import { createSelectPlayersModalMarkup } from '../components/create-modal-markup';
import {
  showAddPlayerModal,
  showDeletePlayerModal,
} from './add-delete-player-modal';

const modalEl = document.querySelector('.modal');
const backBtnEl = document.querySelector('.js-select-player-back-btn');

// const createPlayerModalEl = document.querySelector('.backdrop--small');
// let { firstCurrentPlayer, secondCurrentPlayer } = STATE.user.local;

modalEl.addEventListener('click', selectPlayersEvent);

function selectPlayersEvent(e) {
  e.preventDefault();

  const { player } = e.target.dataset;

  if (e.target.classList.contains('js-select-player-back-btn'))
    showSelectMode();
  if (player === 'add') {
    showAddPlayerModal();

    console.log('add');
  }
  if (player === 'delete') {
    console.log('delete');
    showDeletePlayerModal();
  }

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
    const { value, options } = e.target;
    STATE.user.local.secondCurrentPlayer = value;
    let { firstCurrentPlayer, secondCurrentPlayer } = STATE.user.local;

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

export function showSelectPlayersModalMarkup() {
  modalEl.innerHTML = createSelectPlayersModalMarkup();
}
