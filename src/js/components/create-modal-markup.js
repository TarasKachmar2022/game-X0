import winImage from './../../images/win.jpg';
import drawImage from './../../images/draw.jpg';

export function createSelectModeModalMarkup() {
  return `<div class="hero">
  <span class="hero__title">Виберіть режим гри</span>
</div>
<div class="select-mode__wrap">
  <button class="select-mode__btn" data-mode="bot">Проти комп'ютера</button>
  <button class="select-mode__btn" data-mode="local">Гра удвох</button>
  <button class="select-mode__btn" data-mode="online">Мережева гра</button>
</div>`;
}

export function createSelectLevelModalMarkup() {
  return `<button class="back-btn js-select-player-back-btn">Назад</button>
  <div class="hero">
  <span class="hero__title">Виберіть рівень складності</span>
</div>
<div class="select-level__wrap">
  <button class="select-level__btn" data-level="easy">Легкий</button>
  <button class="select-level__btn" data-level="medium">Середній</button>
  <button class="select-level__btn" data-level="hard">Важкий</button>
</div>`;
}

export function createSelectPlayersModalMarkup() {
  return `<button class="back-btn js-select-player-back-btn">Назад</button>
  <div class="hero">
      <span class="hero__title">Виберіть гравців</span>
    </div>
    <button class="select-player__add" data-player="add">Додати нового гравця</button>
    <button class="select-player__delete" data-player="delete">Видалити гравця</button>
    <form class="" name="select-players" autocomplete="off">
      <div class="select-player__wrap">
        <div class="select-player__thumb">
          <label for="player1" class="select-player__label">Гравець 1</label>
          <select class="select-player__select js-first-select" id="player1" name="player1">
          </select>
          <p class="select-player__player1-message form__message">Виберіть гравця!</p>
        </div>
        <div class="select-player__thumb">
          <label for="player2" class="select-player__label">Гравець 2</label>
          <select class="select-player__select js-second-select" id="player2" name="player2">
          </select>
          <p class="select-player__player2-message form__message">Виберіть гравця!</p>
        </div>
      </div>
      <button class="select-player__start js-start-game">Почати гру</button>
    </form>`;
}

export function createAddPlayerModalMarkup() {
  return `<button class="close-btn js-close-modal">Х</button>
    <form class="" name="newuser" autocomplete="off" id="add-player">
      <p class="player-modal__title">Створення нового гравця</p>
      <div class="player-modal__wrap">
      <input
        class="player-modal__input"
        type="text"
        name="playername"
        placeholder="Введіть ім'я гравця"
        id='newuserinput'
      />
      <p class="player-modal__message"></p>
</div>
      <div class="player-modal__btn-wrap">
        <button class="add-player__btn js-add-player" type="submit">Створити</button>
        <button class="add-player__btn js-close-modal">Відмінити</button>
      </div>
    </form>`;
}

export function createDeletePlayerModalMarkup() {
  return `<button class="close-btn js-close-modal">Х</button>
    <form class="" name="newuser" autocomplete="off" id="delete-player">
      <p class="player-modal__title">Виберіть гравця для видалення</p>
      <div class="player-modal__wrap">
      <select class="delete-player__select" id="deleteuser" name="deleteuser">
</select>
<p class="js-delete-message form__message">Виберіть гравця!</p>
</div>
<div class="player-modal__btn-wrap">
<button class="delete-player__btn js-delete-player" type="submit">Видалити</button>
<button class="delete-player__btn js-close-modal">Відмінити</button>
</div>
</form>`;
}

export function createVictoryModalMarkup(playerName) {
  return `<img class="win__img" src="${winImage}" alt="Вітання" />
    <p class="win__message">${playerName} переміг(ла)!</p>
    <div class="win__wrap">
      <button class="win__btn" data-victory="mode">Головне меню</button>
      <button class="win__btn" data-victory="player">Змінити гравця</button>
      <button class="win__btn" data-victory="game">Грати ще</button>
    </div>`;
}

export function createDrawModalMarkup() {
  return `<img class="draw__img" src="${drawImage}" alt="Нічия" />
    <p class="draw__result">Нічия</p>
    <p class="draw__message">Перемогла дружба!</p>
    <div class="draw__wrap">
      <button class="draw__btn" data-draw="mode">Головне меню</button>
      <button class="draw__btn" data-draw="player">Змінити гравця</button>
      <button class="draw__btn" data-draw="game">Грати ще</button>
    </div>`;
}

/* <input
  class="delete-player__input"
  type="text"
  name="playername"
  placeholder="Введіть ім'я гравця"
/> */
