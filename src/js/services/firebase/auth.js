import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { createSignUpModal } from './auth-create-markup';
import { showGameMarkup } from '../../game/local-game';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let logined = true;

window.addEventListener('DOMContentLoaded', openAuthModal);

function openAuthModal() {
  if (!logined) {
    // showSignUpModal();
  } else {
    // showGameMarkup();
  }
}

function showSignUpModal() {
  // const authModalEl = document.querySelector('.auth');

  // authModalEl.innerHTML = createSignUpModal();
  const mainEl = document.querySelector('.main');

  mainEl.innerHTML = createSignUpModal();
}

// function toggleShowPassword() {
//   const passwordShownIconEl = document.querySelectorAll(
//     '.auth-form__icon-password-shown'
//   );
//   const passwordIsHiddenIconEl = document.querySelectorAll(
//     '.auth-form__icon-password'
//   );
//   console.log(passwordShownIconEl);
//   console.log(passwordIsHiddenIconEl);
// }
// toggleShowPassword();
