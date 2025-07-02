import { STATE } from '../components/state';
import { createVictoryModalMarkup } from '../components/create-modal-markup';
import { openModal, closeModal } from '../components/modal';
import { showSelectMode } from './select-mode';
import {
  showSelectPlayersModalMarkup,
  createFirstSelectMarkup,
  createSecondSelectMarkup,
} from './select-players';
import { onRestartGameBtnClick } from '../game/local-mode';

const modalEl = document.querySelector('.modal');
const fieldEl = document.querySelector('.field');

const winSound = document.getElementById('win__sound');
// const clickSound = document.getElementById('click__sound');
export function victory(playerName, player) {
  console.log(`${playerName}`);

  showVictoryModal(playerName);
  setTimeout(() => winSound.play(), 250);
  setTimeout(() => openModal(), 1000);

  modalEl.addEventListener('click', victoryModalEvent);

  function victoryModalEvent(e) {
    const { victory } = e.target.dataset;

    if (victory === 'mode') showSelectMode();
    if (victory === 'player') {
      showSelectPlayersModalMarkup();
      createFirstSelectMarkup();
      createSecondSelectMarkup();
    }
    if (victory === 'game') onRestartGameBtnClick();
  }

  // function onRestartGameBtnClick() {
  //   fieldEl.addEventListener('click', onClick);

  //   STATE.historyPlayer1 = [];
  //   STATE.historyPlayer2 = [];
  //   showGameMarkup();
  //   function onClick(e) {
  //     const { target } = e;

  //     // console.log(e.currentTarget);
  //     // console.log(target);

  //     if (target.textContent) {
  //       return;
  //     }

  //     target.textContent = STATE.symbol;
  //     const id = Number(target.dataset.id);

  //     if (STATE.symbol === 'X') {
  //       STATE.historyPlayer1.push(id);
  //     } else {
  //       STATE.historyPlayer2.push(id);
  //     }

  //     // console.log(history0);
  //     // console.log(historyx);

  //     STATE.symbol = STATE.symbol === 'X' ? '0' : 'X';

  //     // if (historyx.length + history0.length === 9) {
  //     //   reset();
  //     // }

  //     clickSound.play().catch(error => {
  //       console.error('Не вдалося відтворити звук:', error);
  //     });

  //     checkWins();
  //   }

  //   closeModal();
  //   // STATE.symbol = 'X';
  // }

  // if (player === 'firstPlayer') {
  //   // STATE.user.local.scorePlayerFirst += 1;
  //   STATE.user.local.players.find(player => {
  //     if (player.playerName === playerName) {
  //       player.statistics.wins += 1;
  //       player.statistics.total += 1;
  //     }
  //   });
  //   console.log(STATE);
  // } else if (player === 'secondPlayer') {
  //   // STATE.user.local.scorePlayerSecond += 1;
  // }
  // scoreEl.innerHTML = '';
  function showVictoryModal(playerName) {
    modalEl.innerHTML = createVictoryModalMarkup(playerName);
  }
}

// export function draw(STATE) {
//   console.log('draw');

//   // STATE.user.local.scoreDraw += 1;
//   // scoreEl.innerHTML = '';
// }

// export function loss() {}
