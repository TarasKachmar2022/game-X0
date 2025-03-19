import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
// import { createSignUpMarkup, createLoginMarkup } from './auth-create-markup';
import { signinModal } from '../../layout/signinModal';
import { showGameMarkup } from '../../game/local-game';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const headerAuthBtnsEl = document.querySelector('.auth__list');
const logOutBtnEl = document.querySelector('.logout-btn');
// const mainEl = document.querySelector('.main__wrap');

logOutBtnEl.addEventListener('click', logoutUser);

function checkAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // Користувач залогінений
      console.log('Користувач залогінений:', user);
      // Можна відображати профіль користувача, наприклад:
      // showUserProfile(user);
      onLogOutBtn();
      closeAuthModal();
      showGameMarkup();
    } else {
      // Користувач не залогінений
      openAuthModal();
      signinModal();
      console.log('Користувач не залогінений');
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

function onLogOutBtn() {
  headerAuthBtnsEl.classList.toggle('visually-hidden');
  logOutBtnEl.classList.toggle('is-hidden');
}

function logoutUser() {
  signOut(auth)
    .then(() => {
      // Видалення даних з LocalStorage при розлогіненні
      // localStorage.removeItem('user');
      console.log('Користувач розлогінений');
      // Можна відобразити форму для входу
      onLogOutBtn();
      openAuthModal();
      signinModal();
      hideGameMarkup();
    })
    .catch(error => {
      console.error('Помилка при виході:', error);
    });
}

function hideGameMarkup() {
  const bodyEl = document.querySelector('body');
  const mainWrapEl = document.querySelector('.main__wrap');
  const winnerEl = document.querySelector('.winner');
  const fieldEl = document.querySelector('.field');

  bodyEl.classList.remove('cursor-pen');
  mainWrapEl.classList.remove('main__wrap--active');
  winnerEl.classList.add('is-hidden');
  fieldEl.classList.remove('field--active');
}
