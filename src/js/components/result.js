const scoreEl = document.querySelector('.score');

export function victory() {
  console.log('win');
  scoreEl.innerHTML = '';
}

export function draw() {
  console.log('draw');
  scoreEl.innerHTML = '';
}

export function loss() {}
