import { createSelectPlayersModalMarkup } from './../components/createModalMarkup';

const modalEl = document.querySelector('.modal');
export function showSelectPlayersModalMarkup() {
  modalEl.innerHTML = createSelectPlayersModalMarkup();
}
