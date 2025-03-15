import { showSignUpModal } from '../services/firebase/auth';

export function signinModal() {
  const signupEl = document.querySelector('header .js-signup');
  const signupArrEl = document.querySelectorAll('.js-signup');

  signupArrEl.forEach(el => el.addEventListener('click', onSignupBtnClick));

  function onSignupBtnClick(e) {
    e.preventDefault();

    showSignUpModal();

    signupArrEl.forEach(el =>
      el.removeEventListener('click', onSignupBtnClick)
    );

    signupEl.closest('.auth__item').classList.add('is-hidden');
  }
}
