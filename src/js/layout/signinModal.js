import { signupModal } from './signupModal';
import { toggleShowPassword } from './../components/toggle-show-password';

export function signinModal() {
  const headerSignupBtnEl = document.querySelector('.js-signup-btn');
  const headerLoginBtnEl = document.querySelector('.js-login-btn');
  const signupLinkEl = document.querySelector('.js-signup-link');
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
  headerSignupBtnEl.addEventListener('click', onSignupBtnClick);
  signupLinkEl.addEventListener('click', onSignupBtnClick);

  function onSignupBtnClick(e) {
    e.preventDefault();

    showHeaderLoginBtn();
    signupModal();
    renderSignupForm();

    allBtn.forEach(el => el.removeEventListener('click', onShowPasswordClick));
    headerSignupBtnEl.removeEventListener('click', onSignupBtnClick);
    signupLinkEl.removeEventListener('click', onSignupBtnClick);
  }

  function showHeaderLoginBtn() {
    // const headerSignupBtnEl = document.querySelector('.js-signup-btn');

    headerSignupBtnEl.closest('.auth__item').classList.add('is-hidden');
    headerLoginBtnEl.closest('.auth__item').classList.remove('is-hidden');
  }

  function renderSignupForm() {
    signupFormEl.classList.remove('visually-hidden');
    loginFormEl.classList.add('visually-hidden');
  }

  function onShowPasswordClick(e) {
    toggleShowPassword(e);
  }
}
