export function createSelectModeModalMarkup() {
  return `<div class="hero">
  <span class="hero__title">Виберіть режим гри</span>
</div>
<div class="mod__wrap">
  <button class="mod__btn" data-mode="bot">Проти комп'ютера</button>
  <button class="mod__btn" data-mode="local">Гра удвох</button>
  <button class="mod__btn" data-mode="online">Мережева гра</button>
</div>`;
}

export function createSelectPlayersModalMarkup() {
  return `<div class="hero">
      <span class="hero__title">Виберіть гравців</span>
    </div>
    <button class="select__add">Додати нового гравця</button>
    <form class="" name="" autocomplete="off">
      <div class="select__wrap">
        <div>
          <p class="select__label">Гравець 1</p>
          <select class="select__player" id="player1" name="playerX">
            <option value="none">Виберіть гравця</option>
          </select>
        </div>
        <div>
          <p class="select__label">Гравець 2</p>
          <select class="select__player" id="player2" name="player0">
            <option value="none">Виберіть гравця</option>
          </select>
        </div>
      </div>
      <button class="start-game">Почати гру</button>
    </form>`;
}
