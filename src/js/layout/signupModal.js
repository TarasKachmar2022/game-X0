import { showLoginModal } from '../services/firebase/auth';

export function signupModal() {
  const loginEl = document.querySelector('header .js-login');
  const loginArrEl = document.querySelectorAll('.js-login');

  loginArrEl.forEach(el => el.addEventListener('click', onLoginBtnClick));

  function onLoginBtnClick(e) {
    e.preventDefault();

    showLoginModal();

    loginArrEl.forEach(el => el.removeEventListener('click', onLoginBtnClick));

    loginEl.closest('.auth__item').classList.add('is-hidden');
  }
}
