import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { createSignUpMarkup } from './auth-create-markup';
import { showGameMarkup } from '../../game/local-game';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

let logined = false;

const mainEl = document.querySelector('.main__wrap');

window.addEventListener('DOMContentLoaded', openAuthModal);

function openAuthModal() {
  if (!logined) {
    showSignUpModal();
  } else {
    showGameMarkup();
  }
}

function showSignUpModal() {
  mainEl.innerHTML = createSignUpMarkup();
}

function showLoginModal() {
  mainEl.innerHTML = createLoginMarkup();
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
