import { STATE } from './../components/state';
import { createPlayerModalMarkup } from '../components/create-modal-markup';

const createPlayerModalEl = document.querySelector('.backdrop--small');
const createModalEl = document.querySelector('.modal--small');

createPlayerModalEl.addEventListener('click', createPlayerModalEvent);

function createPlayerModalEvent(e) {
  e.preventDefault();

  if (
    e.target.classList.contains('js-close-modal') ||
    e.currentTarget === e.target
  ) {
    hideCreatePlayerModal();
  }
  if (e.target.classList.contains('js-add-player')) onSubmitClick();
}

export function showCreatePlayerModal() {
  createPlayerModalEl.classList.remove('is-hidden');
  createModalEl.innerHTML = createPlayerModalMarkup();
}

function hideCreatePlayerModal() {
  createPlayerModalEl.classList.add('is-hidden');
}

function onSubmitClick() {
  const formEl = document.getElementById('add-player');
  const messageEl = document.querySelector('.create-player__message');

  const { value } = formEl.elements.playername;
  const { players } = STATE.user.local;

  const findedPlayer = players.find(player => player.playerName === value);
  if (findedPlayer) {
    messageEl.textContent = "Гравець з таким ім'ям уже існує!";
    messageEl.classList.add('create-player__message--shown');

    return;
  } else {
    if (messageEl.classList.contains('create-player__message--shown')) {
      messageEl.classList.remove('create-player__message--shown');
    }

    const obj = {
      playerId: players.length,
      playerName: value,
      statistics: { wins: 0, draws: 0, losses: 0, total: 0 },
    };

    players.push(obj);

    hideCreatePlayerModal();
  }
}
