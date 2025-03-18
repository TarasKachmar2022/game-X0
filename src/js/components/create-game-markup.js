export function createGameMarkup(penImage) {
  let markup = '';
  let penMarkup = '';

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }

  for (let i = 1; i < 9; i += 1) {
    markup += `<div class="line js-line" data-line="${i}"></div>`;
  }

  for (let i = 1; i < 9; i += 1) {
    penMarkup += `<img
    class="pen js-pen"
    data-pen="${i}"
    src="${penImage}"
    alt="pen"
    width="100"
    height="100"
    />`;
  }

  return { markup, penMarkup };
}

// return `
//        <div class="winner"></div>
//         <div class="field__wrap">
//           <div class="field__thumb">
//             ${penMarkup}
//             <div class="field">
//             ${markup}
//             <audio
//               id="click__sound"
//               src="./sound/choice-sound.mp3"
//               preload="auto"
//             ></audio>
//             </div>
//             </div>
//             </div>`;
