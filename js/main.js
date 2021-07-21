let email = document.getElementById('email');
let form = document.getElementById('form');
let errorMessage = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
      errorMessage.textContent = '';
    } else {
      e.preventDefault();
      errorMessage.textContent = 'Oops! Please check your email';
    }
  } else {
    e.preventDefault();
    errorMessage.textContent = 'Oops! Please check your email';
  }
});
