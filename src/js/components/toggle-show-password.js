export function toggleShowPassword(e) {
  const inputArrEl = document.querySelectorAll('.auth-form__input');
  const showIconArrEl = document.querySelectorAll(
    '.auth-form__icon-password-shown'
  );
  const hiddenIconArrEl = document.querySelectorAll(
    '.auth-form__icon-password'
  );

  inputArrEl.forEach(el => {
    let type = '';

    if (el.dataset.input === e.currentTarget.getAttribute('data-icon')) {
      type = el.getAttribute('type') === 'password' ? 'text' : 'password';
      el.setAttribute('type', type);
    }

    hiddenIconArrEl.forEach(el => {
      if (el.dataset.icon === e.currentTarget.getAttribute('data-icon')) {
        el.closest('.auth-form__icon-wrap').classList.toggle('is-hidden');
      }
    });

    showIconArrEl.forEach(el => {
      if (el.dataset.icon === e.currentTarget.getAttribute('data-icon')) {
        el.closest('.auth-form__icon-show-wrap').classList.toggle('is-hidden');
      }
    });
  });
}
