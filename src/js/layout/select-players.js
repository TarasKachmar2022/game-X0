import {
  createSelectPlayersModalMarkup,
  deletePlayerModal,
} from '../components/create-modal-markup';
import {
  showCreatePlayerModal,
  hideCreatePlayerModal,
} from './create-player-modal';

const modalEl = document.querySelector('.modal');
// const createPlayerModalEl = document.querySelector('.backdrop--small');

modalEl.addEventListener('click', selectPlayersEvent);

function selectPlayersEvent(e) {
  const { player } = e.target.dataset;

  if (player === 'add') {
    showCreatePlayerModal();
    console.log('add');
  }
  if (player === 'delete') {
    console.log('delete');
  }
}

export function showSelectPlayersModalMarkup() {
  modalEl.innerHTML = createSelectPlayersModalMarkup();
}
