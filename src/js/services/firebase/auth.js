import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';
import { STATE } from './../../components/state';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { save } from './../../components/localStorage';
import { signinModal } from '../../layout/signinModal';
import { openModal, closeModal } from '../../components/modal';
import { showSelectMode } from './../../layout/select-mode';
// import { showGameMarkup } from '../../game/local-mode';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const headerAuthBtnsEl = document.querySelector('.auth__list');
const logOutBtnEl = document.querySelector('.logout-btn');
// const mainEl = document.querySelector('.main__wrap');

logOutBtnEl.addEventListener('click', logoutUser);

function checkAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // Користувач залогінений
      console.log('Користувач залогінений:', user);
      onLogOutBtn();
      closeAuthModal();
      openModal();
      showSelectMode();
      // showGameMarkup();
    } else {
      // Користувач не залогінений
      openAuthModal();
      signinModal();
      closeModal();
      console.log('Користувач не залогінений');
    }
  });
}

checkAuthState();

// window.addEventListener('DOMContentLoaded', openAuthModal);

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

export function loginWithGoogle() {
  // signInWithPopup(auth, provider)
  signInWithPopup(auth, provider)
    .then(userCredential => {
      const user = userCredential.user;
      Notiflix.Notify.success(
        'Ви ввійшли в обліковий запис за допомогою Google',
        {
          timeout: 10000,
          clickToClose: true,
          position: 'left-top',
          distance: '10px',
        }
      );
      STATE.user.uid = user.uid;
      console.log('STATE: ', STATE);
      save('STATE', STATE);
      // switchBtns(STATE.user.uid);
      closeAuthModal();
    })
    .catch(error => {
      Notiflix.Notify.failure(`${error.code} ${error.message}`, {
        timeout: 10000,
        clickToClose: true,
        position: 'left-top',
        distance: '10px',
      });
    });
}

function logoutUser() {
  signOut(auth)
    .then(() => {
      // Видалення даних з LocalStorage при розлогіненні
      localStorage.removeItem('STATE');
      console.log('Користувач розлогінений');
      Notiflix.Notify.failure('Ви вийшли з системи!', {
        timeout: 10000,
        clickToClose: true,
        position: 'left-top',
        distance: '10px',
      });
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
  const scoreEl = document.querySelector('.score');
  const fieldEl = document.querySelector('.field');

  bodyEl.classList.remove('cursor-pen');
  mainWrapEl.classList.remove('main__wrap--active');
  scoreEl.classList.remove('score--active');
  fieldEl.classList.remove('field--active');
}
