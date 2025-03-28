import { STATE } from '../components/state';
import { createSelectModeModalMarkup } from '../components/create-modal-markup';
import {
  showSelectPlayersModalMarkup,
  createFirstSelectMarkup,
  createSecondSelectMarkup,
} from './select-players';
import { showSelectLevelModalMarkup } from './select-level';

const modalEl = document.querySelector('.modal');

modalEl.addEventListener('click', selectModeEvent);

function selectModeEvent(e) {
  const { mode } = e.target.dataset;

  STATE.gameMode = mode;

  if (mode === 'bot') showSelectLevelModalMarkup();
  if (mode === 'local') {
    showSelectPlayersModalMarkup();
    createFirstSelectMarkup();
    createSecondSelectMarkup();
  }
  // if (mode === 'online')
}

export function showSelectMode() {
  modalEl.innerHTML = createSelectModeModalMarkup();
}
