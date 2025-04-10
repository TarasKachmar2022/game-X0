import Notiflix from 'notiflix';
import { STATE } from '../components/state';
import {
  createAddPlayerModalMarkup,
  createDeletePlayerModalMarkup,
} from '../components/create-modal-markup';
import {
  createFirstSelectMarkup,
  createSecondSelectMarkup,
} from './select-players';

const addDeletePlayerModalEl = document.querySelector('.backdrop--small');
const addDeleteModalEl = document.querySelector('.modal--small');

addDeletePlayerModalEl.addEventListener('click', addDeletePlayerModalEvent);

function addDeletePlayerModalEvent(e) {
  e.preventDefault();

  if (
    e.target.classList.contains('js-close-modal') ||
    e.currentTarget === e.target
  ) {
    hideAddDeletePlayerModal();
  }
  if (e.target.classList.contains('js-add-player')) onSubmitClick();
  if (e.target.classList.contains('js-delete-player')) onDeleteBtnClick();
}

export function showAddPlayerModal() {
  addDeletePlayerModalEl.classList.remove('is-hidden');
  addDeleteModalEl.innerHTML = createAddPlayerModalMarkup();

  const newUserInputEl = document.getElementById('newuserinput');

  newUserInputEl.focus();
}

export function showDeletePlayerModal() {
  addDeletePlayerModalEl.classList.remove('is-hidden');
  addDeleteModalEl.innerHTML = createDeletePlayerModalMarkup();
  createSelectMarkup();
}

function hideAddDeletePlayerModal() {
  addDeletePlayerModalEl.classList.add('is-hidden');
}

export function createSelectMarkup() {
  const selectDeleteEl = document.getElementById('deleteuser');

  const { players } = STATE.user.local;

  let markup = '';

  players.forEach(player => {
    markup += `<option value="${player.playerName}">${player.playerName}</option>`;
  });

  selectDeleteEl.innerHTML = markup;
}

function onSubmitClick() {
  const formEl = document.getElementById('add-player');
  const messageEl = document.querySelector('.player-modal__message');

  const { value } = formEl.elements.playername;
  const { players } = STATE.user.local;
  if (value) {
    const findedPlayer = players.find(player => player.playerName === value);
    if (findedPlayer) {
      messageEl.textContent = "Гравець з таким ім'ям уже існує!";
      messageEl.classList.add('player-modal__message--shown');

      return;
    } else {
      if (messageEl.classList.contains('player-modal__message--shown')) {
        messageEl.classList.remove('player-modal__message--shown');
      }

      const obj = {
        playerId: players.length,
        playerName: value,
        statistics: { wins: 0, draws: 0, losses: 0, total: 0 },
      };

      players.push(obj);

      Notiflix.Notify.success(`Гравця ${value} успішно додано!`, {
        timeout: 6000,
        clickToClose: true,
        position: 'left-top',
        distance: '10px',
      });

      hideAddDeletePlayerModal();
      createFirstSelectMarkup();
      createSecondSelectMarkup();
    }
  } else {
    messageEl.textContent = 'Поле не може бути пустим!';
    messageEl.classList.add('player-modal__message--shown');
  }
}

function onDeleteBtnClick() {
  const deleteFormEl = document.getElementById('delete-player');
  const deleteMessageEl = document.querySelector('.js-delete-message');

  const { value } = deleteFormEl.elements.deleteuser;
  const { players } = STATE.user.local;

  if (value && value !== 'Виберіть гравця') {
    STATE.user.local.players = players.filter(
      player => player.playerName !== value
    );

    hideAddDeletePlayerModal();
    createFirstSelectMarkup();
    createSecondSelectMarkup();

    Notiflix.Notify.success(`Гравця ${value} успішно видалено!`, {
      timeout: 10000,
      clickToClose: true,
      position: 'left-top',
      distance: '10px',
    });
  } else {
    deleteMessageEl.classList.add('show');
  }
}
