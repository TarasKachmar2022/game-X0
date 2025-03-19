import Notiflix from 'notiflix';
import { STATE } from './../components/state';
import { save } from './../components/localStorage';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { loginWithGoogle } from './../services/firebase/auth';
import { signinModal } from './signinModal';
import { toggleShowPassword } from './../components/toggle-show-password';

export function signupModal() {
  const headerSignupBtnEl = document.querySelector('.js-signup-btn');
  const headerLoginBtnEl = document.querySelector('.js-login-btn');
  const loginLinkEl = document.querySelector('.js-login-link');
  const signupWithGoogleBtnEl = document.querySelector(
    '.js-signup-with-google-btn'
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
  headerLoginBtnEl.addEventListener('click', onLoginBtnClick);
  loginLinkEl.addEventListener('click', onLoginBtnClick);
  signupFormEl.addEventListener('submit', onSignupSubmit);
  signupWithGoogleBtnEl.addEventListener('click', loginWithGoogle);

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

  function onSignupSubmit(e) {
    e.preventDefault();

    const { email } = e.target.elements;
    const password = signupCheckPassword(e);

    if (password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value.trim())
        .then(userCredential => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          Notiflix.Notify.success(
            `Користувача успішно створено! ${user.email}`,
            {
              timeout: 10000,
              clickToClose: true,
              position: 'left-top',
              distance: '10px',
            }
          );
          STATE.user.uid = user.uid;
          save('STATE', STATE);
          console.log(STATE);
          // switchBtns(STATE.user.uid);
          // ...
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use')
            Notiflix.Notify.failure('Email Вже використовується!', {
              timeout: 10000,
              clickToClose: true,
              position: 'left-top',
              distance: '10px',
            });
          if (error.code === 'auth/weak-password') {
            Notiflix.Notify.failure('Пароль повинен містити 6 символів!', {
              timeout: 10000,
              clickToClose: true,
              position: 'left-top',
              distance: '10px',
            });
          }
        });
    }

    signupFormEl.reset();
  }
}

function signupCheckPassword(e) {
  const signupMessage = document.querySelectorAll(
    '.js-signup-form .auth-form__message'
  );

  const { password, repeatpassword } = e.target.elements;

  if (password.value.trim() === repeatpassword.value.trim()) {
    signupMessage.forEach(el => {
      if (el.classList.contains('show')) {
        el.classList.remove('show');
      }
    });

    return password;
  } else {
    signupMessage.forEach(el => el.classList.add('show'));

    return;
  }
}
