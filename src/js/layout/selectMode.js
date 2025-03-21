import { STATE } from './../components/state';
import { createSelectModeModalMarkup } from './../components/createModalMarkup';
import { showSelectPlayersModalMarkup } from './select-players';

const modalEl = document.querySelector('.modal');

modalEl.addEventListener('click', selectModeEvent);

function selectModeEvent(e) {
  const { mode } = e.target.dataset;

  if (e.target.classList.contains('mod__btn')) {
    STATE.gameMode = mode;

    // if (mode === 'bot')
    if (mode === 'local') showSelectPlayersModalMarkup();
    // if (mode === 'online')
  }
}

export function showSelectMode() {
  modalEl.innerHTML = createSelectModeModalMarkup();
}
