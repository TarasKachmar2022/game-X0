import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
// import { createSignUpMarkup, createLoginMarkup } from './auth-create-markup';
import { signinModal } from '../../layout/signinModal';
import { showGameMarkup } from '../../game/local-game';

const app = initializeApp(firebaseConfig);

const headerAuthBtnsEl = document.querySelector('.auth__list');
// const mainEl = document.querySelector('.main__wrap');

function checkAuthState() {
  const auth = getAuth();

  onAuthStateChanged(auth, user => {
    if (user) {
      // Користувач залогінений
      console.log('Користувач залогінений:', user);
      // Можна відображати профіль користувача, наприклад:
      // showUserProfile(user);
      showLogOutBtn();
      closeAuthModal();
      showGameMarkup();
    } else {
      // Користувач не залогінений
      openAuthModal();
      signinModal();
      console.log('Користувач не залогінений');
      // Можна відображати форму для входу або реєстрації
      // showLoginForm();
    }
  });
}

checkAuthState();

// window.addEventListener('DOMContentLoaded', openAuthModal);

// function openAuthModal() {
//   if (!logined) {
//     signinModal();
//   } else {
//     closeAuthModal();
//     showGameMarkup();
//   }
// }

function openAuthModal() {
  const backdropModalEl = document.querySelector('.auth-backdrop');

  backdropModalEl.classList.remove('is-hidden');
}

function closeAuthModal() {
  const backdropModalEl = document.querySelector('.auth-backdrop');

  backdropModalEl.classList.add('is-hidden');
}

function showLogOutBtn() {
  const logOutBtnEl = document.querySelector('.logout-btn');

  headerAuthBtnsEl.classList.add('visually-hidden');
  logOutBtnEl.classList.remove('is-hidden');
}
