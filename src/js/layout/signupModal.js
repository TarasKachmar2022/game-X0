import { signinModal } from './signinModal';
import { toggleShowPassword } from './../components/toggle-show-password';

export function signupModal() {
  const headerSignupBtnEl = document.querySelector('.js-signup-btn');
  const headerLoginBtnEl = document.querySelector('.js-login-btn');
  const loginLinkEl = document.querySelector('.js-login-link');
  const signupFormEl = document.getElementById('signup');
  const loginFormEl = document.getElementById('login');
  const authFormIconArrEl = document.querySelectorAll(
    '.auth-form__icon-password'
  );
  const authFormShowIconArrEl = document.querySelectorAll(
    '.auth-form__icon-password-shown'
  );

  const allBtn = [...authFormIconArrEl, ...authFormShowIconArrEl];

  allBtn.forEach(el => el.addEventListener('click', onShowPasswordClick));
  headerLoginBtnEl.addEventListener('click', onLoginBtnClick);
  loginLinkEl.addEventListener('click', onLoginBtnClick);

  function onLoginBtnClick(e) {
    e.preventDefault();
    showHeaderSignupBtn();
    signinModal();
    renderLoginForm();

    allBtn.forEach(el => el.removeEventListener('click', onShowPasswordClick));
    headerLoginBtnEl.removeEventListener('click', onLoginBtnClick);
    loginLinkEl.removeEventListener('click', onLoginBtnClick);
  }

  function showHeaderSignupBtn() {
    headerSignupBtnEl.closest('.auth__item').classList.remove('is-hidden');
    headerLoginBtnEl.closest('.auth__item').classList.add('is-hidden');
  }

  function renderLoginForm() {
    signupFormEl.classList.add('visually-hidden');
    loginFormEl.classList.remove('visually-hidden');
  }

  function onShowPasswordClick(e) {
    toggleShowPassword(e);
  }
}
