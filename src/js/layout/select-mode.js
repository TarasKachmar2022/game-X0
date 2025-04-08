import { STATE } from '../components/state';
import { save } from './../components/localStorage';
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

  // STATE.gameMode = mode;

  if (mode === 'bot') {
    STATE.gameMode = mode;
    showSelectLevelModalMarkup();
  }
  if (mode === 'local') {
    STATE.gameMode = mode;
    console.log(STATE);
    showSelectPlayersModalMarkup();
    createFirstSelectMarkup();
    createSecondSelectMarkup();
  }
  // if (mode === 'online')
}

export function showSelectMode() {
  modalEl.innerHTML = createSelectModeModalMarkup();
}
