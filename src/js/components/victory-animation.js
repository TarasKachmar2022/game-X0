export function victoryAnimation(player, idx) {
  const lineEl = document.querySelectorAll('.js-line');
  const penEl = document.querySelectorAll('.js-pen');
  // console.log(idx);
  const lineArr = [...lineEl];
  const penArr = [...penEl];

  const selectLine = lineArr.find(
    el => Number(el.dataset.line) === Number(idx + 1)
  );

  const selectPen = penArr.find(
    el => Number(el.dataset.pen) === Number(idx + 1)
  );

  selectLine.classList.add('active');
  selectPen.classList.add('active');

  setTimeout(function () {
    selectPen.classList.remove('active');
  }, 1000);
}
