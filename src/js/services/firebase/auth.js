import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { createSignUpMarkup, createLoginMarkup } from './auth-create-markup';
import { showGameMarkup } from '../../game/local-game';
import { signupModal } from '../../layout/signupModal';
import { signinModal } from '../../layout/signinModal';

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

export function showSignUpModal() {
  const signupEl = document.querySelector('header .js-signup');
  const signinEl = document.querySelector('header .js-login');

  signupEl.closest('.auth__item').classList.add('is-hidden');
  signinEl.closest('.auth__item').classList.remove('is-hidden');

  mainEl.innerHTML = createSignUpMarkup();
  signupModal();
}

export function showLoginModal() {
  const signupEl = document.querySelector('header .js-signup');
  const signinEl = document.querySelector('header .js-login');

  signupEl.closest('.auth__item').classList.remove('is-hidden');
  signinEl.closest('.auth__item').classList.add('is-hidden');

  mainEl.innerHTML = createLoginMarkup();
  signinModal();
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
