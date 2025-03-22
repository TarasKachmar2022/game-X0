import { STATE } from '../components/state';
import { createSelectLevelModalMarkup } from './../components/createModalMarkup';

const modalEl = document.querySelector('.modal');

modalEl.addEventListener('click', selectLevelEvent);

function selectLevelEvent(e) {
  const { level } = e.target.dataset;

  STATE.user.bot.level = level;

  if (level === 'easy') console.log('easy');
  if (level === 'medium') console.log('medium');
  if (level === 'hard') console.log('hard');
}

export function showSelectLevelModalMarkup() {
  modalEl.innerHTML = createSelectLevelModalMarkup();
}
