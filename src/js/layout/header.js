// export function headerBtnToggle() {
//   const headerSignupBtnEl = document.querySelector('.js-header-signup');
//   const headerSigninBtnEl = document.querySelector('.js-header-login');

//   headerSignupBtnEl.addEventListener('click', onHeaderSignupBtnClick);
//   headerSigninBtnEl.addEventListener('click', onHeaderSigninBtnClick);

//   function onHeaderSignupBtnClick() {
//     headerSignupBtnEl.closest('.auth__item').classList.add('is-hidden');
//     headerSigninBtnEl.closest('.auth__item').classList.remove('is-hidden');

//     showSignUpModal();

//     headerSignupBtnEl.removeEventListener('click', onHeaderSignupBtnClick);
//     headerSigninBtnEl.removeEventListener('click', onHeaderSigninBtnClick);
//   }

//   function onHeaderSigninBtnClick() {
//     headerSignupBtnEl.closest('.auth__item').classList.remove('is-hidden');
//     headerSigninBtnEl.closest('.auth__item').classList.add('is-hidden');

//     showLoginModal();

//     headerSignupBtnEl.removeEventListener('click', onHeaderSignupBtnClick);
//     headerSigninBtnEl.removeEventListener('click', onHeaderSigninBtnClick);
//   }
// }
