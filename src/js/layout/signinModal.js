import Notiflix from 'notiflix';
import { STATE } from './../components/state';
import { save } from './../components/localStorage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { loginWithGoogle } from './../services/firebase/auth';
import { signupModal } from './signupModal';
import { toggleShowPassword } from './../components/toggle-show-password';

export function signinModal() {
  const headerSignupBtnEl = document.querySelector('.js-signup-btn');
  const headerLoginBtnEl = document.querySelector('.js-login-btn');
  const signupLinkEl = document.querySelector('.js-signup-link');
  const loginWithGoogleBtnEl = document.querySelector(
    '.js-login-with-google-btn'
  );
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
  loginFormEl.addEventListener('submit', onLoginSubmit);
  loginWithGoogleBtnEl.addEventListener('click', loginWithGoogle);

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

  function onLoginSubmit(e) {
    e.preventDefault();

    const { email, password } = e.target.elements;
    console.log(email.value, password.value.trim());

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value.trim())
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Notiflix.Notify.success(`Ви увійшли в систему! ${user.email}`, {
          timeout: 10000,
          clickToClose: true,
          position: 'left-top',
          distance: '10px',
        });
        STATE.user.uid = user.uid;
        save('STATE', STATE);
        console.log(STATE);
        // switchBtns(STATE.user.uid);
        // ...
      })
      .catch(error => {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          Notiflix.Notify.failure(`Email або пароль не вірні!`, {
            timeout: 10000,
            clickToClose: true,
            position: 'left-top',
            distance: '10px',
          });
        }
        if ((error.code = 'auth/too-many-requests')) {
          Notiflix.Notify.failure(`Занадто багато запитів!`, {
            timeout: 10000,
            clickToClose: true,
            position: 'left-top',
            distance: '10px',
          });
        }
      });
    loginFormEl.reset();
  }
}
