import { createDrawModalMarkup } from './../components/create-modal-markup';
import { openModal } from '../components/modal';
import { showSelectMode } from './select-mode';
import {
  showSelectPlayersModalMarkup,
  createFirstSelectMarkup,
  createSecondSelectMarkup,
} from './select-players';
import { onRestartGameBtnClick } from '../game/local-mode';

const modalEl = document.querySelector('.modal');

export function draw() {
  console.log('draw');

  showDrawModal();
  setTimeout(() => openModal(), 2000);

  modalEl.addEventListener('click', drawModalEvent);

  function drawModalEvent(e) {
    const { draw } = e.target.dataset;

    if (draw === 'mode') showSelectMode();
    if (draw === 'player') {
      showSelectPlayersModalMarkup();
      createFirstSelectMarkup();
      createSecondSelectMarkup();
    }
    if (draw === 'game') onRestartGameBtnClick();
  }

  //   // STATE.user.local.scoreDraw += 1;
  //   // scoreEl.innerHTML = '';
  function showDrawModal() {
    modalEl.innerHTML = createDrawModalMarkup();
  }
}
