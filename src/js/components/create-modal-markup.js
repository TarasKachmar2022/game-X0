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
  return `<div class="hero">
  <span class="hero__title">Виберіть рівень складності</span>
</div>
<div class="select-level__wrap">
  <button class="select-level__btn" data-level="easy">Легкий</button>
  <button class="select-level__btn" data-level="medium">Середній</button>
  <button class="select-level__btn" data-level="hard">Важкий</button>
</div>`;
}

export function createSelectPlayersModalMarkup() {
  return `<div class="hero">
      <span class="hero__title">Виберіть гравців</span>
    </div>
    <button class="select-player__add" data-player="add">Додати нового гравця</button>
    <button class="select-player__delete" data-player="delete">Видалити гравця</button>
    <form class="" name="select-players" autocomplete="off">
      <div class="select-player__wrap">
        <div>
          <p class="select-player__label">Гравець 1</p>
          <select class="select-player__player" id="player1" name="player1">
            <option value="none">Виберіть гравця</option>
          </select>
        </div>
        <div>
          <p class="select-player__label">Гравець 2</p>
          <select class="select-player__player" id="player2" name="player2">
            <option value="none">Виберіть гравця</option>
          </select>
        </div>
      </div>
      <button class="select-player__start">Почати гру</button>
    </form>`;
}

export function createPlayerModalMarkup() {
  return `<button class="close-btn js-close-modal">Х</button>
    <form class="" name="newuser" autocomplete="off" id="add-player">
      <p class="create-player__title">Створення нового гравця</p>
      <input
        class="create-player__input"
        type="text"
        name="playername"
        placeholder="Введіть ім'я гравця"
      />
      <p class="create-player__message"></p>
      <div class="create-player__btn-wrap">
        <button class="create-player__btn js-add-player" type="submit">Створити</button>
        <button class="create-player__btn js-close-modal">Відмінити</button>
      </div>
    </form>`;
}
