import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
// import { createSignUpMarkup, createLoginMarkup } from './auth-create-markup';
import { signupModal } from '../../layout/signupModal';
import { showGameMarkup } from '../../game/local-game';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let logined = false;

// const authModalEl = document.querySelector('.auth-modal');
// const mainEl = document.querySelector('.main__wrap');

window.addEventListener('DOMContentLoaded', openAuthModal);

function openAuthModal() {
  if (!logined) {
    signupModal();
  } else {
    closeAuthModal();
    showGameMarkup();
  }
}

function closeAuthModal() {
  const backdropModalEl = document.querySelector('.auth-backdrop');

  backdropModalEl.classList.add('is-hidden');
}

// export function showSignUpModal() {
//   // authModalEl.innerHTML = createSignUpMarkup();
//   // headerBtnToggle();
//   signupModal();
// }

// export function showLoginModal() {
//   // mainEl.insertAdjacentHTML = ('beforeend', createLoginMarkup());

//   // authModalEl.innerHTML = createLoginMarkup();
//   // headerBtnToggle();
//   signinModal();
//   // toggleShowPassword();
// }
