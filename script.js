let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmpassword');
let messageRow = document.querySelector('.row4');
let button = document.querySelector('button');

function checkError() {
  console.log(password);
  pass1 = password.value;
  pass2 = confirmPassword.value;
  if (pass1 === pass2) {
    console.log('right');
    password.setAttribute('class', 'correct');
    confirmPassword.setAttribute('class', 'correct');
    messageRow.setAttribute('class', 'correct')
    messageRow.textContent = 'Passwords Match!'
  } else {
    console.log('wrong')
    password.setAttribute('class', 'error');
    confirmPassword.setAttribute('class', 'error');
    messageRow.setAttribute('class', 'error')
    messageRow.textContent = 'Passwords Do Not Match!'
  }
}

password.addEventListener('focusout', checkError);
confirmPassword.addEventListener('focusout', checkError);
button.addEventListener('click', (e) => {
  if (pass1 !== pass2) {
    e.preventDefault();
  }
})
